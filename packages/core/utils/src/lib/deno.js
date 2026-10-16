"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DenoPermission = exports.deno = void 0;
const tslib_1 = require("tslib");
const nanoid_1 = require("nanoid");
const sandbox_error_1 = require("./sandbox-error");
exports.deno = {
    /**
     * Runs a program body in a one-shot Deno process. The body must assign its
     * output to a `result` variable. Resolves with the result, or rejects with
     * an Error carrying the process stdout/stderr.
     */
    run(_a) {
        return tslib_1.__awaiter(this, arguments, void 0, function* ({ body, permissions, cwd, memoryLimitMb = DEFAULT_MEMORY_LIMIT_MB, allowReadPaths = [], resolveNodeModules = false, env = {}, denoDirBase, timeoutMs }) {
            const marker = newResultMarker();
            const { child, denoPath, denoDir } = yield spawnDeno({ entry: '-', permissions, cwd, memoryLimitMb, allowReadPaths, resolveNodeModules, env, denoDirBase });
            child.stdin.end(buildRunProgram({ body, marker }));
            const killTimer = timeoutMs === undefined ? undefined : setTimeout(() => child.kill('SIGKILL'), timeoutMs);
            return new Promise((resolve, reject) => {
                let capturedStdout = '';
                let capturedStderr = '';
                let settled = false;
                child.stdout.on('data', (data) => {
                    capturedStdout += data.toString();
                });
                child.stderr.on('data', (data) => {
                    const text = data.toString();
                    capturedStderr += text;
                    console.error(text.trimEnd());
                });
                child.on('close', (code, signal) => {
                    clearTimeout(killTimer);
                    void removeDenoDir(denoDir);
                    if (settled) {
                        return;
                    }
                    settled = true;
                    const { userOutput, resultJson } = extractResult(capturedStdout, marker);
                    if (userOutput.trim()) {
                        console.log(userOutput.trimEnd());
                    }
                    if (resultJson === null) {
                        reject(sandbox_error_1.sandboxError.build({ error: `Deno process exited with code ${code} and signal ${signal} without returning a result`, stdout: userOutput, stderr: capturedStderr }));
                        return;
                    }
                    let message;
                    try {
                        message = JSON.parse(resultJson);
                    }
                    catch (_a) {
                        const processDied = code !== 0 || signal !== null;
                        const error = processDied
                            ? `Deno process exited with code ${code} and signal ${signal} while writing its result`
                            : 'Deno process returned a malformed result';
                        reject(sandbox_error_1.sandboxError.build({ error, stdout: userOutput, stderr: capturedStderr }));
                        return;
                    }
                    if (!message.success) {
                        reject(sandbox_error_1.sandboxError.build({ error: message.error, stdout: userOutput, stderr: capturedStderr }));
                    }
                    else if (code !== 0) {
                        // e.g. an unhandled rejection fired after the result was printed — deno exits
                        // non-zero, so the run must fail even though a success marker exists.
                        reject(sandbox_error_1.sandboxError.build({ error: `Deno process exited with code ${code} and signal ${signal} after producing a result`, stdout: userOutput, stderr: capturedStderr }));
                    }
                    else {
                        resolve(message.result);
                    }
                });
                child.on('error', (error) => {
                    clearTimeout(killTimer);
                    void removeDenoDir(denoDir);
                    if (settled) {
                        return;
                    }
                    settled = true;
                    reject(sandbox_error_1.sandboxError.build({ error: `Failed to spawn deno (${denoPath}): ${error.message}`, stdout: capturedStdout, stderr: capturedStderr }));
                });
            });
        });
    },
    createSession(_a) {
        return tslib_1.__awaiter(this, arguments, void 0, function* ({ bootstrapBody, permissions, cwd, memoryLimitMb = DEFAULT_MEMORY_LIMIT_MB, env = {}, idleTimeoutMs = DEFAULT_SESSION_IDLE_TIMEOUT_MS }) {
            const marker = newResultMarker();
            const { child, denoPath, denoDir } = yield spawnDeno({
                entry: { body: buildSessionProgram({ bootstrapBody, marker }) },
                permissions,
                cwd,
                memoryLimitMb,
                allowReadPaths: [],
                resolveNodeModules: false,
                env,
            });
            const pending = new Map();
            let nextCommandId = 0;
            let alive = true;
            let stdoutBuffer = '';
            let capturedStderr = '';
            let idleTimer = null;
            const refreshWatchdog = () => {
                if (idleTimer !== null) {
                    clearTimeout(idleTimer);
                    idleTimer = null;
                }
                if (!alive || pending.size === 0) {
                    return;
                }
                idleTimer = setTimeout(() => {
                    child.kill('SIGKILL');
                    failAllPending(sandbox_error_1.sandboxError.build({ error: `Deno session made no progress for ${idleTimeoutMs}ms`, stdout: '', stderr: capturedStderr }));
                }, idleTimeoutMs);
            };
            const settleResponse = (line) => {
                let message = null;
                try {
                    message = JSON.parse(line.slice(marker.length));
                }
                catch (_a) {
                    return;
                }
                if (message === null) {
                    return;
                }
                const command = pending.get(message.id);
                if (command === undefined) {
                    return;
                }
                pending.delete(message.id);
                refreshWatchdog();
                if (message.success) {
                    command.resolve(message.result);
                }
                else {
                    command.reject(sandbox_error_1.sandboxError.build({ error: message.error, stdout: '', stderr: capturedStderr }));
                }
                capturedStderr = '';
            };
            child.stdout.setEncoding('utf8');
            child.stderr.setEncoding('utf8');
            child.stdout.on('data', (chunk) => {
                stdoutBuffer += chunk;
                let newline = stdoutBuffer.indexOf('\n');
                while (newline !== -1) {
                    const line = stdoutBuffer.slice(0, newline);
                    stdoutBuffer = stdoutBuffer.slice(newline + 1);
                    if (line.startsWith(marker)) {
                        settleResponse(line);
                    }
                    else if (line.trim()) {
                        console.log(line);
                    }
                    newline = stdoutBuffer.indexOf('\n');
                }
            });
            child.stderr.on('data', (chunk) => {
                capturedStderr += chunk;
                console.error(chunk.trimEnd());
            });
            const failAllPending = (error) => {
                alive = false;
                if (idleTimer !== null) {
                    clearTimeout(idleTimer);
                    idleTimer = null;
                }
                for (const command of pending.values()) {
                    command.reject(error);
                }
                pending.clear();
            };
            child.on('close', (code, signal) => {
                void removeDenoDir(denoDir);
                failAllPending(sandbox_error_1.sandboxError.build({ error: `Deno session exited with code ${code} and signal ${signal}`, stdout: '', stderr: capturedStderr }));
            });
            child.on('error', (error) => {
                void removeDenoDir(denoDir);
                failAllPending(sandbox_error_1.sandboxError.build({ error: `Failed to spawn deno (${denoPath}): ${error.message}`, stdout: '', stderr: capturedStderr }));
            });
            child.stdin.on('error', (error) => {
                child.kill('SIGKILL');
                failAllPending(sandbox_error_1.sandboxError.build({ error: `Deno session stdin error: ${error.message}`, stdout: '', stderr: capturedStderr }));
            });
            const send = (command) => {
                if (!alive) {
                    return Promise.reject(sandbox_error_1.sandboxError.build({ error: 'Deno session is not running', stdout: '', stderr: capturedStderr }));
                }
                const id = String(nextCommandId++);
                let payload;
                try {
                    payload = `${JSON.stringify(Object.assign(Object.assign({}, command), { id }))}\n`;
                }
                catch (stringifyError) {
                    return Promise.reject(stringifyError);
                }
                return new Promise((resolve, reject) => {
                    pending.set(id, { resolve, reject });
                    refreshWatchdog();
                    child.stdin.write(payload, (writeError) => {
                        if (writeError && pending.delete(id)) {
                            refreshWatchdog();
                            reject(sandbox_error_1.sandboxError.build({ error: `Failed to write to deno session: ${writeError.message}`, stdout: '', stderr: capturedStderr }));
                        }
                    });
                });
            };
            return {
                setGlobal: (_a) => tslib_1.__awaiter(this, [_a], void 0, function* ({ key, value }) {
                    yield send({ kind: 'set', key, value });
                }),
                run: ({ script }) => {
                    return send({ kind: 'run', script });
                },
                isAlive: () => alive,
                dispose: () => {
                    alive = false;
                    child.kill('SIGKILL');
                },
            };
        });
    },
};
// Loaded lazily so this module stays importable from browser bundles — the
// barrel re-exports it into web and piece builds, which must never resolve
// node builtins at load time.
let nodeApisCache = null;
function getNodeApis() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (nodeApisCache === null) {
            const [childProcess, os, fs] = yield Promise.all([
                Promise.resolve().then(() => tslib_1.__importStar(require('node:child_process'))),
                Promise.resolve().then(() => tslib_1.__importStar(require('node:os'))),
                Promise.resolve().then(() => tslib_1.__importStar(require('node:fs/promises'))),
            ]);
            nodeApisCache = { childProcess, os, fs };
        }
        return nodeApisCache;
    });
}
function removeDenoDir(denoDir) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const { fs } = yield getNodeApis();
        yield fs.rm(denoDir, { recursive: true, force: true }).catch(() => undefined);
    });
}
function newResultMarker() {
    return `__AP_DENO_RESULT_${(0, nanoid_1.nanoid)()}__`; // Random so it's not guessable and potentially printed by user code
}
function spawnDeno(_a) {
    return tslib_1.__awaiter(this, arguments, void 0, function* ({ entry, permissions, cwd, memoryLimitMb, allowReadPaths, resolveNodeModules, env, denoDirBase }) {
        var _b;
        const { childProcess, os, fs } = yield getNodeApis();
        const denoPath = resolveDenoPath();
        const denoDir = yield fs.mkdtemp(`${denoDirBase !== null && denoDirBase !== void 0 ? denoDirBase : os.tmpdir()}/ap-deno-`);
        let entryArg;
        if (typeof entry === 'string') {
            entryArg = entry;
        }
        else {
            entryArg = `${denoDir}/main.mjs`;
            try {
                yield fs.writeFile(entryArg, entry.body);
            }
            catch (error) {
                yield removeDenoDir(denoDir);
                throw error;
            }
        }
        const child = childProcess.spawn(denoPath, [
            'run',
            '--quiet',
            '--no-prompt',
            '--no-config',
            '--no-lock',
            '--no-remote',
            resolveNodeModules ? '--node-modules-dir=manual' : '--no-npm',
            `--v8-flags=--max-old-space-size=${memoryLimitMb}`,
            ...toPermissionFlags({ permissions, tmpDir: os.tmpdir() }),
            ...permissions.includes(DenoPermission.ALL) ? [] : allowReadPaths.map((path) => `--allow-read=${path}`),
            entryArg,
        ], {
            cwd,
            env: Object.assign(Object.assign({ PATH: (_b = process.env['PATH']) !== null && _b !== void 0 ? _b : '' }, env), { DENO_DIR: denoDir }),
            stdio: ['pipe', 'pipe', 'pipe'],
        });
        return { child, denoPath, denoDir };
    });
}
function resolveDenoPath() {
    if (process.env['AP_DENO_PATH'] === undefined) {
        throw new Error('AP_DENO_PATH is not set: point it at the deno binary to run the code sandbox');
    }
    return process.env['AP_DENO_PATH'];
}
function toPermissionFlags({ permissions, tmpDir }) {
    if (permissions.includes(DenoPermission.ALL)) {
        return ['-A'];
    }
    return permissions.flatMap((permission) => {
        switch (permission) {
            case DenoPermission.NET:
                return ['--allow-net'];
            case DenoPermission.ENV:
                return ['--allow-env'];
            case DenoPermission.RUN:
                return ['--allow-run'];
            case DenoPermission.SYS:
                return ['--allow-sys'];
            case DenoPermission.WRITE_TMP:
                return [`--allow-write=${tmpDir}`];
            case DenoPermission.READ_TMP:
                return [`--allow-read=${tmpDir}`];
            case DenoPermission.ALL:
            default:
                return [];
        }
    });
}
function buildRunProgram({ body, marker }) {
    return `
${sandbox_error_1.sandboxError.payloadSource}
let settled = false;
const emit = (payload) => {
    if (settled) return;
    settled = true;
    console.log(${JSON.stringify(marker)} + JSON.stringify(payload));
};
globalThis.addEventListener('unhandledrejection', (event) => {
    event.preventDefault();
    emit({ success: false, error: toErrorPayload(event.reason) });
    Deno.exit(1);
});
try {
${body}
    await new Promise((resolve) => setTimeout(resolve, 0));
    emit({ success: true, result: result ?? null });
}
catch (error) {
    emit({ success: false, error: toErrorPayload(error) });
    Deno.exit(1);
}
`;
}
/**
 * The session child's program (ESM, so its own bindings are hidden from the
 * scripts it evaluates in global scope).
 * stdin:  {"kind":"run","script":"step_1.a + 1","id":"0"}
 * stdout: MARKER{"id":"0","success":true,"result":42}
 */
function buildSessionProgram({ bootstrapBody, marker }) {
    return `
${sandbox_error_1.sandboxError.payloadSource}
${bootstrapBody}
${SESSION_REPLY_CHANNEL(marker)}
${SESSION_REJECTION_TRACKING}
${SESSION_SCRIPT_RUNNER}
${SESSION_COMMAND_LOOP}
`;
}
/**
 * MARKER{"id":"0","success":true,"result":42}  -> protocol reply
 * hello from a script's console.log            -> forwarded as user output
 * console.log is bound up front so a script overwriting it can't break this.
 */
const SESSION_REPLY_CHANNEL = (marker) => `
const print = console.log.bind(console);
const reply = (payload) => {
    print(${JSON.stringify(marker)} + JSON.stringify(payload));
};`;
/**
 * e.g. `Promise.reject('late')` inside a run fails that run only;
 * the process stays alive (the one-shot runner exits instead).
 */
const SESSION_REJECTION_TRACKING = `
let failCurrentRun = null;
globalThis.addEventListener('unhandledrejection', (event) => {
    event.preventDefault();
    if (failCurrentRun) {
        failCurrentRun(event.reason);
    }
    else {
        console.error('Unhandled rejection in deno session:', event.reason);
    }
});`;
/**
 * (0, eval)('(' + script + ')'): global scope, and the parens make
 * {"where": "a"} an object literal, not a block. The setTimeout(0) lets a
 * promise the script left behind reject before success is reported.
 */
const SESSION_SCRIPT_RUNNER = `
const runScript = (script) => new Promise((resolve, reject) => {
    failCurrentRun = reject;
    Promise.resolve()
        .then(() => (0, eval)('(' + script + ')'))
        .then(async (value) => {
            await new Promise((tick) => setTimeout(tick, 0));
            resolve(value);
        })
        .catch(reject);
});`;
/**
 * {"kind":"set","key":"step_1","value":{...}}  -> globalThis.step_1 = {...}
 * {"kind":"run","script":"step_1.a"}           -> reply success/failure
 * Runs are awaited one at a time, so failCurrentRun is the only run in flight.
 * Line splitting is hand-rolled: --no-remote rules out std's TextLineStream.
 */
const SESSION_COMMAND_LOOP = `
const decoder = new TextDecoder();
let buffered = '';
for await (const chunk of Deno.stdin.readable) {
    buffered += decoder.decode(chunk, { stream: true });
    let newline = buffered.indexOf('\\n');
    while (newline !== -1) {
        const line = buffered.slice(0, newline);
        buffered = buffered.slice(newline + 1);
        newline = buffered.indexOf('\\n');
        if (line.trim() === '') {
            continue;
        }
        let command;
        try {
            command = JSON.parse(line);
        }
        catch {
            continue;
        }
        if (command.kind === 'set') {
            globalThis[command.key] = command.value;
            reply({ id: command.id, success: true, result: null });
            continue;
        }
        try {
            const result = await runScript(command.script);
            reply({ id: command.id, success: true, result: result ?? null });
        }
        catch (error) {
            reply({ id: command.id, success: false, error: toErrorPayload(error) });
        }
        finally {
            failCurrentRun = null;
        }
    }
}`;
function extractResult(stdout, marker) {
    const idx = stdout.lastIndexOf(marker);
    if (idx === -1) {
        return { userOutput: stdout, resultJson: null };
    }
    const after = stdout.slice(idx + marker.length);
    const newline = after.indexOf('\n');
    const resultJson = newline === -1 ? after : after.slice(0, newline);
    const trailing = newline === -1 ? '' : after.slice(newline + 1);
    return { userOutput: stdout.slice(0, idx) + trailing, resultJson };
}
const DEFAULT_MEMORY_LIMIT_MB = 128;
const DEFAULT_SESSION_IDLE_TIMEOUT_MS = 30000;
var DenoPermission;
(function (DenoPermission) {
    DenoPermission["ALL"] = "ALL";
    DenoPermission["NET"] = "NET";
    DenoPermission["ENV"] = "ENV";
    DenoPermission["RUN"] = "RUN";
    DenoPermission["SYS"] = "SYS";
    DenoPermission["WRITE_TMP"] = "WRITE_TMP";
    DenoPermission["READ_TMP"] = "READ_TMP";
})(DenoPermission || (exports.DenoPermission = DenoPermission = {}));
//# sourceMappingURL=deno.js.map
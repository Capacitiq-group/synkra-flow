import { Readable } from 'node:stream';
import type { ApFile, ApStreamingFile } from '@activepieces/pieces-framework';
declare function toStreamingBody(file: ApStreamingFile | ApFile): {
    body: Readable;
    size: number | undefined;
};
declare function readChunks({ readable, chunkSize, }: {
    readable: Readable;
    chunkSize: number;
}): AsyncGenerator<Buffer>;
export declare const streamUtils: {
    readChunks: typeof readChunks;
    toStreamingBody: typeof toStreamingBody;
};
export {};

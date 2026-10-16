"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swatchUtils = void 0;
const SWATCH_COUNT = 12;
function hashToIndex({ seed }) {
    let hash = 0;
    for (let position = 0; position < seed.length; position++) {
        hash = (hash << 5) - hash + seed.charCodeAt(position);
        hash |= 0;
    }
    return Math.abs(hash) % SWATCH_COUNT;
}
function varsFor({ index }) {
    const slot = (((index % SWATCH_COUNT) + SWATCH_COUNT) % SWATCH_COUNT) + 1;
    return {
        mark: `var(--swatch-${slot}-mark)`,
        on: `var(--swatch-${slot}-on)`,
        surface: `var(--swatch-${slot}-surface)`,
        ink: `var(--swatch-${slot}-ink)`,
        line: `var(--swatch-${slot}-line)`,
    };
}
function varsForSeed({ seed }) {
    return varsFor({ index: hashToIndex({ seed }) });
}
exports.swatchUtils = {
    hashToIndex,
    varsFor,
    varsForSeed,
};
//# sourceMappingURL=swatch.js.map
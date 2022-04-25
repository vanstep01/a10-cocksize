// @ts-check

/**
 * @param {number} value
 * @param {number} min
 * @param {number} max
 */
export function interpolate(value, min, max) {
    return Math.floor(value * (max - min + 1)) + min;
}

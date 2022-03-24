// @ts-check

import { interpolate } from './interpolate.js';
import { sfc32 } from './sfc32.js';

/**
 * @param {string} userId
 * @param {number} min
 * @param {number} max
 */
export function getDickSize(userId, min, max) {
    const rnd = sfc32(userId);
    return interpolate(rnd(), min, max);
}

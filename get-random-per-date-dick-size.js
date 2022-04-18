// @ts-check

import { interpolate } from './interpolate.js';
import { sfc32 } from './sfc32.js';

/**
 * @param {string} userId
 * @param {Date} date
 * @param {number} min
 * @param {number} max
 */
export function getRandomPerDateDickSize(userId, date, min, max) {
    const dateString = date.toDateString();
    const rnd = sfc32(`${userId}_${dateString}`);
    return interpolate(rnd(), min, max);
}

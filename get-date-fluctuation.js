import { interpolate } from './interpolate.js';
import { sfc32 } from './sfc32.js';

/**
 * @param {Date} date
 * @param {number} min
 * @param {number} max
 */
export function getDateFluctuation(date, min, max) {
    const dateString = date.toDateString();
    const rnd = sfc32(dateString);
    return interpolate(rnd(), min, max);
}

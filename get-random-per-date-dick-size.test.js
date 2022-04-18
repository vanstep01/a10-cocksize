//@ts-check
import assert from 'assert';
import { getRandomPerDateDickSize } from './get-random-per-date-dick-size.js';

assert.equal(
    getRandomPerDateDickSize('a10-user', new Date('2022-03-24'), 0, 51),
    17,
);

assert.equal(
    getRandomPerDateDickSize('a10-user', new Date('2022-04-18'), 0, 51),
    30,
);

assert.equal(
    getRandomPerDateDickSize('a10-user-2', new Date('2022-04-18'), 0, 51),
    13,
);

// @ts-check
import assert from 'assert';
import { getDickSize } from './get-dick-size.js';

assert.equal(getDickSize('123', 1, 49), 8);

assert.equal(getDickSize('rs_n4k', 1, 49), 29);

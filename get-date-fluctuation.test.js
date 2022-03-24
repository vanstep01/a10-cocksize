//@ts-check
import assert from 'assert';
import { getDateFluctuation } from './get-date-fluctuation.js';

assert.equal(getDateFluctuation(new Date('2022-03-24'), -10, 10), -5);

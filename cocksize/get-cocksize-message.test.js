import assert from 'assert';
import { getCockSizeMessage } from './get-cocksize-message';

assert.equal(getCockSizeMessage('123'), 'My cock size is *8cm* 😐');

assert.equal(getCockSizeMessage('rs_n4k'), 'My cock size is *29cm* 🥳');

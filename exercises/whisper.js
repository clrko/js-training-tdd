'use strict';

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

// Your code:

const whisper = element => element.toLowerCase();

//* Begin of tests
const assert = require('assert');
assert.strictEqual(typeof whisper, 'function');
assert.strictEqual(whisper.length, 1);
assert.strictEqual(whisper('HELLO'), 'hello');
assert.strictEqual(whisper("J'AI 27 ANS"), "j'ai 27 ans");
//assert.fail('You must write your own tests');
// End of tests */

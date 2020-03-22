'use strict';

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

// Your code:

const yell = element => element.toUpperCase();

//* Begin of tests
const assert = require('assert');
assert.strictEqual(typeof yell, 'function');
assert.strictEqual(yell.length, 1);
assert.strictEqual(yell('hello'), 'HELLO');
assert.strictEqual(yell("J'ai 27 ans"), "J'AI 27 ANS");
//assert.fail('You must write your own tests');
// End of tests */

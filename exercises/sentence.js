'use strict';

/*
 * Create a `sentence` function that takes an array of strings
 * and return a string of all the element separated by a space
 *
 */

// Your code:

// Methode 1

const sentence = element => {
    let result = '';
    for (let i = 0; i < element.length; i++) {
        result += element[i] + (i === element.length - 1 ? '' : ' ');
    }
    return result;
}

/* Methode 2

const sentence = element => {
    let result = '';
    for (let i = 0; i < element.length; i++) {
        result += element[i] + ' ';
    };

    let result2 = '';
    for (let i = 0; i < result.length - 1; i++) {
        result2 += result[i];
    }
    return result2;
}*/


// Sinon à la place du ternaire de l'expression, on peut faire une if  de totue l'expression.

//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof sentence, 'function');
assert.strictEqual(sentence.length, 1);
assert.deepStrictEqual(sentence([ 'a', 'b', 'c' ]), 'a b c');
assert.deepStrictEqual(sentence([ 'a', '1', 'c' ]), 'a 1 c');
assert.deepStrictEqual(sentence([ 'a', '1', 'c', 'd', 'e', 'f' ]), 'a 1 c d e f');
assert.deepStrictEqual(sentence([ 'wol.lol', 'lo,lol' ]), 'wol.lol lo,lol');
// End of tests */

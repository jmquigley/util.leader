'use strict';

const test = require('ava');
const fs = require('fs-extra');
const leader = require('./index');

test('Validating leader output', t => {
    let msg = 'Test Leader Message';
    let chv = '*******************';
    let arr = leader(msg, {log: null});

    t.is(arr.length, 6);
    t.is(arr[0], '');   //
    t.is(arr[1], '');   //
    t.is(arr[2], chv);  // *******************
    t.is(arr[3], msg);  // Test Leader Message
    t.is(arr[4], chv);  // *******************
    t.is(arr[5], '');   //
});

'use strict';

const test = require('ava');
const leader = require('./index');

test('Default leader output', t => {
	let msg = 'Test Leader Message';
	let chv = '*******************';
	let arr = leader(msg);

	t.is(arr.length, 6);
	t.is(arr[0], '');   //
	t.is(arr[1], '');   //
	t.is(arr[2], chv);  // *******************
	t.is(arr[3], msg);  // Test Leader Message
	t.is(arr[4], chv);  // *******************
	t.is(arr[5], '');   //
});

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

test('Validating output without leading/trailing space', t => {
	let msg = 'Test Leader Message';
	let chv = '*******************';
	let arr = leader(msg, {
		log: null,
		leadingLines: -1,
		trailingLines: -1
	});

	t.is(arr.length, 3);
	t.is(arr[0], chv);  // *******************
	t.is(arr[1], msg);  // Test Leader Message
	t.is(arr[2], chv);  // *******************
});

test('Validating output float leading/trailing lines', t => {
	let msg = 'Test Leader Message';
	let chv = '*******************';
	let arr = leader(msg, {
		log: null,
		leadingLines: 1.51,
		trailingLines: 1.49
	});

	t.is(arr.length, 6);
	t.is(arr[0], '');   //
	t.is(arr[1], '');   //
	t.is(arr[2], chv);  // *******************
	t.is(arr[3], msg);  // Test Leader Message
	t.is(arr[4], chv);  // *******************
	t.is(arr[5], '');   //
});

'use strict';

import test from 'ava';
import leader from './index';

test('Default leader output', t => {
	const msg = 'Test Leader Message';
	const chv = '*******************';
	const arr = leader(msg);

	t.is(arr.length, 6);
	t.is(arr[0], '');   //
	t.is(arr[1], '');   //
	t.is(arr[2], chv);  // *******************
	t.is(arr[3], msg);  // Test Leader Message
	t.is(arr[4], chv);  // *******************
	t.is(arr[5], '');   //
});

test('Validating leader output', t => {
	const msg = 'Test Leader Message';
	const chv = '*******************';
	const arr = leader(msg, {log: null});

	t.is(arr.length, 6);
	t.is(arr[0], '');   //
	t.is(arr[1], '');   //
	t.is(arr[2], chv);  // *******************
	t.is(arr[3], msg);  // Test Leader Message
	t.is(arr[4], chv);  // *******************
	t.is(arr[5], '');   //
});

test('Validating output without leading/trailing space', t => {
	const msg = 'Test Leader Message';
	const chv = '*******************';
	const arr = leader(msg, {
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
	const msg = 'Test Leader Message';
	const chv = '*******************';
	const arr = leader(msg, {
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

test('Create leader with multiple lines in the message', t => {
	const msg = 'Test Leader Message\nLine 2\r\nLine 3';
	const chv = '*******************';

	const arr = leader(msg, {log: null});

	t.is(arr.length, 8);
	t.is(arr[0], '');                     //
	t.is(arr[1], '');                     //
	t.is(arr[2], chv);                    // *******************
	t.is(arr[3], 'Test Leader Message');  // Test Leader Message
	t.is(arr[4], 'Line 2');               // Line 2
	t.is(arr[5], 'Line 3');               // Line 3
	t.is(arr[6], chv);                    // *******************
	t.is(arr[7], '');                     //
});

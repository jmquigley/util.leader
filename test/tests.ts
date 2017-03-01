'use strict';

import * as assert from 'assert';
import {leader} from '../index';

describe('Testing leader function', () => {

	it('Default leader output', () => {
		let msg = 'Test Leader Message';
		let chv = '*******************';
		let arr = leader(msg);

		assert.equal(arr.length, 6);
		assert.equal(arr[0], '');   //
		assert.equal(arr[1], '');   //
		assert.equal(arr[2], chv);  // *******************
		assert.equal(arr[3], msg);  // Test Leader Message
		assert.equal(arr[4], chv);  // *******************
		assert.equal(arr[5], '');   //
	});

	it('Validating leader output', () => {
		let msg = 'Test Leader Message';
		let chv = '*******************';
		let arr = leader(msg, {log: null});

		assert.equal(arr.length, 6);
		assert.equal(arr[0], '');   //
		assert.equal(arr[1], '');   //
		assert.equal(arr[2], chv);  // *******************
		assert.equal(arr[3], msg);  // Test Leader Message
		assert.equal(arr[4], chv);  // *******************
		assert.equal(arr[5], '');   //
	});

	it('Validating output without leading/trailing space', () => {
		let msg = 'Test Leader Message';
		let chv = '*******************';
		let arr = leader(msg, {
			log: null,
			leadingLines: -1,
			trailingLines: -1
		});

		assert.equal(arr.length, 3);
		assert.equal(arr[0], chv);  // *******************
		assert.equal(arr[1], msg);  // Test Leader Message
		assert.equal(arr[2], chv);  // *******************
	});

	it('Validating output float leading/trailing lines', () => {
		let msg = 'Test Leader Message';
		let chv = '*******************';
		let arr = leader(msg, {
			log: null,
			leadingLines: 1.51,
			trailingLines: 1.49
		});

		assert.equal(arr.length, 6);
		assert.equal(arr[0], '');   //
		assert.equal(arr[1], '');   //
		assert.equal(arr[2], chv);  // *******************
		assert.equal(arr[3], msg);  // Test Leader Message
		assert.equal(arr[4], chv);  // *******************
		assert.equal(arr[5], '');   //
	});

});

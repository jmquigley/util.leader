'use strict';

const _ = require('lodash');
const objectAssign = require('object-assign');

module.exports = function(msg, opts = undefined) {
	opts = objectAssign({
		chevron: '*',
		log: console.log,
		leadingLines: 2,
		trailingLines: 1
	}, opts);

	let arr = [];

	if (opts.leadingLines < 0) {
		opts.leadingLines = 0;
	}

	if (opts.trailingLines < 0) {
		opts.trailingLines = 0;
	}

	_.times(Math.round(opts.leadingLines), function() {
		arr.push('');
	});

	arr.push(opts.chevron.repeat(msg.length));
	arr.push(msg);
	arr.push(opts.chevron.repeat(msg.length));

	_.times(Math.round(opts.trailingLines), function() {
		arr.push('');
	});

	if (opts.log) {
		arr.forEach(function(line) {
			opts.log(line);
		});
	}

	return arr;
};

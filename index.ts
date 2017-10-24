'use strict';

import * as _ from 'lodash';

export interface ILeaderOpts {
	chevron?: string;
	log?: any;
	leadingLines?: number;
	trailingLines?: number;
}

export function leader(msg: string, opts?: ILeaderOpts) {
	opts = Object.assign({
		chevron: '*',
		log: console.log,
		leadingLines: 2,
		trailingLines: 1
	}, opts);

	let arr: string[] = [];

	if (opts.leadingLines < 0) {
		opts.leadingLines = 0;
	}

	if (opts.trailingLines < 0) {
		opts.trailingLines = 0;
	}

	_.times(Math.round(opts.leadingLines), () => {
		arr.push('');
	});

	const lines: string[] = msg.split(/\r\n|\r|\n/);
	let length: number = 0;

	for (const line of lines) {
		if (line.length > length) length = line.length;
	}

	arr.push(opts.chevron.repeat(length));
	arr = arr.concat(lines);
	arr.push(opts.chevron.repeat(length));

	_.times(Math.round(opts.trailingLines), () => {
		arr.push('');
	});

	if (opts.log) {
		arr.forEach(line => {
			opts.log(line);
		});
	}

	return arr;
}

export default leader;

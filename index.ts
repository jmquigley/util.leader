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

	const arr: string[] = [];

	if (opts.leadingLines < 0) {
		opts.leadingLines = 0;
	}

	if (opts.trailingLines < 0) {
		opts.trailingLines = 0;
	}

	_.times(Math.round(opts.leadingLines), () => {
		arr.push('');
	});

	arr.push(opts.chevron.repeat(msg.length));
	arr.push(msg);
	arr.push(opts.chevron.repeat(msg.length));

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

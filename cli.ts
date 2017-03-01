#!/usr/bin/env node

'use strict';

const leader = require('./index');

process.argv.shift();  // remove first "node" program
process.argv.shift();  // remove the "cli" script reference

leader(process.argv.join(' '));

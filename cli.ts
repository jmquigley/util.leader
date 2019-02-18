#!/usr/bin/env node

"use strict";

import {leader} from "./index";

process.argv.shift(); // remove first "node" program
process.argv.shift(); // remove the "cli" script reference

leader(process.argv.join(" "));

#!/usr/bin/env node

const path = require('path');
require('babel-polyfill');
require('babel-register')(require('./.babelrc.js'));
require('module-alias/register');
process.execArgv.splice(1, 0, __filename);
process.argv.splice(1, 1);

require(path.resolve(process.cwd(), process.argv[1]));

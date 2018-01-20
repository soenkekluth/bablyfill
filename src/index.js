#!/usr/bin/env node

const path = require('path');
const program = require('commander');

function run(src) {
  require('./run');
  require(path.resolve(process.cwd(), src));
}

function transform(src, dest) {
  const { processFile, transpile } = require('./transpile');
  transpile(src, dest);
}

program
  .command('run [src]')
  .description('run es6 script')
  .action(function(src, options) {
    run(src);
  });

program
  .command('transform [src] [dest]')
  .alias('t')
  .description('transform es6 code')
  .action(function(src, dest, options) {
    transform(src, dest);
  });

program.parse(process.argv);

if (program.args.length === 0) {
  try {
    run('index.js');
  } catch (e) {
    console.error(e);
  }
} else if (program.args.length === 1) {
  try {
    run(program.args[0]);
  } catch (e) {
    console.error(e);
  }
}

#!/usr/bin/env node
const path = require('path');
var program = require('commander');

function run(src) {
  require('./run');
  require(path.resolve(process.cwd(), src));
  // console.log(name, sub, options);
}

function transform(src, dest) {
  const { processFile, transpile } = require('./transpile');
  transpile(src, dest);
  // require('./run');
  // require(path.resolve(process.cwd(), options.src));
  // console.log(name, sub, options);
}

program
  .command('run [src]')
  .description('run es6 script')
  // .option('-s, --setup_mode [mode]', 'Which setup mode to use')
  .action(function(src, options) {
    // console.log('running %s ', src);
    run(src);
  });

program
  .command('transform [src] [dest]')
  .alias('t')
  .description('transform es6 code')
  // .option('-s, --setup_mode [mode]', 'Which setup mode to use')
  .action(function(src, dest, options) {
    transform(src, dest);
    // run(src);
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

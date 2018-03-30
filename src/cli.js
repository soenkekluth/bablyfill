#!/usr/bin/env node --harmony
const sade = require('sade');
const path = require('path');
const { version } = require('../package.json');

const name = path.basename(process.argv[1]);
const program = sade(name);

const { run, transform, save, print } = require('./index');

program.version(version).option('--config, -c', 'config');

program
  .command('run <src> [dest]', 'run or transpile esnext code', { default: true })
  .option('--transform, -t', 'transform code')
  .option('--output, -o', 'output file or folder')
  .example('./esfile.js')
  .example('run -t ./src/esnext.js ./lib/esnext.js')
  .example('run -t ./src ./lib')
  .example('run -t ./src/**/*.js ./lib')
  // .example('es6 ./path/esnext.js')
  // .example('devnode ./path/esnext.js')
  // .example('es6ify ./path/esnext.js')
  .action(async (src, dest, options) => {
    const processor = dest ? save : print;
    if (dest || (options && options.t)) {
      const results = await transform(src);
      results.forEach(res => processor(res, dest));

      // results.forEach(res => process.stdout.write(res.code));
      // results.forEach(res => process.stdout.pipe(res.code));
      return;
    }
    run(src);
  });

program.parse(process.argv);

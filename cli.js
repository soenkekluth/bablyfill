#!/usr/bin/env node
const bablyfill = require('./index');

const args = process.argv.slice(2);
if(!args.length || args.length > 1){
  throw(new Error('no module'));
  process.exit();
}
const esModule = args[0];

if(esModule.indexOf('.js') > -1){
  bablyfill();
  require(esModule);
}



#!/usr/bin/env node
const path = require("path");
const bablyfill = require("../");

const args = process.argv.slice(2);
if (!args.length || args.length > 1) {
  throw new Error("no module");
  process.exit();
}
const esModule = path.resolve(process.cwd(), args[0]);

// if(esModule.indexOf('.js') > -1){
bablyfill();
try {
  require(esModule);
} catch (e) {
  if (console) {
    console.error(e);
  }
}
// }

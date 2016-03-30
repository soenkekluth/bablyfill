var bablyfill = require('../index');

// you don't need parameters, when you require the module from your node modules folder.
bablyfill(null, './.babelrc');
// you can just write:
// bablyfill();

require('./es6-app');

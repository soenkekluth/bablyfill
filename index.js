require('babel-polyfill');

var fs = require('fs');
var path = require('path');
var assign = require('object-assign');

module.exports = function bablyfill(conf, babelrcPath) {

  babelrcPath = babelrcPath || path.resolve(__dirname, '../../.babelrc');

  var babelrc;

  try {
    babelrc = fs.readFileSync(babelrcPath);
    babelrc = JSON.parse(babelrc);
  } catch (err) {
    console.error('==>     ERROR: Error parsing your .babelrc. from ' + babelrcPath);
    console.error(err);
    babelrc = null;
  }

  var config = assign({}, babelrc, conf);
  require('babel-core/register')(config);
};

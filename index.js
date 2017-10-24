require('babel-polyfill');

var fs = require('fs');
var path = require('path');
var babelrcFile = '.babelrc';

module.exports = function bablyfill(conf, babelrcPath) {

  if (!babelrcPath) {
    var processDir = fs.realpathSync(process.cwd());
    if (fs.existsSync(path.resolve(processDir, babelrcFile))) {
      babelrcPath = path.resolve(processDir, babelrcFile);
    } else if (fs.existsSync(path.resolve(__dirname, '../../.babelrc'))) {
      babelrcPath = path.resolve(__dirname, '../../.babelrc');
    } else {
      babelrcPath = path.resolve(__dirname, '.babelrc');
    }
  }

  var babelrc;

  try {
    babelrc = fs.readFileSync(babelrcPath);
    babelrc = JSON.parse(babelrc);
  } catch (err) {
    console.error('==>     ERROR: Error parsing your .babelrc. from ' + babelrcPath);
    console.error(err);
    babelrc = null;
  } finally {
    if (babelrc || conf) {
      var config = Object.assign({}, babelrc, conf);
      require('babel-core/register')(config);
    }
  }
};

// const pkg = require('./package.json');
module.exports = {
  babelrc: false,
  presets: [
    require('babel-preset-react'),
    require('babel-preset-flow'),
    require('babel-preset-stage-0'),
    require('babel-preset-stage-1'),
    require('babel-preset-stage-2'),
    require('babel-preset-stage-3'),
    require('babel-preset-es2015'),
    require('babel-preset-es2016'),
    [require('babel-preset-es2017')],
  ],
  plugins: [
    require('babel-plugin-transform-flow-strip-types'),
    require('babel-plugin-transform-regenerator'),
    require('babel-plugin-transform-export-extensions'),
    require('babel-plugin-syntax-dynamic-import'),
    require('babel-plugin-transform-class-properties'),
    require('babel-plugin-transform-object-rest-spread'),
  ],
};

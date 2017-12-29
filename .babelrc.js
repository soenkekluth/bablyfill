const pkg = require('./package.json');
// const engines = pkg.engines;
// const semver = require("semver");
let minNode = 8;
const isBrowser = !!pkg.browser;

// If supporting browsers, very unlikely to also want to target node 8
// if (!isBrowser && engines && engines.node) {
//     if (semver.satisfies("8.0.0", engines.node) && !semver.satisfies("6.0.0", engines.node)) {
//         minNode = 8;
//     }
// }
const targets = {
  node: minNode,
};

const browsers = [
  '>1%',
  'last 2 versions',
  'Firefox ESR',
  'ie 11',
  'not ie < 11', // I really hope you don't allow this masochistic situation in your life
];

if (isBrowser) {
  targets.browsers = browsers;
}

module.exports = {
  babelrc: false,
  presets: [
    require('babel-preset-react'),
    require('babel-preset-flow'),
    require('babel-preset-es2017'),
    require('babel-preset-es2016'),
    [
      require('babel-preset-env'),
      {
        loose: true,
        modules: 'commonjs',
        useBuiltIns: 'entry',
        include: [],
        exclude:
          minNode >= 8 && !!isBrowser
            ? [
                require('babel-plugin-transform-async-to-generator'),
                require('babel-plugin-transform-regenerator'),
              ]
            : [],
        targets: targets,
      },
    ],
  ],
  plugins: [
    require('babel-plugin-transform-flow-strip-types'),
    require('babel-plugin-transform-export-extensions'),
    require('babel-plugin-syntax-dynamic-import'),
    require('babel-plugin-transform-class-properties'),
    require('babel-plugin-transform-object-rest-spread'),
    require('babel-plugin-syntax-trailing-function-commas'),
    require('babel-plugin-transform-exponentiation-operator'),
  ],
};

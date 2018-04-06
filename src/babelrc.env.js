const browsers = [
  'node',
  '>1%',
  'last 2 versions',
  'Firefox ESR',
  'ie 11',
  'not ie < 11', // I really hope you don't allow this masochistic situation in your life
];

const config = {
  presets: [
    [
      require('babel-preset-env'),
      {
        loose: true,
        modules: false,
        useBuiltIns: 'entry',
        targets: browsers,
      },
    ],
  ],
  plugins: [
    [
      require('babel-plugin-transform-es2015-modules-commonjs'),
      {
        loose: true,
      },
    ],
  ],
};

module.exports = config;

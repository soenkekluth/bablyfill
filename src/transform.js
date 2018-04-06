const babel = require('babel-core');
const path = require('path');
const glob = require('glob-adapter').adapter();
// const options = require('./babelrc.es2015.js');
// const options = require('./babelrc.env.js');
const { readFile } = require('./utils');

const transformCode = (code, options = {}) => {
  try {
    const res = babel.transform(code, options);

    if (res.code) {
      return res.code;
    }
  } catch (e) {
    return null;
  }
};

const transformFile = async (src, options) => {
  const res = await readFile(src);
  return transformCode(res, options);
};

class SourceFile {
  constructor(src) {
    this.src = src;
    this.name = path.basename(src);
    this.code = null;
  }

  async transform(options) {
    this.code = await transformFile(this.src, options);
    return this.code;
  }
}

const transform = async (pattern, options) => {
  const result = [];
  const files = await glob.read(pattern);

  for (let i = 0, l = files.length; i < l; i++) {
    const sourceFile = new SourceFile(files[i]);
    await sourceFile.transform(options);
    result.push(sourceFile);
  }

  return result;
};

module.exports = transform;

// transform('src/index.js').then(result => {
//   // console.log('result', result);
//   console.log('result', result.map(r => r.code));
// });

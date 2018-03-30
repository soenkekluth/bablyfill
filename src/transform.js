const babel = require('babel-core');
const path = require('path');
const glob = require('glob-adapter').adapter();
const options = require('./babelrc.es2015.js');
const { readFile } = require('./utils');

const transformCode = code => {
  try {
    const res = babel.transform(code, options);

    if (res.code) {
      return res.code;
    }
  } catch (e) {
    return null;
  }
};

const transformFile = async src => {
  const res = await readFile(src);
  return transformCode(res);
};

class SourceFile {
  constructor(src) {
    this.src = src;
    this.name = path.basename(src);
    this.code = null;
  }

  async transform() {
    this.code = await transformFile(this.src);
    return this.code;
  }
}

const transform = async pattern => {
  const result = [];
  const files = await glob.read(pattern);

  for (let i = 0, l = files.length; i < l; i++) {
    const sourceFile = new SourceFile(files[i]);
    await sourceFile.transform();
    result.push(sourceFile);
  }

  return result;
};

module.exports = transform;

// transform('src/index.js').then(result => {
//   // console.log('result', result);
//   console.log('result', result.map(r => r.code));
// });

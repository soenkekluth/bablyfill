const path = require('path');
const { saveFile } = require('./utils');

function run(src) {
  if (src) {
    require('./bablyfill');
    return require(path.resolve(process.cwd(), src));
  }
  return null;
}

function transform(src, config) {
  return require('./transform')(src, config);
}

async function save(file, dest = './') {
  const fullPath = path.resolve(process.cwd(), file.src);
  let out = path.resolve(fullPath, path.relative(fullPath, dest));
  if (path.extname(file.src) && !path.extname(dest)) {
    out = path.resolve(out, file.name);
  }
  const res = await saveFile(out, file.code);

  process.stdout.write('wrote ' + out);
  return res;
}

async function print(file) {
  process.stdout.write(file.code);
}

module.exports = {
  run,
  transform,
  save,
  print,
};

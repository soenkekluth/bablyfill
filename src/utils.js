const pify = require('pify');
const { readFile, writeFile, stat } = pify(require('fs'));
const { dirname } = require('path');
// const isGlob = require('is-glob');
const mkdirp = pify(require('mkdirp'));

// const readFile = pify(readFile);
// const writeFile = pify(writeFile);

const saveFile = async (dest, data) => {
  const destDir = dirname(dest);
  await mkdirp(destDir);
  const res = await writeFile(dest, data);
  return res;
};

const isDir = async path => {
  const stats = await stat(path);
  return stats && stats.isDirectory();
};

const isFile = async path => {
  const stats = await stat(path);
  return stats && stats.isFile();
};

module.exports = {
  saveFile,
  readFile,
  isDir,
  isFile,
  // isGlob,
};

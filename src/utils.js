const fs = require('fs');
const path = require('path');
const pify = require('pify');
const isGlob = require('is-glob');
const mkdirp = require('mkdirp');

const readFile = async src => pify(fs.readFile)(src, 'utf8');

const saveFile = async (dest, data) => {
  const destDir = path.dirname(dest);
  return pify(mkdirp)(destDir).then(d => {
    return pify(fs.writeFile)(dest, data);
  });
};

const isDir = dirpath => {
  try {
    return fs.statSync(dirpath).isDirectory();
  } catch (err) {
    return false;
  }
};

const isFile = dirpath => {
  try {
    return fs.statSync(dirpath).isFile();
  } catch (err) {
    return false;
  }
};

module.exports = {
  saveFile,
  readFile,
  isDir,
  isFile,
  isGlob,
};

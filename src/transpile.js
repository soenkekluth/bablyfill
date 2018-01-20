const babel = require('babel-core');
const fs = require('fs');
const mm = require('micromatch');
const glob = require('glob');
const mkdirp = require('mkdirp');
// const options = require('./.babelrc.js');
const options = require('./.babelrc.es2015.js');
const path = require('path');
// process.execArgv.splice(1, 0, __filename);
// process.argv.splice(1, 1);


const isDir = (dirpath) => {
  try {
    return fs.statSync(dirpath).isDirectory();
  } catch (err) {
    return false;
  }
};

const isFile = (dirpath) => {
  try {
    return fs.statSync(dirpath).isFile();
  } catch (err) {
    return false;
  }
};

const processFile = (src, dest) => {
  console.log(src, dest);
  const res = babel.transform(fs.readFileSync(src), options);
  if (res.code) {
    fs.writeFileSync(dest, res.code, () => {
      console.log(dest, ' written');
    });
  }
};


const transpile = (src, dest) => {
  const filePath = path.resolve(process.cwd(), src);
  let destDir = path.resolve(process.cwd(), dest);
  if (path.extname(destDir).length) {
    destDir = path.dirname(destDir);
  }
  console.log('destDir', destDir, dest);

  if (destDir.length) {
    mkdirp(destDir, function(err) {
      if (err) {
        console.error(err);
      } else {

        if (fs.existsSync(filePath)) {
          const extname = path.extname(filePath);
          // console.log('extname', extname);
          if (extname === '') {
            glob(filePath + '/**/*.js', (err, matches) => {
              if (matches) {
                matches.forEach((file, index) => {
                  const basename = path.basename(file);
                  processFile(file, path.resolve(dest, basename));
                });
              }
            });
          } else {
            processFile(filePath, dest);
          }
        }
      }
    });
  }
};


module.exports = {
  processFile: processFile,
  transpile: transpile
};

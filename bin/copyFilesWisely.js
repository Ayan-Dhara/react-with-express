const fs = require("fs");
const path = require("path");

const copyFilesWisely = (from, to) => {
  if (!from || !to) {
    throw new Error('from and to are required');
  }
  if (!fs.existsSync(from)) {
    throw new Error('from does not exist');
  }
  if (fs.lstatSync(from).isDirectory()) {
    if(!fs.existsSync(to)) {
      fs.mkdirSync(to);
    }
    fs.readdirSync(from).forEach(file => {
      const fromPath = `${from}/${file}`;
      const toPath = `${to}/${file}`;
      copyFilesWisely(fromPath, toPath);
    });
    const copyDiffs = [["gitignore", ".gitignore"], ["env", ".env"]]
    for(const copyDiff of copyDiffs) {
      if(!fs.existsSync(path.join(to, copyDiff[1]))) {
        if(fs.existsSync(path.join(to, copyDiff[0]))) {
          fs.renameSync(path.join(to, copyDiff[0]), path.join(to, copyDiff[1]));
        }
      }
    }
  } else {
    fs.copyFileSync(from, to);
  }
}

module.exports = copyFilesWisely;

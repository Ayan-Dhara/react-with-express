const fs = require("fs");

const copyFiles = (from, to) => {
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
      const toPath = `${to}/${(file === 'gitignore' || file === "env") ? "." : ""}${file}`;
      copyFiles(fromPath, toPath);
    });
  } else {
    fs.copyFileSync(from, to);
  }
}

module.exports = copyFiles;

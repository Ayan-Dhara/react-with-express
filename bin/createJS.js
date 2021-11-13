const fsExtra = require("fs-extra");
const path = require("path");
const fs = require("fs");
const os = require("os");

const createJSProject = (projectFolder, projectName) => {
  console.log("Creating project files...\n");
  fsExtra.copy(path.join(__dirname, '..', `template/javascript`), `${projectFolder}`)
    .then(() => {
      fs.readFile(`${projectFolder}/package.json`, 'utf-8', (error, data) => {
        if (!error && data) {
          const packageData = JSON.parse(data)
          packageData.name = projectName
          packageData.author = os.userInfo().username;
          const packageJson = JSON.stringify(packageData, null, "  ")
          fs.writeFileSync(`${projectFolder}/package.json`, packageJson)
        }
      })
      fsExtra.exists(`${projectFolder}/.env`, exists => {
        if (!exists)
          fsExtra.exists(`${projectFolder}/env`, exists => {
            if (exists) {
              fsExtra.move(`${projectFolder}/env`, `${projectFolder}/.env`)
            }
          })
      })
      fsExtra.exists(`${projectFolder}/.gitignore`, exists => {
        if (!exists)
          fsExtra.exists(`${projectFolder}/gitignore`, exists => {
            if (exists) {
              fsExtra.move(`${projectFolder}/gitignore`, `${projectFolder}/.gitignore`)
            }
          })
      })
      require('./complitionMessage')(projectName)
    })
}

module.exports = createJSProject;

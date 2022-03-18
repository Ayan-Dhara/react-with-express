const path = require("path");
const fs = require("fs");
const os = require("os");
const copyFilesWisely = require("./copyFilesWisely");

const createProject = (projectFolder, projectName) => {
  console.log("Creating project files...\n");
  if (!fs.existsSync(projectFolder)) {
    fs.mkdirSync(projectFolder);
    console.log(`created ${projectFolder}`);
  }
  copyFilesWisely(path.join(__dirname, '..', `template/fullstack`), `${projectFolder}`)

  // edit package.json
  if(fs.existsSync(`${projectFolder}/package.json`)){
    const packageData = JSON.parse(fs.readFileSync(`${projectFolder}/package.json`, 'utf8'));
    packageData.name = projectName
    packageData.author = os.userInfo().username;
    fs.writeFileSync(`${projectFolder}/package.json`, JSON.stringify(packageData, null, "  "))
  }
  require('./complitionMessage')(projectName)
}

module.exports = createProject;

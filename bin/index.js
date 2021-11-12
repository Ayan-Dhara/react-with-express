#!/usr/bin/env node

const fsExtra = require("fs-extra");
const path = require('path')
const {execSync} = require("child_process");
const fs = require("fs");
const os = require('os');

const projectFolder = process.argv[2]

const createProject = (project) => {
  fsExtra.copy(path.join(__dirname, '..', `template`), `${projectFolder}`)
    .then(() => {
      fs.readFile(`${projectFolder}/package.json`, 'utf-8', (error, data) => {
        if (!error && data) {
          const packageData = JSON.parse(data)
          packageData.name = project
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
      console.log(`  Now run 'npm install' to install the dependencies
  And you are ready to start with your fullstack project
    'npm run dev' to run project in development mode
    'npm run build' then 'npm run start' to run project in production mode
        `)
    })
}

if (!projectFolder) {
  console.log("Specify a project name...")
} else if (projectFolder === '.') {
  if (fs.readdirSync('.').length > 0) {
    console.log("Directory must be empty")
    return
  }
  const currentLocation = execSync("pwd").toString().split('/')
  const currentFolder = currentLocation[currentLocation.length - 1]
  console.log(currentFolder)
  if (/^([a-zA-Z_][a-zA-Z0-9-_]*[a-zA-Z0-9_])$/.test(currentFolder))
    createProject(currentFolder)
  else
    console.log("cannot create project with name", currentFolder)
} else if (!/^([a-zA-Z_][a-zA-Z0-9-_]*[a-zA-Z0-9_])$/.test(projectFolder)) {
  console.log("invalid project name")
} else {
  try {
    execSync(`mkdir ${projectFolder} && cd ${projectFolder}`)
    createProject(projectFolder)
  } catch (e) {
  }
}

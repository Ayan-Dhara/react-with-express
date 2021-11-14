#!/usr/bin/env node

const path = require('path')
const fs = require("fs");

const projectFolder = process.argv[2]

const createProject = (folder, project) => {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log('Choose your project script:')
  console.log('1. Typescript (default)')
  console.log('2. Javascript')
  readline.question('enter choice: ', script => {
    readline.close()
    if (script === '1') {
      require('./createTS')(folder, project)
    } else if (script === '2') {
      require('./createJS')(folder, project)
    } else if (script === '') {
      require('./createTS')(folder, project)
    } else {
      console.log('Invalid choice')
      createProject(folder, project)
    }
  });
}

if (!projectFolder) {
  console.log("Specify a project name...")
} else if (path.resolve(projectFolder) === path.resolve()) {
  const folderFiles = fs.readdirSync(path.resolve())
  if (folderFiles.length > 0)
    for (const folderFile of folderFiles)
      if (folderFile !== ".git")
        return console.log("Please run this command in an empty folder")

  const currentLocation = path.resolve().toString().split('/')
  const currentFolder = currentLocation[currentLocation.length - 1]
  if (/^([a-zA-Z_][a-zA-Z0-9-_]*[a-zA-Z0-9_])$/.test(currentFolder))
    createProject(path.resolve(), currentFolder)
  else
    console.log("cannot create project with name", currentFolder)
} else if (!/^([a-zA-Z_][a-zA-Z0-9-_]*[a-zA-Z0-9_])$/.test(projectFolder)) {
  console.log("invalid project name")
} else {
  const folderFiles = fs.readdirSync(path.resolve())
  if (folderFiles.length > 0)
    for (const folderFile of folderFiles)
      if (folderFile === projectFolder)
        return console.log("Project already exists")
  createProject(path.resolve(projectFolder), projectFolder)
}

#!/usr/bin/env node

const path = require('path')
const fs = require("fs");
const createProject = require("./createProject");

const projectFolder = process.argv[2]

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

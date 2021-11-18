import './env-config.mjs'
import express from "express"
import api from './api/index.mjs'
import * as path from "path";
import * as fs from "fs";
import process from "process";

const SERVER_PORT = process.env.SERVER_PORT || process.env.PORT || 4000

// create express app
const app = express()

// handle api request
app.use("/api", api)

// serve static files
app.use(express.static("build"))

// server react app with route
app.get("*", (req, res) => {
  const indexPath = path.resolve(path.resolve(), "build", "index.html")
  if(fs.existsSync(indexPath)) {
    res.sendFile(indexPath)
  } else {
    res.send("app is not built...")
  }
})

// handle with 404 error if route is not handled
app.use("/", (req, res) => {
  res.status(404).send("not found")
})

// start server
app.listen(SERVER_PORT || 5000, () => {
  console.log("Server started")
})

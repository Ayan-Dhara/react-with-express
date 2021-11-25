import './env-config'
import express from "express"
import process from "process"

import api from './api'
import * as path from "path";

const SERVER_PORT = process.env.SERVER_PORT || process.env.PORT || 4000

// create express app
const app = express()

// handle api request
app.use("/api", api)

// serve static files
app.use(express.static("build"))

// server react app with route
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build/index.html"))
})

// handle with 404 error if route is not handled
app.use("/", (req, res) => {
  res.status(404).send("not found")
})

// start server
app.listen(SERVER_PORT || 5000, () => {
  console.log("Server started")
})

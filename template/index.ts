import Express from "express"
import process from "process"
import dotenv from "dotenv"

import api from './api'
import * as path from "path";

// load env variables
dotenv.config()

// create express app
const app = Express()

// handle api request
app.use("/api", api)

// serve static files
app.use(Express.static("build"))

// server react app with route
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build/index.html"))
})

// handle with 404 error if route is not handled
app.use("/", (req, res) => {
  res.status(404).send("not found")
})

// start server
app.listen(process.env.SERVER_PORT || 5000, () => {
  console.log("Server started")
})

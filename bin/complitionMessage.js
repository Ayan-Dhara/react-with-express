const completionMessage = (projectName) => {
  console.log('Your project files are ready')
  console.log(`Move to '${projectName}' folder`)
  console.log('Run "npm install" to install dependencies')
  console.log('Run "npm run dev" to start application in development mode')
  console.log('Run "npm run build" to build the application')
  console.log('Run "npm start" to start the application in production mode')
  console.log("\nNOTE: build dependencies are included in 'dependencies'.")
  console.log("  you may want to move these to 'devDependencies'")
  console.log("  only 'express' and 'dotenv' are required at production runtime")
}

module.exports = completionMessage

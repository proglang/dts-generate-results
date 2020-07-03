const HTML5ToPDF = require("../lib")
const path = require("path")

const run = async () => {
  const html5ToPDF = new HTML5ToPDF({
    inputPath: path.join(__dirname, "assets", "basic.html"),
    outputPath: path.join(__dirname, "..", "tmp", "output.pdf"),
    templatePath: path.join(__dirname, "templates", "basic"),
    include: [
      path.join(__dirname, "assets", "basic.css"),
      path.join(__dirname, "assets", "custom-margin.css"),
    ],
  })

  await html5ToPDF.start()
  await html5ToPDF.build()
  await html5ToPDF.close()
  console.log("DONE")
  process.exit(0)
}


// Use the function in an existing promise chain
Promise.resolve( 'something' )
.then( result => {
  return doSomething( result )
} )
.then( result => {
  // Because async functions are promises under the hood we can treat the run function as a promise
  return run()
} )
.catch( handleErrors )

// Usage in try/catch block
try {
  run()
} catch (error) {
  console.error(error)
}


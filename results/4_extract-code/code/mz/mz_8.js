const fs = require('mz/fs')


async function doSomething () {
  if (await fs.exists(__filename)) // do something
}

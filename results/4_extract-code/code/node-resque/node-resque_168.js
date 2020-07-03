const NodeResque = require('node-resque')

class MyPlugin extends NodeResque.Plugin {
  beforeEnqueue () {
    // console.log("** beforeEnqueue")
    return true // should the job be enqueued?
  }

  afterEnqueue () {
    // console.log("** afterEnqueue")
  }

  beforePerform () {
    // console.log("** beforePerform")
    return true // should the job be run?
  }

  afterPerform () {
    // console.log("** afterPerform")
  }
}


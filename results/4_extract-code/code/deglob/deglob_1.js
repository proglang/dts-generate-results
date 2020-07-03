var deglob = require('deglob')

deglob(['**/*.js'], function(err, files) {
  files.forEach(function(file) {
    console.log('found file ' + file)
  })
})

// pass in some options to customize!

var path = require('path')
var opts = {
  cwd: path.join(__dirname, 'someDir'),
  useGitIgnore: false,
  usePackageJson: false
}

deglob(['**/*.js'], opts, function(err, files) {
  files.forEach(function(file) {
    console.log('found file ' + file)
  })
})

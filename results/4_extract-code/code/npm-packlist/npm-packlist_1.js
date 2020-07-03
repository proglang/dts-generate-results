const packlist = require('npm-packlist')
const tar = require('tar')
const packageDir = '/path/to/package'
const packageTarball = '/path/to/package.tgz'

packlist({ path: packageDir })
  .then(files => tar.create({
    prefix: 'package/',
    cwd: packageDir,
    file: packageTarball,
    gzip: true
  }, files))
  .then(_ => {
    // tarball has been created, continue with your day
  })

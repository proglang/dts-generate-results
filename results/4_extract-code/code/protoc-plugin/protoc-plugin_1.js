#! /usr/bin/env node
const protocPlugin = require('protoc-plugin')

protocPlugin(protos => {
  // do stuff here with protos
  // return array like [{name: 'filename', content: 'CONTENTS'}]
})

require('something')
const module = require('@root/some-module')
const veryDeepModule = require('@deep/my-module')
const customModule = require('my_private_module') // module from `node_modules_custom` directory

// Or ES6
import 'something'
import module from '@root/some-module'
import veryDeepModule from '@deep/my-module'
import customModule from 'my_private_module' // module from `node_modules_custom` directory

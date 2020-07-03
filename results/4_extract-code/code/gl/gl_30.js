var gl = require('gl')(10, 10)

var ext = gl.getExtension('STACKGL_destroy_context')
ext.destroy()

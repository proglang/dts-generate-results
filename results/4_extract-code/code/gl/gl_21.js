var assert = require('assert')
var gl = require('gl')(10, 10)
assert(gl.drawingBufferHeight === 10 && gl.drawingBufferWidth === 10)

var ext = gl.getExtension('STACKGL_resize_drawingbuffer')
ext.resize(20, 5)
assert(gl.drawingBufferHeight === 20 && gl.drawingBufferWidth === 5)

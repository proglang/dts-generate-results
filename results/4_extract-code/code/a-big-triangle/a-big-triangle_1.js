var shell = require("gl-now")()
var drawTriangle = require("a-big-triangle")
var createShader = require("gl-shader")

var shader

shell.on("gl-init", function() {
  shader = createShader(shell.gl, 
  "precision mediump float;\
  attribute vec2 position;\
  varying vec2 uv;\
  void main() {\
    uv = position.xy;\
    gl_Position = vec4(position.xy, 0.0, 1.0);\
  }",
  "precision mediump float;\
  varying vec2 uv;\
  void main() {\
    gl_FragColor = vec4(uv, 0, 1);\
  }")
})

shell.on("gl-render", function() {
  shader.bind()
  drawTriangle(shell.gl)
})

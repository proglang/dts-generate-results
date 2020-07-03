var testColorSupport = require('color-support')
var colorSupport = testColorSupport(/* options object */)

if (!colorSupport) {
  console.log('color is not supported')
} else if (colorSupport.has16m) {
  console.log('\x1b[38;2;102;194;255m16m colors\x1b[0m')
} else if (colorSupport.has256) {
  console.log('\x1b[38;5;119m256 colors\x1b[0m')
} else if (colorSupport.hasBasic) {
  console.log('\x1b[31mbasic colors\x1b[0m')
} else {
  console.log('this is impossible, but colors are not supported')
}

# linear-gradient

calculates the color representing a number based on the gradient supplied


## Purpose
When using charts and maps to visualize data, it is useful to map values to a color gradient.
This package provides the functions to map values to color gradients.


## Examples
Instantiate object with the graident palette, then use it to calculate the color representing a value

```js
var Gradient = require('linear-gradient');

// instantiate with an RGB palette
var grad1 = new Gradient([
    [0,0,0],
    [0,80,0],
    [0,160,80],
    [80,80,80],
    [160,40,40],
    [255,0,0]
]);

// now we are ready to calculate the colors
// the input value should be normalized to the range between 0 and 1

console.log(grad1.calcArray(0)); // -> [0,0,0] (0 -> first color of the palette)
console.log(grad1.calcArray(1)); // -> [255,0,0] (1 -> last color of the palette)
console.log(grad1.calcArray(0.25)); // -> [0,100,20] (weighted average between [0,80,0] and [0,160,80])
console.log(grad1.calcArray(0.5));
console.log(grad1.calcArray(0.75));

console.log(grad1.calcHex(1));  // -> '#ffffff'
console.log(grad1.calcHex(0.25));   // -> '#006416'

```

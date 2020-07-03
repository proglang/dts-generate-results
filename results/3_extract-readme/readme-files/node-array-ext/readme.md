# node-array-ext
### Extensions for nodejs arrays.

### Installation:
```Shell
npm install node-array-ext
```

### TypeScript Definitions
```Shell
tsd install node-array-ext
```
___
### asyncEach(array, each, cb)
#### Description:
This method iterates through the elements of the array and triggers a callback after all of the elements have been processed.

\- note that this method does not preserve order and allows elements to be processed asynchronously.
#### Params:
* array:
	* Array&lt;T&gt; 
	* The array to process.
* each: 
	* (i: number, element: T, done: (err?: Error) => void) => void 
	* The method that will be called for each element.
* cb: 
	* (err?: Error) => void 
	* The callback that will be triggered when iteration is complete.
	
#### Example:

```Javascript
var extensions = require("node-array-ext");

var a = [ "Hello", "World", "SomethingElse" ];

function finished(err) {
	if(err) {
		console.log(err);
	}
	else {
		console.log("Complete.");
	}
}
function each(i, e, done) {
	setTimeout(function() {
		console.log("%s => %s", i, e);
		done();
	}, 100 * (3 - i));
}

extensions.asyncEach(a, each, finished);

// Output: 
// 3 => SomethingElse
// 2 => World
// 1 => Hello
// Complete.
```
___
### awaitEach(array, each, cb)
#### Description:
This method iterates though the elements of the array in order and triggers a callback after all of the elements have been processed.

\- note that this method preserves the order and forces synchronous processing of the elements.
#### Parameters:
* array:
	* Array&lt;T&gt; 
	* The array to process.
* each: 
	* (i: number, element: T, done: (err?: Error) => void) => void 
	* The method that will be called for each element.
* cb: 
	* (err?: Error) => void 
	* The callback that will be triggered when iteration is complete.
	
#### Example:

```Javascript
var extensions = require("node-array-ext");

var a = [ "Hello", "World", "SomethingElse" ];

function finished(err) {
	if(err) {
		console.log(err);
	}
	else {
		console.log("Complete.");
	}
}
function each(i, e, next) {
	setTimeout(function() {
		console.log("%s => %s", i, e);
		next();
	}, 100 * (3 - i));
}

extensions.awaitEach(a, each, finished);

// Output:
// 1 => Hello
// 2 => World
// 3 => SomethingElse
// Complete.
```
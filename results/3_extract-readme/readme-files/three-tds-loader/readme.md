# THREE TDS Loader

> NodeJS wrapper for Three.js' TDSLoader function

By default, [Three.js](https://www.npmjs.com/package/three) does not have [TDSLoader (3DS Max)](https://threejs.org/examples/#webgl_loader_3ds) built in. This is a NodeJS wrapper for the TDSLoader library so that it can be used with npm in systems using browserify, webpack, etc.

## Install

```
$ npm install --save three-tds-loader
```

## Usage

```js
var THREE = require('three');
var TDSLoader = require('three-tds-loader')(THREE);

console.log(typeof THREE.TDSLoader);
//=> 'function'
```

## Develop

```
$ npm run watch
```

## Test

```
$ npm run test
```

## License

MIT © [CodeTheorist](https://github.com/codetheorist)

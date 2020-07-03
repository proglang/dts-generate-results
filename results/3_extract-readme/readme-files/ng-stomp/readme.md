[![npm](https://img.shields.io/npm/v/ng-stomp.svg?style=flat-square)](https://www.npmjs.com/package/ng-stomp)
[![Travis](https://img.shields.io/travis/beevelop/ng-stomp.svg?style=flat-square)](https://travis-ci.org/beevelop/ng-stomp)
[![Maintainability](https://api.codeclimate.com/v1/badges/cbb91c2e42568f6889b7/maintainability)](https://codeclimate.com/github/beevelop/ng-stomp/maintainability)
[![Gemnasium](https://img.shields.io/gemnasium/beevelop/ng-stomp.svg?style=flat-square)](https://gemnasium.com/beevelop/ng-stomp)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)
[![Beevelop](https://links.beevelop.com/honey-badge)](https://beevelop.com)

# ngStomp

> [STOMP](http://jmesnil.net/stomp-websocket/doc/) promised for [AngularJS](https://angularjs.org)

## Installation

### Install via npm:
```bash
npm install --save ng-stomp
```

#### Add standalone version (dependencies included) to your HTML file
```html
<script src="node_modules/ng-stomp/dist/ng-stomp.standalone.min.js"></script>
```

#### Or add SockJS + STOMP + (minified) Stompie individually:
```html
<script src="node_modules/sockjs/sockjs.min.js"></script>
<script src="node_modules/@stomp/stompjs/lib/stomp.min.js"></script>
<script src="node_modules/ng-stomp/dist/ng-stomp.min.js"></script>
```
----

## Usage
Inject it in your controller:
```js
angular
  // Declare ngStomp as a dependency for you module
  .module('app', ['ngStomp'])

  // use $stomp in your controllers, services, directives,...
  .controller('Ctrl', function ($stomp, $scope, $log) {
    $stomp.setDebug(function (args) {
      $log.debug(args)
    })

    $stomp
      .connect('/endpoint', connectHeaders)

      // frame = CONNECTED headers
      .then(function (frame) {
        var subscription = $stomp.subscribe('/dest', function (payload, headers, res) {
          $scope.payload = payload
        }, {
          'headers': 'are awesome'
        })

        // Unsubscribe
        subscription.unsubscribe()

        // Send message
        $stomp.send('/dest', {
          message: 'body'
        }, {
          priority: 9,
          custom: 42 // Custom Headers
        })

        // Disconnect
        $stomp.disconnect().then(function () {
          $log.info('disconnected')
        })
      })
  })
```

## API-Docs (TBD)
- setDebug(callback)
- connect(endpoint, headers)
- disconnect
- subscribe(destination, callback, headers)
- on(destination, callback, headers)
- unsubscribe(subscription)
- off(subscription)
- send(destination, body, headers)

## Breaking changes
- Bower support has been removed from `v0.5.0` onwards. Please switch to npm / yarn.

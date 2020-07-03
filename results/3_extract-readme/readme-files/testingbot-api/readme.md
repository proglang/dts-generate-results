[![npm version](https://img.shields.io/npm/v/testingbot-api.svg?style=flat-square)](https://www.npmjs.com/package/testingbot-api) 
[![npm downloads](https://img.shields.io/npm/dm/testingbot-api.svg?style=flat-square)](https://www.npmjs.com/package/testingbot-api)
[![Build Status](https://travis-ci.org/testingbot/testingbot-api.svg?branch=master)](https://travis-ci.org/testingbot/testingbot-api)
[![dependencies Status](https://david-dm.org/testingbot/testingbot-api/status.svg)](https://david-dm.org/testingbot/testingbot-api)
[![devDependencies Status](https://david-dm.org/testingbot/testingbot-api/dev-status.svg)](https://david-dm.org/testingbot/testingbot-api?type=dev)

# testingbot-api

Wrapper around the TestingBot REST API for [Node.js](http://nodejs.org/).

## Install

```shell
npm install testingbot-api
```

## Credentials
You can use environment variables `TESTINGBOT_KEY` and `TESTINGBOT_SECRET` to pass your TestingBot key and secret to the API client.
The key and secret can be obtained from [TestingBot](https://testingbot.com/members/user/edit) .

## Using the wrapper

```javascript
var TestingBot = require('testingbot-api');

var tb = new TestingBot({
  api_key: "your-tb-key",
  api_secret: "your-tb-secret"
});
```

### getBrowsers
Gets a list of browsers you can test on

```javascript
api.getBrowsers(function(error, browsers) {});
```


### getUserInfo
Gets your user information

```javascript
api.getUserInfo(function(error, userInfo) {});
```

### getTests
Gets list of your latest tests

```javascript
api.getTests(function(error, tests) {}, offset, limit);
```

### getTestDetails
Gets details for a single test, pass the WebDriver's SessionID

```javascript
api.getTestDetails(sessionId, function(error, testDetails) {});
```

### updateTest
Updates a single test. For example, update the `passed` state of a test (whether it was successful or not).

```javascript
var testData = { "test[success]" : "1", "test[status_message]" : "test" };
api.updateTest(testData, sessionId, function(error, testDetails) {});
```

### deleteTest
Deletes a single test, pass the WebDriver's SessionID

```javascript
api.deleteTest(sessionId, function(error, success) {});
```

### stopTest
Stops a single test, pass the WebDriver's SessionID

```javascript
api.stopTest(sessionId, function(error, success) {});
```

### getTunnelList
Gets list of active tunnels

```javascript
api.getTunnelList(function(error, tunnelList) {});
```

### deleteTunnel
Deletes a single Tunnel

```javascript
api.deleteTunnel(tunnelId, function(error, success) {});
```

### getBuilds
Retrieves the latest builds

```javascript
api.getBuilds(function(error, builds) {}, offset, limit);
```

### getTestsForBuild
Retrieves the tests for a single build

```javascript
api.getTestsForBuild(buildId, function(error, tests) {});
```

### deleteBuild
Deletes a single build

```javascript
api.deleteBuild(buildId, function(error, success) {});
```

### uploadFile
Uploads a local file to TestingBot Storage

```javascript
api.uploadFile(localFilePath, function(error, appUrl) {});
```

### uploadRemoteFile
Uploads a remote file to TestingBot Storage

```javascript
api.uploadFile(remoteFileUrl, function(error, appUrl) {});
```

### getAuthenticationHashForSharing
Calculates the authentication hash for sharing, pass the WebDriver's SessionID.
This is used to [share a test's detail page on TestingBot](https://testingbot.com/support/other/sharing)

```javascript
api.getAuthenticationHashForSharing(sessionId);
```

## Tests

``npm test``

## More documentation

Check out the [TestingBot REST API](https://testingbot.com/support/api) for more information.

## License

The MIT License (MIT)

Copyright (c) TestingBot.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

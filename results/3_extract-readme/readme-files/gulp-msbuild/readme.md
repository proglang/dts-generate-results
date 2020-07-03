# gulp-msbuild
[![NPM](https://img.shields.io/npm/v/gulp-msbuild.svg?style=flat-square)](https://www.npmjs.com/package/gulp-msbuild)
[![NPM downloads](https://img.shields.io/npm/dm/gulp-msbuild.svg?style=flat-square)](https://www.npmjs.com/package/gulp-msbuild)
[![Travis](https://img.shields.io/travis/hoffi/gulp-msbuild/master.svg?style=flat-square)](https://travis-ci.org/hoffi/gulp-msbuild)
[![Coveralls](https://img.shields.io/coveralls/hoffi/gulp-msbuild.svg?style=flat-square)](https://coveralls.io/github/hoffi/gulp-msbuild)
[![David](https://img.shields.io/david/hoffi/gulp-msbuild.svg?style=flat-square)](https://david-dm.org/hoffi/gulp-msbuild)
[![License](https://img.shields.io/npm/l/gulp-msbuild.svg?style=flat-square)](https://github.com/hoffi/gulp-msbuild/blob/master/LICENSE)

> msbuild plugin for [gulp](https://github.com/wearefractal/gulp).
> Inspired by [grunt-msbuild](https://github.com/stevewillcock/grunt-msbuild)

# Not maintained anymore

This project is not maintained anymore. The main reason is that i no longer work with .NET and MSBuild, which makes it hard to still work on this project in my spare time.

Also note that this plugin is not following the [Gulp Guidelines](https://github.com/gulpjs/gulp/blob/v3.9.1/docs/writing-a-plugin/guidelines.md#guidelines) as this is not intended to be used with gulp, which is also the reason why this plugin was [blacklisted](https://github.com/hoffi/gulp-msbuild/issues/72#issuecomment-422089404) in the official gulp plugin directory.

If you would like to develop it further feel free to fork this project, i can link your fork here as well if you like. 

## Usage

First, install `gulp-msbuild` as a development dependency:

```shell
npm install --save-dev gulp-msbuild
```

Then, add it to your `gulpfile.js`:

```javascript
var gulp = require("gulp");
var msbuild = require("gulp-msbuild");

gulp.task("default", function() {
	return gulp.src("./project.sln")
		.pipe(msbuild());
});
```

### Options

> If you miss any options, feel free to open an issue.

__Example__

```javascript
var gulp = require("gulp");
var msbuild = require("gulp-msbuild");

gulp.task("default", function() {
	return gulp.src("./project.sln")
		.pipe(msbuild({
			targets: ['Clean', 'Build'],
			toolsVersion: 3.5
			})
		);
});
```

#### stdout

> Show output of msbuild

**Default:** false

#### stderr

> Show errors of msbuild

**Default:** true

#### errorOnFail

> If the MSBuild job fails with an error, this will cause the gulp-msbuild stream to return an error thus causing the gulp task to fail. This is useful if using an automated build server such as [Jenkins](http://jenkins-ci.org/) where a failing MSBuild should also cause the overall build job to fail.

**Default:** false

#### logCommand

> Logs the msbuild command that will be executed.

**Default:** false

#### targets

> Specify Build Targets

**Default:**
```javascript
['Rebuild']
```

#### configuration

> Specify Build Configuration (Release or Debug)

**Default:** Release

**Hint:** You can also specify the Build Configuration using the *properties* option
```js
properties: { Configuration: 'Debug' }
```

#### solutionPlatform

> Specify the Solution Platform (e.g. x86, x64, AnyCPU)

**Hint:** You can also specify the Solution Platform using the *properties* option
```js
properties: { Platform: 'AnyCPU' }
```

#### toolsVersion

> Specify the .NET Tools-Version

**Default:** 4.0

**Possible Values:** 1.0, 1.1, 2.0, 3.5, 4.0, 12.0, 14.0, 15.0, ```'auto'```

```'auto'``` attempts to find the latest version >= 12.0, with a fallback to 4.0

This parameter can be omitted by explicitely set them to `null` or `undefined`.

#### architecture

> Specify the Architecture

**Default:** Auto-detected

**Possible Values:** x86, x64

**Example:**
```javascript
msbuild({ architecture: 'x86' })
```

#### properties

> Specify Custom Build Properties

**Default:** none

**Example:**
```javascript
msbuild({ properties: { WarningLevel: 2 } })
```

**Hint:** Property values can use ```gulp-util``` templates (e.g. ```"<%= file.path %>"```)

#### verbosity

> Specify the amount of information to display in the build output

**Default:** normal

**Possible Values:** quiet, minimal, normal, detailed, diagnostic

#### maxcpucount

> Specify Maximal CPU-Count to use

**Default:** 0 = Automatic selection

**Possible Values:** -1 (MSBuild Default), 0 (Automatic), > 0 (Concrete value)

#### nodeReuse

> Specify whether to enable or disable the re-use of MSBuild nodes

**Default:** true = Nodes remain after the build finishes so that subsequent builds can use them

**Possible Values:** true (MSBuild Default), false

#### nologo

> Suppress Startup Banner and Copyright Message of MSBuild

**Default:** false -> _Show Startup Banner and Copyright Message_


#### fileLoggerParameters

> Specify the parameters for the MSBuild File Logger.

**Default:** None

**Example:**
```javascript
msbuild({ fileLoggerParameters: 'LogFile=Build.log;Append;Verbosity=diagnostic' })
```

**Hint:** Logger parameters options can use ```gulp-util``` templates (e.g. ```"<%= file.path %>"```)

#### consoleLoggerParameters

> Specify the parameters for the MSBuild Console Logger. (See fileLoggerParameters for a usage example)

**Default:** None

**Hint:** Logger parameters options can use ```gulp-util``` templates (e.g. ```"<%= file.path %>"```)

#### loggerParameters

> Specify the parameters for a custom MSBuild Logger.

**Default:** None

**Example:**
```javascript
msbuild({ loggerParameters: 'XMLLogger,./MyLogger.dll;OutputAsHTML' })
```

**Hint:** Logger parameters options can use ```gulp-util``` templates (e.g. ```"<%= file.path %>"```)

#### customArgs

> Specify custom msbuild arguments, which don't have a own property in
> gulp-msbuild.

**Default:** None

**Example:**
```javascript
msbuild({ customArgs: ['/noautoresponse'] })
```

#### emitEndEvent

> Specify if a gulp end-event should be emitted.

**Default:** false = No end event is emitted.

**Possible Values:** true, false


### MSBuild Command-Line Reference

For a more detailed description of each MSBuild Option see the [MSBuild Command-Line Reference](http://msdn.microsoft.com/en-us/library/ms164311.aspx)

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

# node-spatialite  [![Build Status](https://secure.travis-ci.org/zhm/node-spatialite.png)](http://travis-ci.org/zhm/node-spatialite)

Statically linked cross-platform SpatiaLite 4.0 binding for node.js. The goal of this project is to have a completely standalone build of SpatiaLite that doesn't require any system dependencies (no need to `apt-get install ...` other than the ones required to build native node.js modules. The result is a consistent build across platforms with a guarantee of functionality and the versions of the dependencies. There are number of ways to get SpatiaLite binaries on the various platforms, but none of them include all of the features in a consistent way. This project contains a complete gyp build system for SpatiaLite - so someone might find it useful for other things outside of nodejs also.

If you're familiar with SQL, this is a great way to get easy access to the power of GEOS, Proj4, and SQL without needing a full PostGIS server.

# Installation

    $ npm install spatialite

# Usage
This module simply exposes [node-sqlite3](https://github.com/developmentseed/node-sqlite3) with an additional method on the `Database` object to enable SpatiaLite. I opted to re-use this awesome library and dynamically load the extension so you can still use the `node-sqlite3` API without SpatiaLite if you like.

Here is a simple example that shows the usage of GEOS-enabled `Centroid`.

```js
var sqlite = require('spatialite');
var db = new sqlite.Database(':memory:');

var query = "SELECT AsGeoJSON(Centroid(GeomFromText('POLYGON ((30 10, 10 20, 20 40, 40 40, 30 10))'))) AS geojson;";

db.spatialite(function(err) {
  db.each(query, function(err, row) {
    console.log(row.geojson);
  });
});

```

# Tested on
- OS X 64bit
- Linux 64bit (Ubuntu)
- Linux 32bit (Ubuntu)
- Windows 64bit
- Windows 32bit (pending some testing)

# Included in this build
- SpatiaLite 4.0.0 - [SQL Reference](http://www.gaia-gis.it/gaia-sins/spatialite-sql-4.0.0.html)
- GEOS-3.4.0-dev - Compiled with `GEOS_TRUNK` flag so all of the latest functions are available:
  - `DelaunayTriangulation`
  - `VoronojDiagram`
  - `ConcaveHull`
- liblwgeom 2.0.2 - from PostGIS 2.0.2
  - `MakeValid`
  - `MakeValidDiscarded`
  - `Segmentize`
  - `Split`
  - `SplitLeft`
  - `SplitRight`
  - `Azimuth`
  - `SnapToGrid`
  - `GeoHash`
  - `AsX3D`
  - `MaxDistance`
  - `3DDistance`
  - `3DMaxDistance`
- Proj 4.8.0
- iconv 1.14
- FreeXL 1.0.0e

# Building

There's a lot of code in these dependencies and the build scripts are fairly complex. If it doesn't work, submit an issue!

To build the shared library, you will need to first install `node-gyp`.

    $ npm install -g node-gyp

Build it:

    $ node-gyp configure build

# Building on Windows

Compiling on Windows is a bit more involved. You will need to install these *in this order*. This should give you a working environment to compile native node.js bindings. The [node-gyp](https://github.com/TooTallNate/node-gyp) repo also has some documentation on getting things working with Windows. It's possible it will also work with VS2012, but it's untested. I use [veewee](https://github.com/jedi4ever/veewee) for testing with clean versions of Windows and this process does work. If you have problems, it's most likely something else that's installed conflicting with the build environment. This information was taken from [here](http://blogs.msdn.com/b/heaths/archive/2011/04/01/visual-c-2010-sp1-compiler-update-for-the-windows-sdk-7-1.aspx).
- Visual C++ 2010 Express [Download](http://go.microsoft.com/fwlink/?LinkId=244366)
- Windows SDK 7.1 [Download](http://www.microsoft.com/en-us/download/details.aspx?id=8279)
- Visual Studio 2010 SP1 [Download](http://www.microsoft.com/en-us/download/details.aspx?id=23691)
- Visual C++ 2010 SP1 Compiler Update for the Windows SDK 7.1 [Download](http://www.microsoft.com/en-us/download/details.aspx?id=4422)

# Notes

A lot of this was inspired by @TooTallNate's post on embedding dependencies in node modules.

http://n8.io/converting-a-c-library-to-gyp

# License

This module is BSD licensed. The dependencies have their own licenses which are available in their directories.

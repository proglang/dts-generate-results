// configuring paths for Require.js
// (you can use CommonJS (Component, Node.js) or simple script tags as well)
require.config({
  paths: {
    jdataview: '//jdataview.github.io/dist/jdataview',
    jbinary: '//jdataview.github.io/dist/jbinary',
    TAR: '//jdataview.github.io/jBinary.Repo/typeSets/tar' // TAR archive typeset
  }
});

require(['jbinary', 'TAR'], function (jBinary, TAR) {
  // loading TAR archive with given typeset
  jBinary.load('sample.tar', TAR).then(function (jb/* : jBinary */) {
    // read everything using type aliased in TAR['jBinary.all']
    var files = jb.readAll();

    // do something with files in TAR archive (like rename them to upper case)
    files.forEach(function (file) {
      file.name = file.name.toUpperCase();
    });

    jb.writeAll(files, 0); // writing entire content from files array
    jb.saveAs('sample.new.tar'); // saving file under given name
  });
});

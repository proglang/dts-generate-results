var showdown    = require('showdown'),
    myExtension = require('myExtension'),
    converter = new showdown.Converter({ extensions: ['myExtension'] });

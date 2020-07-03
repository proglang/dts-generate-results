var bunyan = require('bunyan')
  , bformat = require('../')
  , formatOut = bformat({ outputMode: 'bunyan', levelInString: true })
  ;

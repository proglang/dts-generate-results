    var helpers = require('dom-helpers')
    var query = require('dom-helpers/query')
    var offset = require('dom-helpers/query/offset')

    // style is a function
    require('dom-helpers/style')(node, { width: '40px' })

    //and a namespace
    var gcs = require('dom-helpers/style/getComputedStyle')

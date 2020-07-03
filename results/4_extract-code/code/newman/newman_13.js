newman.run({
    collection: require('./sample-collection.json'),
    iterationData: [{ "var": "data", "var_beta": "other_val" }],
    globals: {
        "id": "5bfde907-2a1e-8c5a-2246-4aff74b74236",
        "name": "test-env",
        "values": [
            {
                "key": "alpha",
                "value": "beta",
                "type": "text",
                "enabled": true
            }
        ],
        "timestamp": 1404119927461,
        "_postman_variable_scope": "globals",
        "_postman_exported_at": "2016-10-17T14:31:26.200Z",
        "_postman_exported_using": "Postman/4.8.0"
    },
    environment: {
        "id": "4454509f-00c3-fd32-d56c-ac1537f31415",
        "name": "test-env",
        "values": [
            {
                "key": "foo",
                "value": "bar",
                "type": "text",
                "enabled": true
            }
        ],
        "timestamp": 1404119927461,
        "_postman_variable_scope": "environment",
        "_postman_exported_at": "2016-10-17T14:26:34.940Z",
        "_postman_exported_using": "Postman/4.8.0"
    }
}).on('start', function (err, args) { // on start of run, log to console
    console.log('running a collection...');
}).on('done', function (err, summary) {
    if (err || summary.error) {
        console.error('collection run encountered an error.');
    }
    else {
        console.log('collection run completed.');
    }
});

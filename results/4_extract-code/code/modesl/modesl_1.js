var esl = require('modesl'),
conn = new esl.Connection('127.0.0.1', 8021, 'ClueCon', function() {
    conn.api('status', function(res) {
        //res is an esl.Event instance
        console.log(res.getBody());
    });
});

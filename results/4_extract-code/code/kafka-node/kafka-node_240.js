var kafka = require('kafka-node'),
    client = new kafka.KafkaClient(),
    offset = new kafka.Offset(client);
    offset.fetchCommitsV1('groupId', [
        { topic: 't', partition: 0 }
    ], function (err, data) {
    });

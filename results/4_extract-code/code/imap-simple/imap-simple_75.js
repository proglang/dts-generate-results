var imaps = require('imap-simple');
const simpleParser = require('mailparser').simpleParser;
const _ = require('lodash');

var config = {
    imap: {
        user: 'your@email.address',
        password: 'yourpassword',
        host: 'imap.gmail.com',
        port: 993,
        tls: true,
        authTimeout: 3000
    }
};

imaps.connect(config).then(function (connection) {
    return connection.openBox('INBOX').then(function () {
        var searchCriteria = ['1:5'];
        var fetchOptions = {
            bodies: ['HEADER', 'TEXT', ''],
        };
        return connection.search(searchCriteria, fetchOptions).then(function (messages) {
            messages.forEach(function (item) {
                var all = _.find(item.parts, { "which": "" })
                var id = item.attributes.uid;
                var idHeader = "Imap-Id: "+id+"\r\n";
                simpleParser(idHeader+all.body, (err, mail) => {
                    // access to the whole mail object
                    console.log(mail.subject)
                    console.log(mail.html)
                });
            });
        });
    });
});

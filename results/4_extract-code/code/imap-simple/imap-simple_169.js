var imaps = require('imap-simple');

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
  const message = `Content-Type: text/plain
To: jhannes@gmail.com
Subject: Hello world

Hi
This is a test message
`;
  connection.append(message.toString(), {mailbox: 'Drafts', flags: '\\Draft'});
});

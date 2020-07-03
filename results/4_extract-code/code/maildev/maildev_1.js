const MailDev = require('maildev')

const maildev = new MailDev()

maildev.listen()

maildev.on('new', function (email) {
  // We got a new email!
})

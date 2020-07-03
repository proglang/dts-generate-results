var dav = require('dav');

var xhr = new dav.transport.Basic(
  new dav.Credentials({
    username: 'xxx',
    password: 'xxx'
  })
);

dav.createAccount({ server: 'http://dav.example.com', xhr: xhr })
.then(function(account) {
  // account instanceof dav.Account
  account.calendars.forEach(function(calendar) {
    console.log('Found calendar named ' + calendar.displayName);
    // etc.
  });
});

// Or, using the dav.Client interface:

var client = new dav.Client(xhr);
// No transport arg
client.createAccount({
  server: 'http://dav.example.com',
  accountType: 'carddav'
})
.then(function(account) {
  account.addressBooks.forEach(function(addressBook) {
    console.log('Found address book name ' + addressBook.displayName);
    // etc.
  });
});

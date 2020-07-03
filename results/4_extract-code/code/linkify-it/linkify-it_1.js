var linkify = require('linkify-it')();

// Reload full tlds list & add unofficial `.onion` domain.
linkify
  .tlds(require('tlds'))          // Reload with full tlds list
  .tlds('onion', true)            // Add unofficial `.onion` domain
  .add('git:', 'http:')           // Add `git:` protocol as "alias"
  .add('ftp:', null)              // Disable `ftp:` protocol
  .set({ fuzzyIP: true });        // Enable IPs in fuzzy links (without schema)

console.log(linkify.test('Site github.com!'));  // true

console.log(linkify.match('Site github.com!')); // [ {
                                                //   schema: "",
                                                //   index: 5,
                                                //   lastIndex: 15,
                                                //   raw: "github.com",
                                                //   text: "github.com",
                                                //   url: "http://github.com",
                                                // } ]

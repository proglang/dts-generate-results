var PlayMusic = require('playmusic');
var pm = new PlayMusic();
pm.login({email: "email@address.com", password: "password", androidId: "16 DIGIT HEX"}, function(err) {
    if(err) console.error(err);
    // place code here
})

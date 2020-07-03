var PlayMusic = require('playmusic');
var pm = new PlayMusic();
pm.init({email: "email@address.com", password: "password"}, function(err) {
    if(err) console.error(err);
    // place code here
})

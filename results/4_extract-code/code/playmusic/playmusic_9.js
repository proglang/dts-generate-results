var PlayMusic = require('playmusic');
var pm = new PlayMusic();
pm.init({androidId: "16 DIGIT HEX", masterToken: "oauth2rt_1/..."}, function(err) {
    if(err) console.error(err);
    // place code here
})

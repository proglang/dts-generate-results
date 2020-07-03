var looksSame = require('looks-same');

looksSame('image1.png', 'image2.png', function(error, {equal}) {
    // equal will be true, if images looks the same
});

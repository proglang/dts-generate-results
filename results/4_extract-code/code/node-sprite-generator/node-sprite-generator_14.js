var nsg = require('node-sprite-generator'),
    express = require('express'),
    app = express();

app.use(nsg.middleware({
    src: [
        'images/sprite/*.png'
    ],
    spritePath: 'images/sprite.png',
    stylesheetPath: 'stylus/sprite.styl'
}));

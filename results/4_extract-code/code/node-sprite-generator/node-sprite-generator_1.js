var nsg = require('node-sprite-generator');

nsg({
    src: [
        'images/sprite/*.png'
    ],
    spritePath: 'images/sprite.png',
    stylesheetPath: 'stylus/sprite.styl'
}, function (err) {
    console.log('Sprite generated!');
});

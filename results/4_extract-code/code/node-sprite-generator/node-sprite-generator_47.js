var nsg = require('node-sprite-generator');

nsg({
    src: [
        'public/images/sprite/*.png'
    ],
    spritePath: 'public/images/all-icons.png',
    stylesheetPath: 'public/stylesheets/all-icons.css',
    layout: 'diagonal',
    layoutOptions: {
        padding: 30
    },
    stylesheet: 'app/assets/sprites/template.tpl',
    stylesheetOptions: {
        prefix: 'all-icons',
        spritePath: 'http://static.your-server.org/images/all-icons.png',
        pixelRatio: 2
    }
});

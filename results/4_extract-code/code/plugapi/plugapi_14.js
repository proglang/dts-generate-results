const PlugAPI = require('plugapi');

new PlugAPI({
    email: '',
    password: ''
}, (err, bot) => {
    if (!err) {
        bot.connect('roomslug'); // The part after https://plug.dj

        bot.on(PlugAPI.events.ROOM_JOIN, (room) => {
            console.log(`Joined ${room}`);
        });
    } else {
        console.log(`Error initializing plugAPI: ${err}`);
    }
});

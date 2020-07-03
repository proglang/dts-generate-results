const PlugAPI = require('plugapi');
const bot = new PlugAPI({
    email: '',
    password: ''
});

bot.connect('roomslug'); // The part after https://plug.dj

bot.on(PlugAPI.events.ROOM_JOIN, (room) => {
    console.log(`Joined ${room}`);
});

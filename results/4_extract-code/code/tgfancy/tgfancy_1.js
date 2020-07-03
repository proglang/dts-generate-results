const Tgfancy = require("tgfancy");
const bot = new Tgfancy(token, {
    // all options to 'tgfancy' MUST be placed under the
    // 'tgfancy' key, as shown below
    tgfancy: {
        option: "value",
    },
});

bot.sendMessage(chatId, "text message");

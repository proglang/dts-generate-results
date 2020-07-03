var Document = require('camo').Document;
var EmbeddedDocument = require('camo').EmbeddedDocument;

class Money extends EmbeddedDocument {
    constructor() {
        super();

        this.value = {
            type: Number,
            choices: [1, 5, 10, 20, 50, 100]
        };

        this.currency = {
            type: String,
            default: 'usd'
        }
    }
}

class Wallet extends Document {
    constructor() {
        super();
        this.contents = [Money];
    }
}

var wallet = Wallet.create();
wallet.contents.push(Money.create());
wallet.contents[0].value = 5;
wallet.contents.push(Money.create());
wallet.contents[1].value = 100;

wallet.save().then(function() {
    console.log('Both Wallet and Money objects were saved!');
});

var Document = require('camo').Document;

class Company extends Document {
    constructor() {
        super();

        this.name = String;
        this.valuation = {
            type: Number,
            default: 10000000000,
            min: 0
        };
        this.employees = [String];
        this.dateFounded = {
            type: Date,
            default: Date.now
        };
    }

    static collectionName() {
        return 'companies';
    }
}

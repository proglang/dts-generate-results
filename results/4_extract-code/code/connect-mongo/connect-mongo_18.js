const mongoose = require('mongoose');

// Basic usage
mongoose.connect(connectionOptions);

app.use(session({
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

// Advanced usage
const connection = mongoose.createConnection(connectionOptions);

app.use(session({
    store: new MongoStore({ mongooseConnection: connection })
}));

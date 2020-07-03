const flash = require('express-flash-notification');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();

// setup views directory, view engine, etc...

app.use(cookieParser());
app.use(session({...}}));
app.use(flash(app));

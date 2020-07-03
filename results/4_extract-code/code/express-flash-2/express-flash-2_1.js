var flash = require('express-flash-2');
var app = express();

  app.use(cookieParser('keyboard cat'));
  app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized:true}));
 // use  the flash middleware 
  app.use(flash());

// ES2015 modules
import {Facebook, FacebookApiException} from 'fb';
const fb = new Facebook(options);

// ES2015 w/ require()
const {Facebook, FacebookApiException} = require('fb'),
const fb = new Facebook(options);

// ES5
var Facebook = require('fb').Facebook,
    fb = new Facebook(options);

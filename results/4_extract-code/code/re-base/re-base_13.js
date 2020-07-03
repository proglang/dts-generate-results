var Rebase = require('re-base');
var firebase = require('firebase/app');
var database = require('firebase/database');
var app = firebase.initializeApp({
  apiKey: 'apiKey',
  authDomain: 'projectId.firebaseapp.com',
  databaseURL: 'https://databaseName.firebaseio.com',
  storageBucket: 'bucket.appspot.com',
  messagingSenderId: 'xxxxxxxxxxxxxx'
});
var db = firebase.database(app);
var base = Rebase.createClass(db);

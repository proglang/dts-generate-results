var express = require('express')
  , partials = require('express-partials')
  , app = express();

// load the express-partials middleware
app.use(partials());

app.get('/',function(req,res,next){
  res.render('index.ejs') 
  // -> render layout.ejs with index.ejs as `body`.
})

app.get('/no-layout',function(req,res,next){
  res.render('index.ejs',{layout:false})
  // -> only renders index.ejs
})

app.get('/mobile',function(req,res,next){
  res.render('index.ejs',{layout:'mobile'})
  // -> render mobile.ejs with index.ejs as `body`.
})

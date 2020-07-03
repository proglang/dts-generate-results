var i18next = require("i18next");
var middleware = require("i18next-express-middleware");
var express = require("express");

i18next.use(middleware.LanguageDetector).init({
  preload: ["en", "de", "it"],
  ...otherOptions
});

var app = express();
app.use(
  middleware.handle(i18next, {
    ignoreRoutes: ["/foo"], // or function(req, res, options, i18next) { /* return true to ignore */ }
    removeLngFromUrl: false
  })
);

// in your request handler
app.get("myRoute", function(req, res) {
  var lng = req.language; // 'de-CH'
  var lngs = req.languages; // ['de-CH', 'de', 'en']
  req.i18n.changeLanguage("en"); // will not load that!!! assert it was preloaded

  var exists = req.i18n.exists("myKey");
  var translation = req.t("myKey");
});

// in your views, eg. in pug (ex. jade)
div = t("myKey");

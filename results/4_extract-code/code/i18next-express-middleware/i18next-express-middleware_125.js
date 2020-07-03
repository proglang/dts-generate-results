var i18next = require("i18next");
var middleware = require("i18next-express-middleware");

i18next.use(middleware.LanguageDetector).init({
  detection: options
});

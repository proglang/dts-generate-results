var i18next = require("i18next");
var middleware = require("i18next-express-middleware");

var lngDetector = new middleware.LanguageDetector();
lngDetector.addDetector(myDetector);

i18next.use(lngDetector).init({
  detection: options
});

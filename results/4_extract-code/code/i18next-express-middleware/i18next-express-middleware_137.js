var middleware = require("i18next-express-middleware");

var lngDetector = new middleware.LanguageDetector();
lngDetector.init(options);

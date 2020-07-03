var express = require("express"),
  app = express(),
  i18next = require("i18next"),
  FilesystemBackend = require("i18next-node-fs-backend"),
  i18nextMiddleware = require("i18next-express-middleware"),
  port = 3000;

i18next
  .use(i18nextMiddleware.LanguageDetector)
  .use(FilesystemBackend)
  .init({ preload: ["en", "de", "it"], ...otherOptions }, function() {
    i18nextMiddleware.addRoute(
      i18next,
      "/:lng/key-to-translate",
      ["en", "de", "it"],
      app,
      "get",
      function(req, res) {
        //endpoint function
      }
    );
  });
app.use(i18nextMiddleware.handle(i18next));
app.listen(port, function() {
  console.log("Server listening on port", port);
});

var i18next = require("i18next");
var Backend = require("i18next-node-fs-backend");

i18next.use(Backend).init(i18nextOptions);

var whiteListObject = require("whitelist-object");

var myObject = {
	cool: "guy",
    conor: "hastings",
    wow: "so cool",
    but: {is: "he", no: "he isn't"}
};
var whiteListedObject = whiteListObject(myObject, ["cool", "but", "is"], false);
//returns {cool: "guy", but: {is: "he"}};
var shallowWhiteListObject = whiteListObject(myObject, ["cool", "but", "is"], true);
//returns {cool: "guy", but: {is: "he", no: "he isn't"}};

const MIMEType = require("whatwg-mimetype");

const mimeType = new MIMEType(`Text/HTML;Charset="utf-8"`);

console.assert(mimeType.toString() === "text/html;charset=utf-8");

console.assert(mimeType.type === "text");
console.assert(mimeType.subtype === "html");
console.assert(mimeType.essence === "text/html");
console.assert(mimeType.parameters.get("charset") === "utf-8");

mimeType.parameters.set("charset", "windows-1252");
console.assert(mimeType.parameters.get("charset") === "windows-1252");
console.assert(mimeType.toString() === "text/html;charset=windows-1252");

console.assert(mimeType.isHTML() === true);
console.assert(mimeType.isXML() === false);

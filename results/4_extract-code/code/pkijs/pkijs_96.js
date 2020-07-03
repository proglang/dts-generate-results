    //require("babel-polyfill"); // Would be required only if you compiled PKI.js for Node <= v4
    const asn1js = require("asn1js");
    const pkijs = require("pkijs");
    const Certificate = pkijs.Certificate;

    const buffer = new Uint8Array([
        // ... cert hex bytes ...
    ]).buffer;

    const asn1 = asn1js.fromBER(buffer);
    const certificate = new Certificate({ schema: asn1.result });

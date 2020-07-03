var FirebaseTokenGenerator = require("firebase-token-generator");
var tokenGenerator = new FirebaseTokenGenerator("<YOUR_FIREBASE_SECRET>");
var token = tokenGenerator.createToken(
  { uid: "1", some: "arbitrary", data: "here" },
  { admin: true }
);

var FNV = require('fnv-lite');

console.log(FNV.hex('')); // 6c62272e07bb014262b821756295c58d
console.log(FNV.base64('')); // bGInLge7AUJiuCF1YpXFjQ==
console.log(FNV.base64Url('')); // bGInLge7AUJiuCF1YpXFjQ
console.log(FNV.base36('')); // 6ezv16m7wweombnkd3ldlii6l

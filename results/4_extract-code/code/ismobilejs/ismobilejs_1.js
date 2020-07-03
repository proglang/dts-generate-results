const isMobile = require('ismobilejs');
const userAgent = req.headers['user-agent'];
console.log(isMobile(userAgent).any);

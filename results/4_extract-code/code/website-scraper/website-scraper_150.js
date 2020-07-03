// Generate random filename 
const crypto = require('crypto');
registerAction('generateFilename', ({resource}) => {
  return {filename: crypto.randomBytes(20).toString('hex')};
});

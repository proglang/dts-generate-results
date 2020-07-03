const icongen = require('icon-gen');

icongen('./images', './icons', , { report: true })
.then((results) => {
  console.log(results);
} )
.catch((err) => {
  console.error(err);
});

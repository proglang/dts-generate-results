const icongen = require('icon-gen');

icongen('./sample.svg', './icons', { report: true })
.then((results) => {
  console.log(results)
})
.catch((err) => {
  console.error(err)
});

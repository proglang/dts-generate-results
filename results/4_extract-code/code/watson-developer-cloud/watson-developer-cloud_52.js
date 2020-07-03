const fs = require('fs');
const CompareComplyV1 = require('ibm-watson/compare-comply/v1');

const compareComply = new CompareComplyV1({
  iam_apikey: '<apikey>',
  url: 'https://gateway.watsonplatform.net/compare-comply/api',
  version: '2018-12-06'
});

compareComply.compareDocuments(
  {
      file_1: fs.createReadStream('<path-to-file-1>'),
      file_1_filename: '<filename-1>',
      file_1_label: 'file-1',
      file_2: fs.createReadStream('<path-to-file-2>'),
      file_2_filename: '<filename-2>',
      file_2_label: 'file-2',
  })
  .then(result => {
    console.log(JSON.stringify(result, null, 2));
  })
  .catch(err => {
    console.log(err);
  });

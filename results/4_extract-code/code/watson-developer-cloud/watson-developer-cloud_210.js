var VisualRecognitionV3 = require('ibm-watson/visual-recognition/v3');
var fs = require('fs');

var visualRecognition = new VisualRecognitionV3({
  url: '<service_url>',
  version: '2018-03-19',
  iam_apikey: '<apikey>',
});

var params = {
  images_file: fs.createReadStream('./resources/car.png')
};

visualRecognition.classify(params)
  .then(result => {
    console.log(JSON.stringify(result, null, 2));
  })
  .catch(err => {
    console.log(err);
  });

const ChartMogul = require('chartmogul-node');

const config = new ChartMogul.Config('accountToken', 'secretKey');

ChartMogul.Customer.create(config, data, (err, res) => {
  if(err){
    console.error(err.message, err.httpStatus, err.response)
  }
  console.log(res);
});

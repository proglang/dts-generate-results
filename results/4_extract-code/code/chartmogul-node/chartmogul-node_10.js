const ChartMogul = require('chartmogul-node');

const config = new ChartMogul.Config('accountToken', 'secretKey');

ChartMogul.Customer.create(config, {
  data_source_uuid: 'ds_e243129a-12c0-4e29-8f54-07da7905fbd1',
  external_id: 'cus_0001',
  name: 'Adam Smith',
  email: 'adam@smith.com',
  country: 'US',
  city: 'New York'
})
.then(res => {
  console.log(res);
})
.catch(e => console.error(e.message, e.httpStatus, e.response));


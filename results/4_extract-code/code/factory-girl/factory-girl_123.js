const FactoryGirl = require('factory-girl');
const factory = FactoryGirl.factory;
const adapter = new FactoryGirl.MongooseAdapter();

// use the mongoose adapter as the default adapter
factory.setAdapter(adapter);

// Or use it only for one model-factory
factory.setAdapter(adapter, 'factory-name');

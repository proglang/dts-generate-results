{Presenter} = require('yayson')(adapter: {
  id: function(model){ return 'omg' + model.id},
  get: function(model, key){ return model[key] }
})


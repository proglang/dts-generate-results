  const Presenter = require('yayson')({
    adapter: 'default'
  }).Presenter;

  class ItemsPresenter extends Presenter {};
  ItemsPresenter.prototype.type = 'items';

  var item = {
    id: 5,
    name: 'First'
  };

  ItemsPresenter.render(item);

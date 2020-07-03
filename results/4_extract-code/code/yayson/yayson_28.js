
var Presenter = require('yayson')().Presenter;

class ItemsPresenter extends Presenter {};
ItemsPresenter.prototype.type = 'items'

ItemsPresenter.prototype.attributes = function() {
  var attrs = Presenter.prototype.attributes.apply(this, arguments);

  attrs.start = moment.utc(attrs.start).toDate();
  return attrs;
}

ItemsPresenter.prototype.relationships = function() {
  return {
    event: EventsPresenter
  }
}

ItemsPresenter.render(item)

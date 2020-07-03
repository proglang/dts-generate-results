... mock knex ...

var tracker = require('mock-knex').getTracker();

tracker.install();

tracker.on('query', function sendResult(query) {
  query.response([
    {
      id : 1,
      foo : 'bar'
    }
  ]);
});

Model.forge({ id : 1 }).fetch()
  .then(function fetchResult(model) {
    expect(model).to.be.an.instanceof(Model);
    expect(model.get('id')).to.equal(1);
    expect(model.get('foo')).to.equal('bar');
    tracker.uninstall();
    done();
  });

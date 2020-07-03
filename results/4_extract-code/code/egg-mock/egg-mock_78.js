const mm = require('egg-mock');
describe('test/app.js', () => {
  let app, config;
  before(() => {
    app = mm.cluster();
    return app.ready();
  });
  after(() => app.close());

  it('some test', () => {
    return app.httpRequest()
      .get('/config')
      .expect(200)
  });
});

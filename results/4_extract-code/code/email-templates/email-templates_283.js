const ejs = require('ejs');

const email = new Email({
  // ...
  render: (view, locals) => {
    return new Promise((resolve, reject) => {
      // this example assumes that `template` returned
      // is an ejs-based template string
      // view = `${template}/html` or `${template}/subject` or `${template}/text`
      db.templates.findOne({ name: view }, (err, template) => {
        if (err) return reject(err);
        if (!template) return reject(new Error('Template not found'));
        let html = ejs.render(template, locals);
        html = await email.juiceResources(html);
        resolve(html);
      });
    });
  }
});

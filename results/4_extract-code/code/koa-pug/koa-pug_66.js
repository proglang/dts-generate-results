const Jade = require('koa-jade')
const jade = new Jade()
// `new Jade({ app })` equals to
jade.use(app)

app.use(function* () {
  this.render('h1 Hello, #{name}', { name: 'Jade' }, { fromString: true })
})

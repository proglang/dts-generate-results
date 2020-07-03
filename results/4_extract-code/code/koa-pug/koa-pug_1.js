const koa = require('koa')
const app = koa()

const Jade = require('koa-jade')
const jade = new Jade({
  viewPath: './views',
  debug: false,
  pretty: false,
  compileDebug: false,
  locals: global_locals_for_all_pages,
  basedir: 'path/for/jade/extends',
  helperPath: [
    'path/to/jade/helpers',
    { random: 'path/to/lib/random.js' },
    { _: require('lodash') }
  ],
  app: app // equals to jade.use(app) and app.use(jade.middleware)
})

jade.locals.someKey = 'some value'

app.use(function* () {
  this.render('index', locals_for_this_page, true)
})

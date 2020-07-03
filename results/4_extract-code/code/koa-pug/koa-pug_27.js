const koa = require('koa')
const vhost = require('koa-vhost')
const Jade = require('koa-jade')
const _ = require('lodash')

const server = koa()
const server1 = koa()
const server2 = koa()

const jadeConfig = {
  locals: {
    title: 'Koa Demo'
  }
}

var jade1 = new Jade(_.assign({}, jadeConfig, {
  viewPath: './views1/'
}))

var jade2 = new Jade(_.assign({}, jadeConfig, {
  viewPath: './views2/'
}))

jade1.use(server1)

server1.use(function* (next) {
  this.render('index')
})

jade2.use(server2)

server2.use(function* (next) {
  this.render('index')
})

server.use(vhost('test1.app.dev', server1))
server.use(vhost('test2.app.dev', server2))

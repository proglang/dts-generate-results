'use strict';
const koa = require('koa');
const error = require('koa-json-error')

let app = new Koa();
app.use(error())

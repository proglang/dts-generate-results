'use strict';
const _ = require('lodash');
const koa = require('koa');
const error = require('koa-json-error')

let options = {
    // Avoid showing the stacktrace in 'production' env
    postFormat: (e, obj) => process.env.NODE_ENV === 'production' ? _.omit(obj, 'stack') : obj
};
let app = new Koa();
app.use(error(options));

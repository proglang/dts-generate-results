'use strict';
const koa = require('koa');
const error = require('koa-json-error')

function formatError(err) {
    return {
        // Copy some attributes from
        // the original error
        status: err.status,
        message: err.message,

        // ...or add some custom ones
        success: false,
        reason: 'Unexpected'
    }
}

let app = new Koa();
app.use(error(formatError));

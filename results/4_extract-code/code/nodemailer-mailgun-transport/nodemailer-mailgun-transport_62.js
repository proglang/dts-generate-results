const nodemailer = require('nodemailer');
const mg = require('nodemailer-mailgun-transport');

const options = {
  auth: {
    api_key: 'key-1234123412341234',
    domain: 'one of your domain names listed at your https://mailgun.com/app/domains'
  },
  host: 'api.eu.mailgun.net' // e.g. for EU region
}

const nodemailerMailgun = nodemailer.createTransport(mg(auth));

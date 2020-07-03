// With ES5
var JiraApi = require('jira-client');

// With ES6
import JiraApi from 'jira-client';

// Initialize
var jira = new JiraApi({
  protocol: 'https',
  host: 'jira.somehost.com',
  username: 'username',
  password: 'password',
  apiVersion: '2',
  strictSSL: true
});

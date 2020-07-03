const issueParser = require('issue-parser');
const parse = issueParser('github');

parse('Issue description, ref user/package#1, Fix #2, Duplicate of #3 /cc @user');
/*
{
  refs: [{raw: 'user/package#1', slug: 'user/package', prefix: '#', issue: '1'}],
  actions: {
    close: [{raw: 'Fix #2', action: 'Fix', prefix: '#', issue: '2'}],
    duplicate: [{raw: 'Duplicate of #3', action: 'Duplicate of', prefix: '#', issue: '3'}],
  },
  mentions: [{raw: '@user', prefix: '@', user: 'user'}],
}
*/

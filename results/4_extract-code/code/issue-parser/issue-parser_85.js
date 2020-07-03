const issueParser = require('issue-parser');
const parse = issueParser('github', {actions: {parent: ['parent of'], related: ['related to']}});

parse('Issue description, ref user/package#1, Fix #2, Parent of #3, related to #4 /cc @user');
/*
{
  refs: [{raw: 'user/package#1', slug: 'user/package', prefix: '#', issue: '1'}],
  actions: {
    close: [{raw: 'Fix #2', action: 'Fix', prefix: '#', issue: '2'}],
    parent: [{raw: 'Parent of #3', action: 'Parent of', prefix: '#', issue: '3'}],
    related: [{raw: 'related to #4', action: 'Related to', prefix: '#', issue: '4'}],
  },
  mentions: [{raw: '@user', prefix: '@', user: 'user'}],
}
*/

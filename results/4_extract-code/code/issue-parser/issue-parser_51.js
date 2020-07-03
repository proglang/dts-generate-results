const issueParser = require('issue-parser');
const parse = issueParser('waffle');

parse('Issue description, ref user/package#1, Fix #2, blocks user/package#3, Require #4, Parent of #5, Child of #6 /cc @user');
/*
{
  refs: [{raw: 'user/package#1', slug: 'user/package', prefix: '#', issue: '1'}],
  actions: {
    close: [{raw: 'Fix #2', action: 'Fix', prefix: '#', issue: '2'}],
    block: [{raw: 'blocks user/package#3', action: 'Blocks', slug: 'user/package', prefix: '#', issue: '3'}],
    require: [{raw: 'Require #4', action: 'Require', prefix: '#', issue: '4'}],
    parentOf: [{raw: 'Parent of #5', action: 'Parent of', prefix: '#', issue: '5'}],
    childOf: [{raw: 'Child of #6', action: 'Child of', prefix: '#', issue: '6'}],
  },
  mentions: [{raw: '@user', prefix: '@', user: 'user'}],
}
*/

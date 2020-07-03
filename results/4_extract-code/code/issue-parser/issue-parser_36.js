const issueParser = require('issue-parser');
const parse = issueParser('bitbucket');

parse('Issue description, ref user/package#1, fixing #2. /cc @user');
/*
{
  refs: [{raw: 'user/package#1', slug: 'user/package', prefix: '#', issue: '1'}],
  actions: {
    close: [{raw: 'fixing #2', action: 'Fixing', prefix: '#', issue: '2'}],
  },
  mentions: [{raw: '@user', prefix: '@', user: 'user'}],
}
*/

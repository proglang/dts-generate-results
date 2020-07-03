const issueParser = require('issue-parser');
const parse = issueParser('gitlab');

parse('Issue description, ref group/user/package#1, !2, implement #3, /duplicate #4 /cc @user');
/*
{
  refs: [
    {raw: 'group/user/package#1', slug: 'group/user/package', prefix: '#', issue: '1'},
    {raw: '!2', slug: 'group/user/package', prefix: '!', issue: '2'},
  ],
  actions: {
    close: [{raw: 'implement #3', action: 'Implement', prefix: '#', issue: '4'}],
    duplicate: [{raw: 'Duplicate of #4', action: 'Duplicate of', prefix: '#', issue: '4'}],
  },
  mentions: [{raw: '@user', prefix: '@', user: 'user'}],
}
*/

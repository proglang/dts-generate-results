const issueParser = require('issue-parser');
const parse = issueParser({actions: {fix: ['complete'], hold: ['holds up']}, issuePrefixes: ['🐛']});

parse('Issue description, related to user/package🐛1, Complete 🐛2, holds up 🐛3');
/*
{
  refs: [{raw: 'user/package🐛1', slug: 'user/package', prefix: '🐛', issue: '1'}],
  actions: {
    fix: [{raw: 'Complete 🐛2', action: 'Complete', prefix: '🐛', issue: '2'}],
    hold: [{raw: 'holds up 🐛3', action: 'Holds up', prefix: '🐛', issue: '3'}],
  },
}
*/

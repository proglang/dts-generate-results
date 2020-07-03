const moment = require('moment');

Factory.define('matches')
  .attr('seasonStart', '2016-01-01')
  .option('numMatches', 2)
  .attr('matches', ['numMatches', 'seasonStart'], (numMatches, seasonStart) => {
    const matches = [];
    for (const i = 1; i <= numMatches; i++) {
      matches.push({
        matchDate: moment(seasonStart)
          .add(i, 'week')
          .format('YYYY-MM-DD'),
        homeScore: Math.floor(Math.random() * 5),
        awayScore: Math.floor(Math.random() * 5)
      });
    }
    return matches;
  });

Factory.build('matches', { seasonStart: '2016-03-12' }, { numMatches: 3 });
// Built object (note scores are random):
//{
//  seasonStart: '2016-03-12',
//  matches: [
//    { matchDate: '2016-03-19', homeScore: 3, awayScore: 1 },
//    { matchDate: '2016-03-26', homeScore: 0, awayScore: 4 },
//    { matchDate: '2016-04-02', homeScore: 1, awayScore: 0 }
//  ]
//}

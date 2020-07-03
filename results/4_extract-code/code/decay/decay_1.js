var decay = require('decay')
  , hotScore = decay.redditHot();

setInterval(function () {
  candidates = []; // perhaps get recent posts saved in db here
  candidates.forEach(function (c) {
    c.score = hotScore(c.upVotes, c.dnVotes, c.date);
    // save so that next GET /entry/ gets an updated ordering
    save(c);
  });
}, 1000 * 60 * 5); // run every 5 minutes, say

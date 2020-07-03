var decay = require('decay')
  , wilsonScore = decay.wilsonScore();

// assume req.entry is the item being voted on
app.post('/entry/upvote', middleWare, function (req, res) {
  // call wilsonScore with ups, downs to recompute
  req.entry.score = wilsonScore(req.entry.upVotes + 1, req.entry.dnVotes);

  // save new score in database so that new pageviews sort
  save(req.entry);
});

var iferr = require('iferr');

function get_friends_count(id, cb) {
  User.load_user(id, iferr(cb, function(user) {
    user.load_friends(iferr(cb, function(friends) {
      cb(null, friends.length)
    }))
  }))
}

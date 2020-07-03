var iferr = require('iferr');

function get_friends_count(id, cb) {
  User.load_user(id, iferr(cb, user =>
    user.load_friends(iferr(cb, friends =>
      cb(null, friends.length)
    ))
  ))
}

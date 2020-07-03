var list = require('list-stream').obj()
  , db = require('level')('/path/to/db')

list.write({ key: 'name', value: 'Yuri Irsenovich Kim' })
list.write({ key: 'dob', value: '16 February 1941' })
list.write({ key: 'spouse', value: 'Kim Young-sook' })
list.write({ key: 'occupation', value: 'Clown' })

list.pipe(db.createWriteStream()) // write all of the stored entries to a database

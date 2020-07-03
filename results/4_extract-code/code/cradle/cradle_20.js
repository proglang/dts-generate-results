var fs = require('fs')

// this document should already be saved in the couchdb database
var doc = {
  _id: 'fooDocumentID',
  _rev: 'fooDocumentRev'
}

// the reference to the document in couch db that will be passed to the saveAttachment method
var idData = {
  id: doc._id,
  rev: doc._rev
}

// Read the file that you want to attach
var filePath = 'data/bar.pdf'
var readStream = fs.createReadStream(filePath)

var attachmentName = 'bar.pdf' // this is the filename that will be used in couchdb. It can be different from your source filename if desired

// note that there is no body field here since we are streaming the upload
var attachmentData = {
  name: attachmentName,
  'Content-Type': 'application/pdf'
}

var writeStream = db.saveAttachment(idData, attachmentData, function (err, reply) {
  if (err) {
    console.dir(err)
    return
  }
  console.dir(reply)
})
readStream.pipe(writeStream)

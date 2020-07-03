const protocPlugin = require('protoc-plugin')
const findCommentByPath = protocPlugin.findCommentByPath

// output comments for services & messages to stderr
protocPlugin(protos => {
  protos.forEach(proto => {
    proto.serviceList.forEach((service, s) => {
      console.error('SERVICE', service.name, findCommentByPath([6, s], proto.sourceCodeInfo.locationList))
      service.methodList.forEach((rpc, r) => {
        console.error('RPC', rpc.name, findCommentByPath([6, s, 2, r], proto.sourceCodeInfo.locationList))
      })
    })
    proto.messageList.forEach((message, m) => {
      console.error('MESSAGE', message.name, findCommentByPath([4, m], proto.sourceCodeInfo.locationList))
      message.fieldList.forEach((field, f) => {
        console.error('FIELD', field.name, findCommentByPath([4, m, 2, f], proto.sourceCodeInfo.locationList))
      })
    })
  })
  
  // no files written
  return []
})


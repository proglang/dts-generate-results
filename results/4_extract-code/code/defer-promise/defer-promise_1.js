const defer = require('defer-promise')
const deferred = defer()

doSomething((result, err) => {
  if (err) {
    deferred.reject(err)
  } else {
    deferred.resolve(result)
  }
})

return deferred.promise;

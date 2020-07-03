## Installation
```
npm install multy
```

# Usage

`multy` will add all parts to `req.body` or `ctx.body`.

Parts is added in EXACTLY same order as received, important to mix of file and text in same form.

```javascript
  var Multy = require('multy')
  app.use(Multy(options))
```
`options` is same as [busboy](https://github.com/mscdex/busboy#api)

# Example

```javascript
// on koa v2, works as well in express with req.body
const fs = require('fs')
const Multy = require('multy')
const app = new (require('koa'))()
const router = require('koa-Router')()

app.use(router)

router.use(Multy())
router.post('/', ctx => {
  const { file } = ctx.request.body
  const stream = fs.createWriteStream('potato.jpg')
  ctx.body = 'potato'
  return new Promise((resolve, reject) => {
    file
      .pipe(stream)
      .on('close', _ => resolve())
      .on('error', reject)
  })
})
app.listen(3000)

```

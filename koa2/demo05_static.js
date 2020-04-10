const Koa = require('koa')
const static = require('koa-static')
const path = require('path')
const app = new Koa()

//cnpm install --save koa-static
const staticPath = './static'
// 加载模板引擎
app.use(static(path.join(__dirname, staticPath)))

app.use(async (ctx) => {
  ctx.body = 'hello world'
})

app.listen(3000)
console.log('[demo] static-use-middleware is starting at port 3000');

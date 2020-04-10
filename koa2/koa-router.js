const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router(
  // {prefix: '/jsc'}
)

router.get('/', function(ctx, next) {
  ctx.body = 'hello jsc'
}).get('/todo', function (ctx, next) {
  ctx.body = 'todo page'
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, ()=>{
  console.log('demo port 3000');
})

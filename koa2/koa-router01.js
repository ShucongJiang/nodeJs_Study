const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()

let home = new Router()
home.get('/jsc', async (ctx) => {
  ctx.body = 'home jsc'
}).get('/todo', function (ctx, next) {
  ctx.body = 'home todo page'
})


let page = new Router()
page.get('/jsc', async (ctx) => {
  ctx.body = 'Page jsc'
}).get('/todo', function (ctx, next) {
  ctx.body = 'Page todo page'
})


const router = new Router()
router.use('/home', home.routes(), home.allowedMethods())
router.use('/page', page.routes(), page.allowedMethods())

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, ()=>{
  console.log('demo port 3000');
})

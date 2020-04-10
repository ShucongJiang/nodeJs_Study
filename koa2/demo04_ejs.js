const Koa = require('koa')
const views = require('koa-views')
const path = require('path')
const app = new Koa()

//在koa2中使用模板机制必须依靠中间件，我们这里选择koa-views中间件
//cnpm install --save koa-views
//cnpm install --save ejs

// 加载模板引擎
app.use(views(path.join(__dirname, './view'), {
  extension: 'ejs'
}))

app.use(async (ctx) => {
  let title ='hello koa2'
  await ctx.render('index', {
    title
  })
})

app.listen(3000)
console.log('demo port 3000');

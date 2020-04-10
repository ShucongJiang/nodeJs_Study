const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')
app.use(bodyParser())

app.use(async (ctx) => {
  if(ctx.url === '/' && ctx.method === 'GET') {
    let html = `
      <h1>Koa2 request post demo</h1>
      <form method="POST" action="/">
          <p>userName</p>
          <input name="userName" /><br/>
          <p>age</p>
          <input name="age" /><br/>
          <p>website</p>
          <input name="website" /><br />
          <button type="submit">submit</button>
      </form>
    `;
    ctx.body = html;
  } else if(ctx.url === '/' && ctx.method === 'POST') {
    // let pastData = await parsePostData(ctx)
    //通过koa-bodyparser解析请求
    let pastData = ctx.request.body;
    console.log(pastData);
    ctx.body = pastData
    // ctx.body = '接收到请求' 

  } else {
    ctx.body = "<h1>404!</h1>";
  }
})

function parsePostData(ctx) {
  return new Promise((resolve, reject) => {
    try {
      let postdata = "";
      ctx.req.on("data", data => {
        console.log(data);
        postdata += data;
      });
      ctx.req.addListener("end", function() {
        let parseData = parseQueryStr(postdata)
        resolve(parseData);
      });
    } catch (error) {
      reject(error);
    }
  });
}

function parseQueryStr(queryStr) {
  let queryData = {};
  let queryStrList = queryStr.split('&')
  for (let queryStr of queryStrList) {
    let itemList = queryStr.split('=');
    queryData[itemList[0]] = decodeURIComponent(itemList[1])
  }
  return queryData
}
app.listen(3000)
console.log('demo port 3000');

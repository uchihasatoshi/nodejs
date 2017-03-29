var http = require('http')
var fs = require('fs')
var url = require('url')

//console.log(Object.keys(http))
var port = process.env.PORT || 22331;

var server = http.createServer(function(request, response){

  var temp = url.parse(request.url, true)
  var path = temp.pathname
  var query = temp.query

  //从这里开始看，上面不要看

  if(path === '/'){
    var string = fs.readFileSync('./index.html')
    response.setHeader('Content-Type','text/html;charset=utf-8')
    response.end(string)
  }else if(path === '/style.css'){
    var string = fs.readFileSync('./style.css')
    response.setHeader('Content-Type','text/css')
    response.end(string)
  }else if(path === '/main.js'){
    var string = fs.readFileSync('./main.js')
    response.setHeader('Content-Type','application/javascript')
    response.end(string)
  }else{
    response.end('404')
  }

  // 代码结束，下面不要看
})

server.listen(port)
console.log('监听 22331 成功')

/* 初始化 */

var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if (!port) {
    console.log('请指定端口号')
    process.exit(1)
}

var server = http.createServer(function (request, response) {
    var parsedUrl = url.parse(request.url, true)
    var pathWithQuery = request.url
    var queryString = ''
    if (pathWithQuery.indexOf('?') >= 0) {
        queryString = pathWithQuery.substring(pathWithQuery.indexOf('?'))
    }
    var path = parsedUrl.pathname
    var query = parsedUrl.query
    var method = request.method

    /* 服务器启动 */

    console.log('总路径为:' + pathWithQuery)

    const userPath = path === '/' ? '/index.html' : path
    const index = path.lastIndexOf('.')
    const suffix = userPath.substr(index)
    const pathStyle = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.json': 'text/json',
        '.jpg': 'image/jpg',
        '.png': 'image/png',
        '.jpeg': 'image/jpeg',
        '.gif': 'image/gif',
        '.mp3': 'audio/mp3'
    }
    response.statusCode = 200
    response.setHeader('Content-Type', `${pathStyle[suffix] || 'text/html'};charset=utf-8`)
    try {
        response.write(fs.readFileSync(`./public${userPath}`))       
    } catch (error) {
        response.statusCode = 404
        response.write(fs.readFileSync(`./public/404.html`)) 
    }
    response.end()
})

/* 监听端口 */

server.listen(port)
console.log('监听端口' + port + '成功')
console.log('本地地址为 http://localhost:' + port)
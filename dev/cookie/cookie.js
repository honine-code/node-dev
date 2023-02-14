const http = require('http')

http.createServer((req, res) => {
    console.log(req.url, req.headers.cookie);
    res.writeHead(200, {'Set-Cokkie': 'mycookie=test2'})
    res.end('Hello Cokkie');
})
.listen(80)
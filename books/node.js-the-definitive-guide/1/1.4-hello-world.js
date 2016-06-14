var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<head><meta charset="utf-8"></head>');
    res.end('Hello Node.js\n');
}).listen(2345, '127.0.0.1');
console.log('Server running at localhost:2345');
var http = require('http');
function start() {
    http.createServer(function(req, res) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('Hello World!');
        res.end();
    }).listen(6789);
}
exports.start = start;
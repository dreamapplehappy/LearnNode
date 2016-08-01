var http = require('http');
var url = require('url');

function start(route, handle) {
    function onRequest(req, res) {

        var pathname = url.parse(req.url).pathname;
        console.log('Request for ' + pathname + ' received!');



        res.writeHead(200, {'Content-Type': 'text/plain'});
        var content = route(pathname, handle);
        res.write(content);
        res.end();
    }
    http.createServer(onRequest).listen(8000);
}
exports.start = start;
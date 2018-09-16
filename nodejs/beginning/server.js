var http = require('http');
var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Cotnent-Type': 'text/plain'});
    res.end('Hellow Nodejs\n');
})
server.listen(1337, '127.0.01');
console.log('Server running at http://127.0.0.1:1337/');
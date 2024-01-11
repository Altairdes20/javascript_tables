var usermodule = require('./UserDefinedModule');
var http = require('http');
http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(usermodule.myDateTime());
    res.end();
}).listen(8080);
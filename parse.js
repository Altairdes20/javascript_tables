var http = require('http');
var url = require('url');
http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var qry = url.parse(req.url, true).query;
    res.write("Name:" + qry.name + " Age:" + qry.age);
    res.end();
}).listen(8080);
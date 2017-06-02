var http = require('http');
//^includes modules

http.createServer( (req, res) =>
{
  res.writeHead(200, {'Content-Type' : 'text/html'});
  res.end('Hello world!');

}).listen(8080);
// Uses http module to create a server.

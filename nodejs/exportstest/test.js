var http = require('http');
var dt = require('./myfirstmodule');

http.createServer( (req,res) =>
{
    res.writeHead(200, {'Content-Type': 'text/html'});
    // if the response from the HTTP server is supposed to be in HTML, http header
    //200 is status code, meaning okay
    res.write("The date and time are currently: " + dt.myDateTime());
    // write a response to client

    res.end();
    //end response
}).listen(8080);
//creates server

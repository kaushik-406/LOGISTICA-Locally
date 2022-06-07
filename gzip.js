const zlib = require('zlib');
const http = require('http');
const fs = require("fs");
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html', 'Content-Encoding': 'gzip'});
    const text = readFile("index.html");
    zlib.gzip(text, function (_, result) {  // The callback will give you the 
      res.end(result);                     // result, so just send it.
    });
}).listen(3000);
console.log("Listening on port http://localhost:3000");

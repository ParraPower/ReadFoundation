var http = require('http');
var fs = require('fs');

//var html = fs.readFileSync('test.html');

http.createServer(function (req, res) {
    fs.readFile(__dirname + req.url, function (err,data) {
        if (err) {
          res.writeHead(404);
          res.end(JSON.stringify(err));
          return;
        }
        res.writeHead(200);
        res.end(data);
      });
    // res.writeHead(200, {'Content-Type': 'text/html'});
    // res.end(html);
}).listen(process.env.PORT);

// var express = require('express');

// var app = express();

// app.get('/', function(req, res) { 
//     res.send('Express is working...')
// });

// app.listen(process.env.PORT);
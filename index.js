//var http = require('http');
//
//var server = http.createServer(function(request, response) {
//
//    response.writeHead(200, {"Content-Type": "text/plain"});
//    response.end("Hello World!");
//
//});
//
//var port = process.env.PORT || 1337;
//server.listen(port);
//
//console.log("Server running at http://localhost:%d", port);
var fs = require('fs');

var key = fs.readFileSync('./certs/ssl/Server.key');
var cert = fs.readFileSync('./certs/ssl/Server.crt');
var ca = fs.readFileSync('./certs/ssl/CA.crt');

var options = {
    key: key,
    cert: cert,
    ca: ca
};

//var https = require('https');
//
//var server = https.createServer(options, function(request, response) {
//    console.log(request.url);
//    response.writeHead(200, {"Content-Type": "text/plain"});
//    response.end("Hello World!");
//
//});
var http = require('http');
var server = http.createServer(function(request, response){
    console.log(request.url);
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");
});
var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at https://localhost:%d", port);

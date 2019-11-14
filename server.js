
var http = require('http');
var fileSystem = require('fs');

var server = http.createServer(function(req, resp){
	var fileName = './index.html';
	var path = req.url;
	if (path) {
		if (path.endsWith(".css") || path.endsWith(".md") || path.endsWith(".svg") || path.endsWith(".ico")) {
			fileName = "." + path;
		}
	}
	console.log("request path ", path);	
	fileSystem.readFile(fileName, function(error, fileContent){
		if(error){
			resp.writeHead(500, {'Content-Type': 'text/plain'});
			resp.end('Error');
		}
		else{
			resp.writeHead(200, {'Content-Type': 'text/html'});
			resp.write(fileContent);
			resp.end();
		}
	});
});

server.listen(8080);


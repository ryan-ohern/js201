var http = require('http');

var server = http.createServer(function(req, res){
	res.write('hello');
	res.end();
});

server.listen(8081, function() {
	console.log("server is watching you...i mean listening on 8081");
});

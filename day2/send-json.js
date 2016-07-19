var http = require('http');

var server = http.createServer(function(req, res){
	res.setHeader('Content-Type', 'application/json');
	res.writeHeader(200, 'json content');
	res.write('{ "wizard" : "mithrandir" }');
	res.end();
});

server.listen(8081, function(){
	console.log("You shall not pass!!! on port 8081");
});
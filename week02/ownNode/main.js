var http = require('http');
var date = require('./own');

const PORT = 8100;

function handleRequest(request, response){
	response.write("DATE + TIME: " + date.myDateTime() + ": ))");
	response.end();
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
	console.log("Server listening on: http://localhost:%s", PORT)
});
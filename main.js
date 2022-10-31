// load the http module
var http = require('http');

// configure our HTTP server
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello NodeApp!! This project was created to demonstrate the below : HTQual Technology Solutions hired you as a MEAN Stack Developer. The organization decided to implement DevOps to develop and deliver the products. Since HTQual is an Agile organization, they follow Scrum methodology to develop the projects incrementally. The Company decided to develop their website on Mean stack. Since you are the MEAN stack developer, you have to demonstrate that deploying the Angular application on Docker is always the best approach to develop a project and test it incrementally");
});

// listen on localhost:8000
server.listen(8000);
console.log("Server listening on port 8000 :  http://127.0.0.1:8000/");

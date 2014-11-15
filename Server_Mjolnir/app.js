//all require node modules
var http = require('http');
var qs = require('querystring');

//creat http server
http.createServer(function(req, res){
    console.log("get request");
    
    var data = "";
    req.on('data', function(chunk){
        data += chunk;
    });
    req.on('end', function(){
        var post = qs.parse(data);
        console.log(post);
    });
}).listen(8000);
console.log("Start server");

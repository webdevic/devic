var restify = require('restify');
var fs = require('fs');

function respond(req, res, next) {
  res.send('hello ' + req.params.name);
}

var option = {
  certificate: fs.readFileSync('/home/ec2-user/temptoria.ca.ssl/www.temptoria.ca.crt'),
  key: fs.readFileSync('/home/ec2-user/temptoria.ca.ssl/temptoria.ca.key')
}

var server = restify.createServer(option);
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.listen(8443, function() {
  console.log('%s listening at %s', server.name, server.url);
});

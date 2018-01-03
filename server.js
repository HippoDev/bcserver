const http = require('http');
var express = require('./server/config/express');

var app = express();

const port = process.env.PORT || '3000';

app.set('port', port);

module.exports = app;

const server = http.createServer(app);

server.listen(port, () => {
    console.log('Server runing on at http://localhost:' + port);
});
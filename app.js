'use strict';

const fs = require('fs');

const credentials = {
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.crt')
};
const https = require('https');
const server = https.createServer(credentials);

server.on('request', function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('<h1>Ola, Amigo!</h1>');
});

server.listen(8000);

console.log('Notekeeper is on air!');
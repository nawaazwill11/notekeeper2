'use strict';
import dotenv from 'dotenv';
import fs from 'fs';
import https from 'https';
import route from './route';

dotenv.config();

const credentials = {
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.crt')
};
const server = https.createServer(credentials);

server.on('request', function (request, response) {
    route(request, response);
});

server.listen(process.env.PORT);

console.log('Notekeeper is on air!');
console.log('Serving on https://localhost:' + process.env.PORT);
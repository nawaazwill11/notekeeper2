'use strict';

import Router from 'router';
import fs from 'fs';
import fh from 'finalhandler';
import path from 'path';

const router = new Router();

const dir = {
    'html': 'view',
    'css': './build/css',
    'js': './build/js',
    'img': './build/img'
};
const pattern = {
    'css': /css\/\w+\.css/,
    'js': /js\/[\w.-]+\.js/,
    'img': /img\/[\w\.\-]+\.(ico|png|jpg|jpeg|svg)/
};
const header = {
    'html': {'Content-Type': 'text/html'},
    'css': {'Content-Type': 'text/css'},
    'js': {'Content-Type': 'text/javascript'},
};

const template_path = dir['html'];
const template = {
    '/': `${template_path}/index.html`,
};

function responder(url, type, response) {
    const file = path.basename(url);
    response.writeHead(200, header[type]);
    fs.createReadStream(`${dir[type]}/${file}`).pipe(response);
}

router.get('/', (request, response) => {
    response.writeHead(200, header['html']);
    fs.createReadStream(template['/']).pipe(response);
});

router.get(pattern['css'], (request, response) => {
    responder(request.url, 'css', response);
});

router.get(pattern['js'], (request, response) => {
    responder(request.url, 'js', response);
});

function route (request, response) {
    router(request, response, fh(request, response));
};

export default route;
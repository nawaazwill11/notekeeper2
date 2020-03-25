'use strict';

import Router from 'router';
import fs from 'fs';
import fh from 'finalhandler';
import path from 'path';

const router = new Router();

const dir = {
    'html': './',
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

function staticResponder(url, type, response) {
    const file = path.basename(url);
    response.writeHead(200, header[type]);
    fs.createReadStream(`${dir[type]}/${file}`).pipe(response);
}

router.get('/', (request, response) => {
    response.writeHead(200, header['html']);
    fs.createReadStream(template['/']).pipe(response);
});

router.get(pattern['css'], (request, response) => {
    staticResponder(request.url, 'css', response);
});

router.get(pattern['js'], (request, response) => {
    staticResponder(request.url, 'js', response);
});
router.get(pattern['img'], (request, response) => {
    // const file = path.basename(request.url);
    // const ext = path.extname(file);
    staticResponder(request.url, 'img', response);
})
function route (request, response) {
    router(request, response, fh(request, response));
};

export default route;
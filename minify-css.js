const fs = require('fs');
const path = require('path');
const cleanCSS = require('clean-css');

const css_dir = './build/css';
const css_files = fs.readdirSync(css_dir);

css_files.forEach(file => {
    if (path.extname(file) === '.css') {
        const css_file_path = css_dir + '/' + file;
        const input = fs.readFileSync(css_file_path);
        const options = {
            returnPromise: true
        }
        const output = new cleanCSS(options)
                        .minify(input)
                        .then(minifile => {
                            fs.writeFileSync(css_file_path, minifile.styles);
                            // console.log(minifile.styles)
                        })
                        .catch(error => {
                            console.log('Error occurred with file:', file, error)
                        });
    }
});
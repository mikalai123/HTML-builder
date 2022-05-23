const fs = require('fs');
const path = require('path');
const { stdout } = require('process');
const imput = fs.createReadStream(path.join(__dirname, 'text.txt'), 'utf-8');
imput.on('data', data => stdout.write(data));
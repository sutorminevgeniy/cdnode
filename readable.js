const fs = require('fs');

const stream = fs.createReadStream('lorem.txt');

let data = '';

stream.on('data', part => data += part);
stream.on('end', () => console.log('End', data.length));
stream.on('error', error => console.log('Error', error.message));
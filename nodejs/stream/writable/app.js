const fs = require('fs');

const writableStream = fs.createWriteStream('output.txt');

writableStream.write('Ini merupakan baris pertama!\n');
writableStream.write('Ini merupakan baris kedua!\n');
writableStream.end('Akhir dari writable stream!');
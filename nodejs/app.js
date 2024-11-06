const http = require('http');
const hostname = process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com';
const port = 3000;
const requestHandler = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
};
const server = http.createServer(requestHandler);
server.listen(port, hostname, () => {
  console.log(`Server berjalan pada http://${hostname}:${port}/`);
});

const memoryInformation = process.memoryUsage();
console.log(memoryInformation);

const firstname = process.argv[2];
const lastname = process.argv[3];
console.log(`Hello ${firstname} ${lastname}`);


/**
 * Elemen pertama : Alamat (path) lengkap dari lokasi node yang menjalankan prosesnya. 
 * Element kedua : Alamat (path) berkas JavaScript yang dieksekusi (app.js)
 * Element ketiga : “harry”
 * Element keempat : “potter”
 */
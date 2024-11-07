const fs = require('fs');

// Read
const readData = fs.createReadStream('./input.txt', 'utf-8');

readData.on('data', (chunk) => {
    console.log(chunk);
});
readData.on('error', (error) => {
    console.log(`Gagal membaca berkas!`, error.message);
});
// Write
const writeData = fs.createWriteStream('./output.txt', 'utf-8');
const output = `Lorem ipsum dol
or sit amet, co
nsectetur adipi
scing elit, sed
do eiusmod tem
por incididunt
ut labore et do
lore magna aliq
ua. Ut enim ad
minim veniam, q
uis nostrud exe
rcitation ullam
co laboris nisi
ut aliquip ex
ea commodo cons
equat. Duis aut
e irure dolor i
n reprehenderit
in voluptate v
elit esse cillu
m dolore eu fug
iat nulla paria
tur. Excepteur
sint occaecat c
upidatat non pr
oident, sunt in
culpa qui offi
cia deserunt mo
llit anim id es
t laborum.
null `;
writeData.write(output);


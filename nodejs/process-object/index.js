const initialMemoryUsage = process.memoryUsage().heapUsed; // todo 1
const yourName = process.argv[2]; // todo 2
const environment = process.env.NODE_ENV || 'development'; // todo 3

for (let i = 0; i <= 1000; i++) {
}

const currentMemoryUsage = process.memoryUsage().heapUsed; // todo 4

console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`);
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);




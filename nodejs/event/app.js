const { EventEmitter } = require('events');

const myEventEmitter = new EventEmitter();

// cara 1
// fungsi yang akan dijalankan ketika event coffee-order terjadi
const makeCoffee = ({ name }) => {
    console.log(`Kopi ${name} telah dibuat!`);
}
const makeBill = ({ price }) => {
    console.log(`Bill sebesar ${price} telah dibuat!`);
}

// mendaftarkan fungsi makeCoffee sebagai listener event coffee-order
myEventEmitter.on('coffee-order', makeCoffee);
myEventEmitter.addListener('coffee-order', makeBill);


// cara 2
// const makeCoffee = ( name ) => {
//     console.log(`Kopi ${name} telah dibuat!`);
// }
// const makeBill = ( price ) => {
//     console.log(`Bill sebesar ${price} telah dibuat!`);
// }
// const onCoffeeOrderedListener = ({ name, price }) => {
//     makeCoffee(name);
//     makeBill(price);
// }
// myEventEmitter.on('coffee-order', onCoffeeOrderedListener)



// Memicu event 'coffee-order' terjadi.
myEventEmitter.emit('coffee-order', { name: 'Tubruk', price: 15000 });
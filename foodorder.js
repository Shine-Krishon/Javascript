console.log("\t\t\t\tPlace Your Order\t\t\t\t");
console.log("\t\t\t\tMENU\t\t\t\t");
const pizza = 200;
const burger = 300;
const cb = 250;
const aj = 100;
const idli = 80;

let p = prompt("Pizza - 200");
let b = prompt("Burger - 300");
let c = prompt("Chicken Biriyani - 250");
let a = prompt("Apple Juice - 100");
let i = prompt("Idli - 80");

let price = p * pizza + burger * burger + cb * c + aj * aj + idli * i;
console.log(price);

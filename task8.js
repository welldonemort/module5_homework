//task8

let myMap = new Map();
myMap.set(1, 'Bob');
myMap.set(2, 'Alice');
myMap.set(3, null);

for(let [key, value] of myMap.entries()) {    
  console.log(`Key - ${key}, value - ${value}.`);
}
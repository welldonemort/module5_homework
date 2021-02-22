//task1

let num = prompt('Enter value of number: ');
num = +num;

if (typeof num == 'number' && !isNaN(num)) {
  if (num === 0) {
    console.log('It\'s zero.');
  } else if (num % 2 === 0) {
    console.log('This number is even.');
  } else {
    console.log('This number is odd.');
  }
} else {
  console.log('Oops, it seems you were wrong! :0');
}
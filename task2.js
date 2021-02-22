//task2

let x = prompt('Enter something: ');
alert(typeof x);

if (typeof +x == 'number' && !isNaN(+x)) {
  console.log('X - number.');
} else if (x == 'true' || x == 'false') {
  console.log('X - boolean.');
} else if (typeof x == 'string') {
  console.log('X - string.')
} else {
  console.log('Type of X - undefined. :0')
}
//task6

let arrSame = [1, 1, 1, 1, 1];
let arrDifferent = [1, 2, 3, 'cat'];
let arrSameAnswer, arrDifferentAnswer;

for (let i = 0; i < arrSame.length - 1; i++) {
  arrSameAnswer = arrSame[i] === arrSame[i + 1] ? "Same elements" : "Different elements";
}

console.log(arrSameAnswer);

for (let i = 0; i < arrDifferent.length - 1; i++) {
  arrDifferentAnswer = arrDifferent[i] === arrDifferent[i + 1] ? "Same elements" : "Different elements";
}

console.log(arrDifferentAnswer);
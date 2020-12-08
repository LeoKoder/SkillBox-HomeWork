// длина массива
let count = Math.floor(Math.random() * 101) + 1;
let array = new Array(count);

let n = -3;
let m = 10;

// находим меньшее число
let min = Math.min(n, m);

// все что можно сгенерировать
let number = Math.abs(m - n);

for (let i = 0; i < array.length; i++) {
  let random = min + (Math.round(Math.random() * number));
  array[i] = random;
}

console.log("n = " + n + ", m = " + m + ", count = " + count);
console.log(array);
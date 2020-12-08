let n = -100;
let m = 100;

// находим меньшее число
let min = Math.min(n, m);

// все что можно сгенерировать
let chisla = Math.abs(m - n);

// генерируем число от 0 до максимально возможного
let random = min + (Math.round(Math.random() * chisla));

// определение четности числа
let k = random % 2;
let res = random + k - 1

console.log("Случайное число:" + res);

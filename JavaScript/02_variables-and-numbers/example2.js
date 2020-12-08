let a = 13.890123;
let b = 2.891564;
let koef = 3;

// выделить целую часть
let cel1 = a - Math.trunc(a);
let cel2 = b - Math.trunc(b);

// знаков после запятой
let simvol = Math.pow(10, koef);

let okruglenie1 = cel1 * simvol;
let okruglenie2 = cel2 * simvol;

console.log("Дробные части: " + Math.trunc(okruglenie1) + ", " + Math.trunc(okruglenie2));

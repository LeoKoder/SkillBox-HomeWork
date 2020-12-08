let x1 = -5;
let x2 = 10;

let y1 = 8;
let y2 = 5;

//градусы и окугление до однго знака после запятой
let grad = Math.sin(30 * (Math.PI / 180));
let correct = Math.round(grad * 100) / 100;

//длины проекций
let X = Math.abs(x2 - x1);
let Y = Math.abs(y2 - y1);

//длина диагонали
let d = Math.round(Math.sqrt(Math.pow(X, 2) + Math.pow(Y, 2)));

//площадь прямоугольника
let S = Math.pow(d, 2) * correct / 2;
console.log ("x1 = " + x1 + ", y1 = " + y1 + ", x2 = " + x2 + ", y2 = " + y2 + " площадь равна " + S);

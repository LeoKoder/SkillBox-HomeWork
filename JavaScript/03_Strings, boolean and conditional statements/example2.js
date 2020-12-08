let name ="КоНСТаНтин";
let surname ="КоНстаНтиНовИч"

// берем пеервые символы
let firstName = name.charAt(0);
let firstSurname = surname.charAt(0);

// берем оставшиеся символы
let finishName = name.substr(1);
let finishSurname = name.substr(1);

// конкатенируем первый и все остальные символы после изменений
let resultName = firstName.toUpperCase() + finishName.toLowerCase();
let resultSurname = firstSurname.toUpperCase() + finishSurname.toLowerCase();

console.log(resultName);
(resultName !== name) ? console.log("Имя было преобразовано!") : console.log("Имя осталось без изменений");

console.log(resultSurname);
(resultSurname !== surname) ? console.log("Фамилия была преобразована!") : console.log("Фамилия осталась без изменений");
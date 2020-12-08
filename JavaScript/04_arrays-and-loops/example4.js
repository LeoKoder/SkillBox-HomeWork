const dayInMouth  = 31;

let week = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
let Day = "среда";
let index;
let dayInWeek = 7;
let mouthDay = new Array(dayInMouth);
let result = new Array(dayInMouth);

// массив дней недели
for (let i = 0; i < dayInMouth; i++) {
  mouthDay[i] = i + 1;
}

for(let i = 0; i < week.length - 1; i++) {
  if (week[i] === Day) {
    index = dayInWeek % 7;
    for(let a = 0; a < result.length; a++) {
      result[a] = (mouthDay[a] + " января " + week[index]);
      index++;
      if (index === 7) {
        index = 0;
      }
    }
  } else { 
  index++;
  }
  dayInWeek++;
}

console.log(result);

let roadMines = new Array(10);

let mineRandom;
let bang = 0;

// создание дороги с случайными минами
for (let i = 0; i <= roadMines.length - 1; i++) {
  mineRandom = Math.floor(Math.random() * 2);
  roadMines[i] = Boolean(mineRandom);

}
// дорога
console.log(roadMines);

while (bang !== 2) {
  for (let i in roadMines) {
    console.log(`Переместился на ${parseInt(i) + 1} `);

    if (roadMines[i] === true) {
      console.log("Танк поврежден");
      bang++;
      if (bang === 2) {
        console.log("Танк унитожен");
        break;
      }
    }
  }
  if ((bang === 0) && (roadMines[9] === false)) {
    console.log("Танк не поврежден");
    break;
  }
}



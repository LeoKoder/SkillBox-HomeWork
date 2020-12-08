let string = " ";
let i = string.length - 1;
let invertString = string[i];
i--;

if (i === 1) {
  invertString.charAt(0);
} 

for (i; i >= 0; i--){
  invertString += string[i];
}

console.log (invertString);
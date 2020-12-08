let password = "1234-";

if ((password.length >= 4) && (password.includes("_") || password.includes("-")))  {
console.log("Пароль надежный");
} else {
  console.log("Пароль ненадежный");
}

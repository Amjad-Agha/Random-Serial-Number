let characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let Serial = document.querySelector(".serial");
let generate = document.querySelector(".generate");

generate.onclick = ()=>{
  let randomSerial = "";
  for(let i=0; i < 14; i++) {
    randomSerial += (characters[Math.floor(Math.random() * characters.length)])
    console.log(randomSerial)
  }
  Serial.innerHTML = randomSerial
}


let text = "Лагерная пыль!";
let textArray = text.split(""); 
textArray.reverse();
for (let i = 0; i < textArray.length; i++) {
  textArray[i] = textArray[i].toLowerCase();
}
let reversedText = textArray.join("");
console.log(reversedText); 

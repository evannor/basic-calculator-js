// alert("The JavaScript is connected!");

// Create the rest of the calculator buttons
let buttonArray = ["clear", "()", "%", "/", "7", "8", "9", "X", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "="];

for(i = 0; i < buttonArray.length; i++) {
  let btn = document.createElement("button");
  btn.innerText = buttonArray[i];
  let btnDiv = document.getElementById("btn-area");
  btnDiv.appendChild(btn);
}
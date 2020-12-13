// Create global input variable
let inputValue;

// Create calculator buttons
let buttonArray = ["Clear", "( )", "%", "/", "7", "8", "9", "X", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "="];
for(i = 0; i < buttonArray.length; i++) {
  let btn = document.createElement("button");
  btn.innerText = buttonArray[i];
  btn.id = buttonArray[i];
  let btnDiv = document.getElementById("btn-area");
  btnDiv.appendChild(btn);
}

// Button event listeners
for (i = 0; i < buttonArray.length; i++) {
  document.getElementById(buttonArray[i]).addEventListener("click", btnClick);
}

// Called once a button in clicked
function btnClick() {
  // Check for and save input
  if (document.getElementById("screen").value === "0") {
    inputValue = 0;
  } else {
    inputValue = document.getElementById("screen").value;
  }
}
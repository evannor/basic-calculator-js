// Create global input variable
let inputValue;
let outputFormula = "";

// Create calculator buttons
let buttonArray = ["Clear", "( )", "%", "/", "7", "8", "9", "X", "4", "5", "6", "-", "1", "2", "3", "+", "CE", "0", ".", "="];
for(i = 0; i < buttonArray.length; i++) {
  let btn = document.createElement("button");
  btn.innerText = buttonArray[i];
  btn.id = buttonArray[i];
  let btnDiv = document.getElementById("btn-area");
  btnDiv.appendChild(btn);
}

// Button event listeners
for (i = 0; i < buttonArray.length; i++) {
  document.getElementById(buttonArray[i]).addEventListener("click", function(props){
  let screenValue = document.getElementById("screen").value;
  // Check for and save input
  if (screenValue === "") {
    inputValue = 0;
  } else {
    inputValue = screenValue;
  }

  // Check which button is pressed
  let btnPressed = props.target.id;
  
  // Button functionality
  switch (btnPressed) {
    case "Clear":
      clearInput();
      inputValue = 0;
      break;
    case "( )":
      addParenthesis(inputValue);
      console.log(outputFormula);
      break;
    case "%":
      percentage(inputValue);
      console.log(outputFormula);
      break;
    case "/":
      divide(inputValue, "/");
      break;
    case "X":
      multiply(inputValue, "X");
      break;
    case "-":
      subtract(inputValue, "-");
      break;
    case "+":
      add(inputValue, "+");
      break;
    case "CE":
      clearInput();
      inputValue = 0;
      outputFormula= "";
      break;
    case ".":
      console.log("Throw in that decimal");
      break;
    case "=":
      console.log("Complete the equation");
      break;
  
    default:
      inputValue = parseInt(btnPressed);
      document.getElementById("screen").value += inputValue;
      break;
  }
  });
}
// Create global input variable
let inputValue;
let outputFormula = "";

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
      break;
    case "( )":
      changeOutput(inputValue, "( )");
      console.log(outputFormula);
      break;
    case "%":
      console.log("Make it a percentage");
      break;
    case "/":
      console.log("Divide these numbers");
      break;
    case "X":
      console.log("Multiply these numbers");
      break;
    case "-":
      console.log("Subtract these numbers");
      break;
    case "+":
      console.log("Add these numbers");
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
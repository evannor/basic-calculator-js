// Create global input variable
let inputValue;
let outputFormula = "";
const outputDiv = document.getElementById("outputFormula");

// Create calculator buttons
let buttonArray = [
  "Clear",
  "( )",
  "%",
  "/",
  "7",
  "8",
  "9",
  "X",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "CE",
  "0",
  ".",
  "=",
];
for (i = 0; i < buttonArray.length; i++) {
  let btn = document.createElement("button");
  btn.innerText = buttonArray[i];
  btn.id = buttonArray[i];
  let btnDiv = document.getElementById("btn-area");
  btnDiv.appendChild(btn);
}

// Button event listeners
for (i = 0; i < buttonArray.length; i++) {
  document
    .getElementById(buttonArray[i])
    .addEventListener("click", function (props) {
      let screenValue = document.getElementById("screen").value;
      // Check for and save input
      if (screenValue === "") {
        // if outputFormula !== "", then complete arithmetic and set as input value --good use of anonymous arrow function
        inputValue = 0;
      } else {
        inputValue = screenValue;
      }

      // Check and save which button is pressed
      let btnPressed = props.target.id;

      // Button functionality
      switch (btnPressed) {
        case "Clear":
          clearInput();
          inputValue = 0;
          break;
        case "( )":
          alert(
            "Paranthese are currently in development! Try writing the equation without them, the Calculator will still follow PEMDAS."
          );
          // addParenthesis(inputValue);
          // console.log(outputFormula);
          // outputDiv.innerText = outputFormula;
          break;
        case "%":
          percentage(inputValue);
          console.log(outputFormula);
          outputDiv.innerText = outputFormula;
          break;
        case "/":
          arithmetic(inputValue, "/");
          console.log(outputFormula);
          outputDiv.innerText = outputFormula;
          break;
        case "X":
          arithmetic(inputValue, "X");
          console.log(outputFormula);
          outputDiv.innerText = outputFormula;
          break;
        case "-":
          arithmetic(inputValue, "-");
          console.log(outputFormula);
          outputDiv.innerText = outputFormula;
          break;
        case "+":
          arithmetic(inputValue, "+");
          console.log(outputFormula);
          outputDiv.innerText = outputFormula;
          break;
        case "CE":
          clearInput();
          inputValue = 0;
          outputFormula = "";
          inputArray = [];
          outputHistory.length = 0;
          outputDiv.innerText = outputFormula;
          historyDiv.innerText = outputHistory;
          break;
        case ".":
          const decimalPlaces = prompt(
            "How many digits to the right of the decimal?"
          );
          if (isNaN(decimalPlaces)) {
            alert("Number of decimal places must be a number.");
            break;
          }
          document.getElementById("screen").value =
            inputValue / Math.pow(10, decimalPlaces);
          break;
        case "=":
          document.getElementById("screen").value = equal(inputValue, "=");
          console.log(
            (outputFormula +=
              inputValue + " = " + document.getElementById("screen").value)
          );
          outputDiv.innerText = outputFormula;
          break;

        default:
          //gets called when only a number is pressed
          inputValue = parseInt(btnPressed);
          document.getElementById("screen").value += inputValue;
          break;
      }
    });
}

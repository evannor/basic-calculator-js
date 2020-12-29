let calcInput;
let inputArray= [];

function clearInput() {
  return document.getElementById("screen").value = "";
}

// Need functionality for adding multiple () together
function addParenthesis (input) {
  // Add parenthesis to outputFormula
  if (input === 0 && outputFormula === "") {
    outputFormula = " ( ";
    calcInput = {
      lastValue: input,
      operator: " ( "
    }
    inputArray.push(calcInput);
    clearInput();
  } else {
    if (outputFormula.includes("(")) {
      outputFormula += input + " ) ";
      calcInput = {
        lastValue: input,
        operator: " ) "
      }
      inputArray.push(calcInput);
      clearInput();
    } else {
      outputFormula += " ( " + input;
      calcInput = {
        lastValue: input,
        operator: " ( "
      }
      inputArray.push(calcInput);
      clearInput();
    }
  }
}

function percentage(input) {
  // Change input to percent
  if (input === 0) {
    // Exits function if input is 0
    return console.log("Number must not be 0.");
  } else {
     outputFormula += (input / 100);
     calcInput = {

     }
     clearInput();
  }
}

function arithmetic (input, operator) {
  // Add information to outputFormula
  calcInput = {
    lastValue: input,
    operator: operator
  };
  inputArray.push(calcInput);
  outputFormula += input + " " + operator + " ";
  clearInput();
}
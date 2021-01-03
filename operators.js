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
     document.getElementById("screen").value = (input / 100);
  }
}

// Change when there is already a "=" in the output formula
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

function equal (input, operator) {
  calcInput = {
    lastValue: input,
    operator: operator
  };
  inputArray.push(calcInput);
  // Start at position [0] in input array
  // if operator is not "(", ")", save calcInput and operator
  // complete operation with new number from screenValue
  // CAN USE SPLICE() TO TAKE OUT PORTION OF ARRAY
  // if it is a parentheses, first check that it is "("
  // Send error if ")" is found first
  // Otherwise search forward for ")" and extract objects into new array
  // Perform operations in new array and then return to original array
  // if no (), then 
  let total;
  do {
    switch (inputArray[0].operator) {
      case "/":
        total = inputArray[0].lastValue / inputArray[1].lastValue;
        break;
      case "X":
        total = inputArray[0].lastValue * inputArray[1].lastValue;
        break;
      case "-":
        total = inputArray[0].lastValue - inputArray[1].lastValue;
        break;
      case "+":
        total = parseInt(inputArray[0].lastValue) + parseInt(inputArray[1].lastValue);
        break;
      case "=":
        inputArray[1].lastValue = inputArray[0].lastValue;
        inputArray.splice(0, 1);
        break;
    }
    inputArray[1].lastValue = total;
    inputArray.splice(0, 1);
  } while(inputArray.length > 1);
  return inputArray[0].lastValue;
}
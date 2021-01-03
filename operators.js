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
  console.dir(inputArray);
  // Start at position [0] in input array
  // if operator is not "(", ")", save calcInput and operator
  // complete operation with new number from screenValue

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
        total = inputArray[0].lastValue + inputArray[1].lastValue;
        break;
    }
    inputArray[1].lastValue = total;
    inputArray.splice(0, 1);
  } while(inputArray.length > 1);
  return inputArray[0].lastValue;
}
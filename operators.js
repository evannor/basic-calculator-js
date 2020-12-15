let calcInput;
let inputArray= [];

function clearInput() {
  return document.getElementById("screen").value = "";
}

function addParenthesis (input) {
  // Add parenthesis to output
  if (input === 0 && outputFormula === "") {
    outputFormula = " ( ";
    clearInput();
  } else {
    if (outputFormula.includes("(")) {
      outputFormula += input + " ) ";
      clearInput();
    } else {
      outputFormula += " ( " + input;
       clearInput();
    }
  }
}

function percentage(input) {
  // Change input to percent
  if (input === 0) {
    return console.log("Number must not be 0.");
  } else {
     outputFormula += (input / 100);
     clearInput();
  }
}

function divide(input) {
  calcInput = {
    lastValue: input,
    operator: "/"
  };
  inputArray.push(calcInput);
  clearInput();
}

function multiply (input) {
  calcInput = {
    lastValue: input,
    operator: "X"
  };
  inputArray.push(calcInput);
  clearInput();
}

function subtract (input) {
  calcInput = {
    lastValue: input,
    operator: "-"
  };
  inputArray.push(calcInput);
  clearInput();
}

function add (input) {
  calcInput = {
    lastValue: input,
    operator: "+"
  };
  inputArray.push(calcInput);
  clearInput();
}
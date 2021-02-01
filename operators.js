let calcInput;
let inputArray = [];
const outputHistory = [];
const historyDiv = document.getElementById("outputHistory");

function clearInput() {
  return (document.getElementById("screen").value = "");
}

// Need functionality for adding multiple () together
function addParenthesis(input) {
  // Add parenthesis to outputFormula
  if (input === 0 && outputFormula === "") {
    outputFormula = " ( ";
    calcInput = {
      lastValue: input,
      operator: " ( ",
    };
    inputArray.push(calcInput);
    clearInput();
  } else {
    if (outputFormula.includes("(")) {
      outputFormula += input + " ) ";
      calcInput = {
        lastValue: input,
        operator: " ) ",
      };
      inputArray.push(calcInput);
      clearInput();
    } else {
      outputFormula += " ( " + input;
      calcInput = {
        lastValue: input,
        operator: " ( ",
      };
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
    outputFormula += input / 100;
    document.getElementById("screen").value = input / 100;
  }
}

function arithmetic(input, operator) {
  if (inputArray.length === 1 && inputArray[0].operator === "=") {
    // don't want to clear outputFormula unless CE is pressed
    // save previous formula
    outputHistory.push({ outputFormula });
    outputFormula = [];
    // Need to add space to screen to show outputHistory
    historyDiv.innerHTML = "";
    outputHistory.map((entry) => {
      const infoEntry = document.createElement("p");
      infoEntry.innerText = entry.outputFormula;
      historyDiv.appendChild(infoEntry);
    });
  }
  // Add information to outputFormula
  calcInput = {
    lastValue: input,
    operator: operator,
  };
  inputArray.push(calcInput);
  outputFormula += input + " " + operator + " ";
  clearInput();
}

function equal(input, operator) {
  calcInput = {
    lastValue: input,
    operator: operator,
  };
  inputArray.push(calcInput);
  if (inputArray[0].operator === "=") {
    inputArray.shift();
  }
  const answer = pemdasSort(inputArray);
  return answer;
}

// currently searches provided array and completes multiplication and division first
function pemdasSort(array) {
  // if more than 2, find X or /, complete first, add equalObj back to array, sort more or finish aritmetic after
  do {
    // If only 2 items, no need to sort
    if (array.length < 3) {
      equalExecution(array);
      return array[0].lastValue;
    }
    const elIndex = array.findIndex(
      (entry) => entry.operator === "X" || entry.operator === "/"
    );
    const tempArray = array.splice(elIndex, 2);
    const equalObj = equalExecution(tempArray);
    array.splice(elIndex, 0, ...equalObj);
  } while (array.length > 1);
}

function equalExecution(array) {
  let total;
  do {
    switch (array[0].operator) {
      case "/":
        total = array[0].lastValue / array[1].lastValue;
        break;
      case "X":
        total = array[0].lastValue * array[1].lastValue;
        break;
      case "-":
        total = array[0].lastValue - array[1].lastValue;
        break;
      case "+":
        total = parseInt(array[0].lastValue) + parseInt(array[1].lastValue);
        break;
      case "=":
        array[1].lastValue = array[0].lastValue;
        array.splice(0, 1);
        break;
    }
    array[1].lastValue = total;
    array.splice(0, 1);
  } while (array.length > 1);
  return array;
}

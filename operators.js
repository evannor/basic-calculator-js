function clearInput() {
  return document.getElementById("screen").value = "";
}

function changeOutput (input, operator) {
  if (input === 0 && operator === "( )") {
    outputFormula = " ( ";
    clearInput();
  } else {
    if (outputFormula.includes("(")) {
      outputFormula += input + " ) ";
      clearInput();
    } else {
      outputFormula = " ( " + input;
      clearInput();
    }
  }
}
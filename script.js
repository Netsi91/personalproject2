let resultField = document.getElementById('result');
let currentExpression = '';

function appendNumber(number) {
  currentExpression += number;
  resultField.value = currentExpression;
}

function appendOperator(operator) {
  currentExpression += operator;
  resultField.value = currentExpression;
}

function clearResult() {
  currentExpression = '';
  resultField.value = '';
}

function calculateResult() {
  try {
    let result = math.evaluate(currentExpression);
    resultField.value = result;
    currentExpression = '';
  } catch (error) {
    resultField.value = '8';
  }
}
 
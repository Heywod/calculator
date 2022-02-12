const buttons = document.querySelectorAll('.buttons');
const numbers = document.querySelectorAll('.number');
const operands = document.querySelectorAll('operand');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');
const clearAllButton = document.querySelector('.clearAll');
const input = document.querySelector('.input');
const holder = document.querySelector('.holder');

buttons.forEach((button) => {
  // Add event listener
  button.addEventListener('click', (e) => {
    const button = e.target;
    const numberValue = button.textContent;
    const displayValue = input.textContent;
    const holderValue = holder.textContent;
    const operand = holderValue.slice(-2);
    // If its a number
    if (button.classList.contains('number')) {
      //Stop multiple decimals
      if (numberValue === '.' && displayValue.includes('.')) {
        return;
      }
      if (displayValue == 0) {
        input.textContent = numberValue;
      } else {
        input.textContent = displayValue + numberValue;
      }
    }
    // If its an operand
    if (button.classList.contains('operand')) {
      if (holderValue == '' || operand == ' =') {
        holder.textContent = displayValue + ' ' + numberValue;
        input.textContent = 0;
      }
      if (holderValue != '') {
        if (operand === ' +') {
          holder.textContent = parseFloat(holderValue) + parseFloat(displayValue) + ' ' + numberValue;
          input.textContent = 0;
        }
        if (operand === ' -') {
          holder.textContent = parseFloat(holderValue) - parseFloat(displayValue) + ' ' + numberValue;
          input.textContent = 0;
        }
        if (operand === ' ×') {
          holder.textContent = parseFloat(holderValue) * parseFloat(displayValue) + ' ' + numberValue;
          input.textContent = 0;
        }
        if (operand === ' ÷') {
          holder.textContent = Math.round((parseFloat(holderValue) / parseFloat(displayValue)) * 100) / 100 + ' ' + numberValue;
          input.textContent = 0;
        }
      }
    }
    // If its equals
    if (button.classList.contains('equals')) {
      if (holderValue == '') {
        return;
      }
      if (holderValue != '') {
        if (operand === ' +') {
          holder.textContent = parseFloat(holderValue) + parseFloat(displayValue) + ' ' + numberValue;
          input.textContent = 0;
        }
        if (operand === ' -') {
          holder.textContent = parseFloat(holderValue) - parseFloat(displayValue) + ' ' + numberValue;
          input.textContent = 0;
        }
        if (operand === ' ×') {
          holder.textContent = parseFloat(holderValue) * parseFloat(displayValue) + ' ' + numberValue;
          input.textContent = 0;
        }
        if (operand === ' ÷') {
          holder.textContent = Math.round((parseFloat(holderValue) / parseFloat(displayValue)) * 100) / 100 + ' ' + numberValue;
          input.textContent = 0;
        }
      }
    }
    // Percentange
    if (button.classList.contains('switch')) {
      if (displayValue >= 0) {
        input.textContent = displayValue * -1;
      } else {
        input.textContent = Math.abs(displayValue);
      }
    }
    //Clear
    if (button.classList.contains('clear')) {
      input.textContent = 0;
    }
    //All Clear
    if (button.classList.contains('allClear')) {
      input.textContent = 0;
      holder.textContent = '';
    }
  });
});

const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};

function updateDisplay() {
    const display = document.querySelector('.display-2');
    display.value = calculator.displayValue;
}

 function inputDigit(digit) {
     const {displayValue, waitingForSecondOperand} = calculator;
     if(waitingForSecondOperand === true) {
         calculator.displayValue = digit;
         calculator.waitingForSecondOperand = false;
     } else {
        if(displayValue == 0) {
         calculator.displayValue = digit;
        } else {
         calculator.displayValue += digit;
        }
     }
     console.log(calculator);
 }

 function inputDecimal(dot) {
     const {displayValue} = calculator;
     if(!displayValue.includes(dot)) {
         calculator.displayValue += dot;
     }
}

function operationHandler(nextOperator) {
    const {firstOperand, displayValue, operator} = calculator;

    const inputValue = parseFloat(displayValue);
    if (firstOperand === null && !isNaN(inputValue)) {
        calculator.firstOperand = inputValue;
    } else if (operator) {
        const result = operate(operator, firstOperand, inputValue);

        calculator.displayValue = String(result);
        calculator.firstOperand = result;
    }

    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
    console.log(calculator);
}

const add = function(first, second) {
    let total = 0;
    total = first + second;
    return total;
}
const subtract = function(first, second) {
    let total = 0;
    total = first - second;
    return total;
}
const multiply = function(first, second) {
    let total = 0;
    total = first * second;
    return total;
}
const divide = function(first, second) {
    let total = 0;
    total = first / second;
    return total;
}

const operate = function(operator, first, second) {
    first = Number(first);
    second = Number(second);
    switch(operator) {
        case '+':
            return add(first, second);
        case '-':
            return subtract(first, second);
        case '×':
            return multiply(first, second);
        case '÷':
            if(second === 0) {
                return null;
            } else {
                return divide(first, second);
            }
        default:
            return second;    
    }
}

const buttons = document.querySelector('.buttons');

buttons.addEventListener('click', (event) => {
    const {target} = event;
    if(!target.matches('button')) {
        return;
    }
    if(target.classList.contains('operationBtn')) {
        operationHandler(target.value);
        updateDisplay();
        return;
    }
    if(target.classList.contains('decimalBtn')) {
        inputDecimal(target.value);
        updateDisplay();
        return;
    }
    if(target.classList.contains('clearBtn')) {
        console.log('clear', target.value);
        return;
    }
    if(target.classList.contains('deleteBtn')) {
        console.log('delete', target.value);
        return;
    }
    if(target.classList.contains('bracketBtn')) {
        console.log('brackets', target.value);
        return;
    }
    if(target.classList.contains('equalBtn')) {
        console.log('equal-sign', target.value);
        return;
    }
    inputDigit(target.value);
    updateDisplay();
 });


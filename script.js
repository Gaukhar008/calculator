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
        if(displayValue === '0') {
         calculator.displayValue = digit;
        } else if(!(calculator.displayValue.length > 15)) {
         calculator.displayValue += digit;
        }
     }
 }

 function inputDecimal(dot) {
     const {displayValue} = calculator;
     if(calculator.waitingForSecondOperand === true) {
         calculator.displayValue = '0.';
         calculator.waitingForSecondOperand = false;
         return
     }
     if(!displayValue.includes(dot)) {
         calculator.displayValue += dot;
     }
}

function operationHandler(nextOperator) {
    const {firstOperand, displayValue, operator} = calculator;

    const inputValue = parseFloat(displayValue);
    
    if(operator && calculator.waitingForSecondOperand) {
        calculator.operator = nextOperator;
        return;
    }
    if (firstOperand === null && !isNaN(inputValue)) {
        calculator.firstOperand = inputValue;
    } else if (operator) {
        const result = operate(operator, firstOperand, inputValue);

        if(!result % 1 !== 0 && result.length > 15) {
            
        }
        calculator.displayValue = `${parseFloat(result.toFixed(7))}`;
        calculator.firstOperand = result;
        console.log(result);
    }

    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
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

function resetCalculator() {
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
}

function deleteLast() {
    const {displayValue} = calculator;
    const newValue = displayValue.toString().split('').slice(0, -1).join('');
    calculator.displayValue = newValue;
}

const buttons = document.querySelector('.buttons');

buttons.addEventListener('click', (event) => {
    const {target} = event;
    const {value} = target;

    if(!target.matches('button')) {
        return;
    }

    switch (value) {
        case '+':
        case '-':
        case '×':
        case '÷':
        case '=':
            operationHandler(value);
            break;
        case '.':
            inputDecimal(value);
            break;
        case 'C':
            resetCalculator();
            break;
        case '→':
            deleteLast();
        default: 
            if(Number.isInteger(parseFloat(value))) {
                inputDigit(value);
            }
    }
    updateDisplay();
 });


const numberButtons = document.querySelectorAll('.numberBtn');
const allButtons = document.querySelectorAll('button');
const operationButtons = document.querySelectorAll('.operationBtn');


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

const buttons = document.querySelector('.buttons');

buttons.addEventListener('click', (event) => {
    const {target} = event;
    if(!target.matches('button')) {
        return;
    }
    if(target.classList.contains('operationBtn')) {
        console.log('operator', target.value);
        return;
    }
    if(target.classList.contains('decimalBtn')) {
        console.log('decimal', target.value);
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
    console.log('digit', target.value);
 })


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
            return null;    
    }
}


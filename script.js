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
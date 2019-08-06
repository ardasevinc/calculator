function add(a, b) {
    return fixDecimals(a+b);
}


function substract(a, b) {
    return fixDecimals(a-b);
}


function multiply(a, b) {
    return fixDecimals(a*b);
} 


function divide(a, b) {
    if (b === 0) {
        console.warn('THIS IS A VERY SERIOUS WARNING!');
        return "OH MY GOD STOP";
    }
    else return fixDecimals(a / b);
}


function fixDecimals(num) {
    return parseFloat(num.toPrecision(12));
}


function power(num, n) {
    return num ** n;
}


function squareRoot(num) {
    let result = Math.sqrt(num);
    if (result === NaN) return "Here, have an error";
    else return result;
}


function operate(operator, operand1, operand2) {
    if (typeof(operand1) !== 'number' || typeof(operand2) !== 'number') {
        return -1;
    }
    else if (typeof(operator) !== 'string') return -1;
    else {
        switch (operator) {
            let result = 0;
            case 'add':
                result = add(operand1, operand2);
                break;
            case 'substract':
                result = substract(operand1, operand2);
                break;
            case 'divide':
                result = divide(operand1, operand2);
                break;
            case 'multiply':
                result = multiply(operand1, operand2);
                break;
            case 'power':
                result = power(operand1, operand2);
                break;
            case 'squareRoot':
                result = squareRoot(operand1);
                break;
        }
    }
}

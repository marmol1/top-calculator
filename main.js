function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2;
}

let $display = document.querySelector('.display');

let firstNumber = '';
let secondNumber = '';
let operator = '';
let displayValue = '';
let result = '';
function operate(operator,num1,num2) {
    if(operator === '+'){
        return add(num1,num2);
    }else if(operator === '-') {
        return subtract(num1,num2);
    }else if(operator === 'x') {
        return multiply(num1,num2);
    }else {
        return divide(num1,num2);
    }
}


const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        
        if(button.classList.value === 'clear') {
            firstNumber = '';
            secondNumber = '';
            display.innerHTML = '';
            operator = '';
            result = '';
        }
        if(result !== '') {
            return;
        }
        if(button.classList.value === 'equal') {
            if(firstNumber.innerHTML !== '' && display.innerHTML !== '') {
                secondNumber = Number(display.innerHTML);
                result = operate(operator, firstNumber,secondNumber)
                display.innerHTML = result;
            } else {
                return;
            }
        }
        
        
        if(button.classList.value === 'number'){
            if(button.innerHTML === '.' && display.innerHTML.includes('.')) {
                return;
            }
            
            if(display.innerHTML === '') {
                display.innerHTML = button.innerHTML;
            } else {
                display.innerHTML += button.innerHTML;
            }
        }

        if(button.classList.value === 'operator') {
            if(operator === '') {
                operator = button.innerHTML;
                if(display.innerHTML !== '') {
                    firstNumber = Number(display.innerHTML);
                    display.innerHTML = '';
                }
            } else {
                return;
            }
        }
        
        
        
    })
})
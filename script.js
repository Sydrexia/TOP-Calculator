const one = document.querySelector('#one');
one.addEventListener('click', () => {
    firstNumber.push(01);
})

const two = document.querySelector('#two');
two.addEventListener('click', () => {
    firstNumber.push(2);
})

const three = document.querySelector('#three');

const plus = document.querySelector('#plus');

const four = document.querySelector('#four');

const five = document.querySelector('#five');

const six = document.querySelector('#six');

const minus = document.querySelector('#minus');

const seven = document.querySelector('#seven');

const eight = document.querySelector('#eight');

const nine = document.querySelector('#nine');

const divide = document.querySelector('#divide');

const zero = document.querySelector('#zero');

const clear = document.querySelector('#clear');

const equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
    console.log(firstNumber.join(''))
})

const multiply = document.querySelector('#multiply');

let firstNumber = [];
// DOM
const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator_keys');
const display = calculator.querySelector('.calculator_display');
const display_memory = document.querySelector('.calculator_display_memory');
//Declaring variables

let storage = [];
let operator = [];

// The 'calculate' function

const calculate = (n1, operator, n2) => {
    let result = ''
    if (operator === 'add') {
      result = parseFloat(n1) + parseFloat(n2)
    } else if (operator === 'subtract') {
      result = parseFloat(n1) - parseFloat(n2)
    } else if (operator === 'multiply') {
      result = parseFloat(n1) * parseFloat(n2)
    } else if (operator === 'divide') {
      result = parseFloat(n1) / parseFloat(n2)
    }
    return result
  }

  // Adding event listeners. This programs works by identifying the keys clicked and taking appropriate action.

keys.addEventListener('click', e => {
 if (e.target.matches('button')) {
   // Do something
   const key = e.target;
const action = key.dataset.action;

// In the beginning 0 is replaced by the textContent/innerHTML/innerText of the clicked key.

if ((parseInt(display.textContent) === 0) && !action && (display.textContent.includes(".") === false) ) 
{  display.textContent = key.textContent;
  }

  // if the display is not 0 then the keypresses are appended to it.

  else if (!action && display.textContent !== 0){
    display.textContent += key.textContent;
  }
  else if (action === 'clear'){
    display.textContent = '0';
  storage = [];
  display_memory.innerHTML = '';
}
else if (action && action !== 'calculate' && action !== 'decimal' && display.textContent !== '0' ){
    storage.push(display.textContent);
    display.textContent = '0';
    // Populating the 'memory' section of the dispaly
    display_memory.innerHTML = storage[0];
operator.push(action);
// Populating the 'memory' section of the dispaly

if (action === "add"){

display_memory.innerHTML += ' ' + '&plus;';
}
else if (action === "multiply"){
  display_memory.innerHTML += ' ' + '&times;';
}
else if (action === "subtract"){
    display_memory.innerHTML += ' ' + '&minus;';
}
else if (action === "divide"){
      display_memory.innerHTML += ' ' + '&divide;';
} 

}
 // Only if no decimal is present in the display will this execute.

else if (action === 'decimal' && (display.textContent.includes(".") === false)){
    display.textContent += '.'
  }
  
    else if (action === 'calculate') {
    const secondValue = display.textContent;
    
     display.textContent = calculate(storage[0], operator[operator.length-1], secondValue);
     storage = [];
     display_memory.innerHTML = ' ';
    
 
 }
}
 
});


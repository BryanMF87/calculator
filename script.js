// data selectors connecting HTML elements to our sweet, sweet JavaScript

let previousOperand = document.querySelector('[data-previous-operand]')
let currentOperand = document.querySelector('[data-current-operand]')
let currentOperator
let nextOperator
let havePeriod = false // display automatically does not have '.

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')


// support buttons to clear, delete, and equate numbers

allClearButton.addEventListener('click', () => {
  previousOperand.innerText = ''
  currentOperand.innerText = ''
  currentOperator = ''
  nextOperator = ''
  havePeriod = false
})

deleteButton.addEventListener('click', () => {
  currentOperand.innerText = currentOperand.innerText.substring(0, currentOperand.innerText.length -1)
})

equalsButton.addEventListener('click', () => {
  operate(currentOperator)
  currentOperator = nextOperator
  nextOperator = ''
  console.log(currentOperator)
  console.log(nextOperator)
})


// Click events for the number and operator buttons'

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Only allow one '.' at a time
    if(button.innerText === '.' && !havePeriod) {
      havePeriod = true; // add '.' if '.' doesn't already exist
    }
    else if(button.innerText === '.' && havePeriod) {
      return // do not add '.' if a '.' already exists
    }
    currentOperand.append(button.innerText) // add number values to current number
  })
})

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    havePeriod = false
    // multiple operators before equals button is pushed
    if (currentOperator) { // if COperator isn't empty
      nextOperator = button.innerText // add value to nextOperator
      operate(currentOperator)
      currentOperator = nextOperator
      nextOperator = ''
    }
    // switch operands
    if (previousOperand.innerText === '') { // if prevOp is empty..
      previousOperand.innerText = currentOperand.innerText // take cOp's value
      currentOperand.innerText = '' // currentOp's value empties
      currentOperator = button.innerText // assign value to currentOperator
    }
  })
})

// create a new function that takes 2 numbers and an operator to create a new number based on operator. Store it in previousOperand

function operate(operator) {
  let prevOpValue = parseInt(previousOperand.innerText, 10) // string into numbers
  let currOpValue = parseInt(currentOperand.innerText, 10) // string into numbers
  switch (operator) {
    case '+':
      previousOperand.innerText = prevOpValue + currOpValue
      currentOperand.innerText = ''
      break
    case '-':
      previousOperand.innerText = prevOpValue - currOpValue
      currentOperand.innerText = ''
      break
    case '*':
      previousOperand.innerText = prevOpValue * currOpValue
      currentOperand.innerText = ''
      break
    case '÷':
      previousOperand.innerText = prevOpValue / currOpValue
      currentOperand.innerText = ''
      break
  }  
}

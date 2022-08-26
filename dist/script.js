
let previousOperand = document.querySelector('[data-previous-operand]')
let currentOperand = document.querySelector('[data-current-operand]')
let currentOperator
let nextOperator

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')



allClearButton.addEventListener('click', () => {
  previousOperand.innerText = ''
  currentOperand.innerText = ''
  currentOperator = ''
  nextOperator = ''
})

deleteButton.addEventListener('click', () => {
  currentOperand.innerText = currentOperand.innerText.substring(0, currentOperand.innerText.length -1)
})

equalsButton.addEventListener('click', () => {
  operate(currentOperator)
  currentOperator = nextOperator
  nextOperator = ''
})

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    currentOperand.append(button.innerText)

  })
})

operationButtons.forEach(button => {
  button.addEventListener('click', () => {

    if (currentOperator) {
      nextOperator = button.innerText 
      operate(currentOperator)
      currentOperator = nextOperator
      nextOperator = ''
    }
  
    if (previousOperand.innerText === '') { 
      previousOperand.innerText = currentOperand.innerText 
      currentOperand.innerText = ''
      currentOperator = button.innerText 
    }
  })
})

function operate(operator) {
  let prevOpValue = parseInt(previousOperand.innerText, 10)
  let currOpValue = parseInt(currentOperand.innerText, 10)
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

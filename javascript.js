const add = function() {
    return arguments[0] + arguments[1]
  };
  
  const subtract = function() {
      return arguments[0] - arguments[1]
  };
  
  const sum = function() {
    const args = arguments[0];
    const sum = args.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    return sum
  
  }
  const multiply = function() {
    let multiple = 1;
    const args = arguments[0];
    for (let num of args) {
      multiple = multiple * num;
    }
    return multiple
  };
  
  const power = function(a, b) {
      return Math.pow(a, b)
  };
  
  const factorial = function(num) {
    let answer = 1;
      for (let i = num; i > 0; i--) {
      answer = answer * i;
    }
    return answer
  };


function input() {
  let box = document.querySelector('#userInput');
  if (this.textContent == 'Delete') return remove()
  if (this.textContent == 'Clear') return box.value = null;
  if (this.textContent == '=') return box.value += '=' + submit();
  if (/=/.test(box.value)) {
    box.value = null;
  }
  box.value += this.textContent;
  return
}

function submit() {
  let box = document.querySelector('#userInput').value.replace(/ /g, '').split(/([\(\)\+\-\*\/])/g).filter(item => item !== '');
  for (let i = 0; i < box.length - 1; i++) {
    let currentElement = box[i];
    let nextElement = box[i + 1];
    if (
      (currentElement === "+" || currentElement === "-" || currentElement === "*" || currentElement === "/") &&
    (nextElement === "+" || nextElement === "-" || nextElement === "*" || nextElement === "/")
    ) {
      return 'ERROR'
    }
  }
  return compute(box);
}

function remove() {
  let box = document.querySelector('#userInput');
  box.value =box.value.slice(0, -1);
}

function compute(expression) {
  let box = document.querySelector('#userInput').value.replace(/ /g, '').split(/([\(\)\+\-\*\/])/g).filter(item => item !== '');
  for (let i = 0; i < expression.length; i++) {
    if (expression[i] === '(') {
      findParenthesis(expression, i);

    }
  }
  for (let i = 0; i < expression.length; i++) {
    if (/[/*]/.test(expression[i])) {
      let operator = expression[i];
      let result = eval(`${expression[i-1]} ${operator} ${expression[i+1]}`);
      expression.splice(i-1, 3, result);
      i = i - 3;
    }
  }
  for (let i = 0; i < expression.length; i++) {
    if (expression[i] === '-' || expression[i] === '+') {
      console.log(expression[i-1]);
      console.log(expression[i+1]);
      let operator = expression[i];
      let result = eval(`${expression[i-1]} ${operator} ${expression[i+1]}`);
      expression.splice(i-1, 3, result);
      console.log(expression);
      i = i - 3;
    }
  }
  return expression

}

function findParenthesis(expression, number) {
  let newExpression = [];
  let j = number + 1;
  let k = 0;
  while (expression[j] !== ')') {
    if (expression[j] === '(') {
      findParenthesis(expression, j)
    }
    newExpression.push(expression[j]);
    j++;
    k++;
    }
  newExpression = compute(newExpression);
  expression.splice(number, k+2, ...newExpression);
  return newExpression
}


const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', input));

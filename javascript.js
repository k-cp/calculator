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

function submit() {
    userInput = document.getElementById('userInput').value.replace(/ /g, '');
    return userInput
}

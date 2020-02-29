// Get the Button and add click Event
document.getElementById('btn').addEventListener('click', calculate);


function calculate(){

  // Input Numbers
  let num1 =parseInt(document.getElementById('num1').value);
  let num2 =parseInt(document.getElementById('num2').value);

  // Add
  var add = document.getElementById('oper');

  // Substract
  var substract = document.getElementById('oper');

  // Multiply
  var multipication = document.getElementById('oper');

  // Divide
  var divide = document.getElementById('oper');
  
  
  if(add.value === 'Add'){
    document.getElementById('output').innerHTML = (num1) + (num2);
  }else if (substract.value === 'Sub'){
    document.getElementById('output').innerHTML = (num1) - (num2);
  }else if(multipication.value === 'Mul'){
    document.getElementById('output').innerHTML = (num1) * (num2);
  }else if(divide.value === 'Div'){
    document.getElementById('output').innerHTML = (num1) / (num2);
  }
}
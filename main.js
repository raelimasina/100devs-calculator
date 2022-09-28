//create an empty array
let inputs = [];
//store values from clicked elements in the array
let numbers = document.querySelectorAll('.k');

numbers.forEach(number=>{
  number.addEventListener('click', addToArray());
    function addToArray(){
      inputs.push(number.innerText);
    };
  })

document.querySelector('#visual').innerText = inputs;

const result = document.getElementById('result');
function multiply(){
    let firstNumber = document.getElementById('1stNumber').value;
let secondNumber = document.getElementById('2ndNumber').value;
     let answer = firstNumber*secondNumber;
     console.log(answer, firstNumber, secondNumber)
     result.innerHTML=`<p>The Result is :</p><br>${answer}`;
}

function divide(){
    let firstNumber = document.getElementById('1stNumber').value;
let secondNumber = document.getElementById('2ndNumber').value;
    let answer = firstNumber/secondNumber;
     result.innerHTML=`<p>The Result is :</p><br>${answer}`;
}
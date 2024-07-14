let number = Math.round(Math.random()*10);
function generateNumber(number){
    if(number==0){
        number = 1;
    }else{
        number = number;
    }
}
generateNumber();

function matchValue(){
    let inputValue = document.getElementById('input').value;
    if(inputValue==number){
        alert('Good Work');
    }else{
        alert('Not Matched');
    }
}
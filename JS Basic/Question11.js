const demo = document.getElementById('demo');

function ftoc(){
    let value = document.getElementById('value').value;
    console.log(value)
    demo.innerHTML = `<p>${(value - 32) / 1.8} celcius</p>`
}

function ctof(){
    let value = document.getElementById('value').value;
    demo.innerHTML = `<p>${(value * 1.8) + 32} farenheit</p>`
}
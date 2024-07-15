function isNull(value)
{
    return value == null;
}

let a = null;
let b = 3;

console.log(isNull(a));  //true   
console.log(isNull(b)) //false
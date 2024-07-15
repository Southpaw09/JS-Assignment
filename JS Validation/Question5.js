function isNumber(value)
{
    return typeof value == "number";
}

console.log(isNumber(77));//true
console.log(isNumber('abc'));//false
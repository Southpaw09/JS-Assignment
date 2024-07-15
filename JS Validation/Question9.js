function isChar(value)
{
    return typeof value == "string";
}

console.log(isChar("A"));//true
console.log(isChar(22));//false
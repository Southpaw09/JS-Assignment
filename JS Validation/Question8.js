function isRegExp(value) {
    return value instanceof RegExp;
}

console.log(isRegExp(23));   //false
console.log(isRegExp(new RegExp('test')));//true
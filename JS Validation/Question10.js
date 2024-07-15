function areSameType(value1, value2) {
    return typeof value1 === typeof value2;
}


console.log(areSameType(5, 10));        // true
console.log(areSameType('hello', 'world')); // true
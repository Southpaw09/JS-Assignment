function isObject(value)
{
    return typeof value == 'object' && value !== null;
}

const a ={};
const b =null;
console.log(isObject(a));//true
console.log(isObject(b));//false
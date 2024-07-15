function isError(input)
{
    return input instanceof Error;
}

try {
    throw new Error("This is an error message");
} catch (err) {
    console.log(isError(err)); 
}

console.log(isError(Error)); 
console.log(isError(123));  
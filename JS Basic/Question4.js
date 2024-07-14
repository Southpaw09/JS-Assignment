const findArea = (a,b,c) => {
    let s = (a+b+c)/2;
    let area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    return area;
}

console.log(findArea(5,6,7))
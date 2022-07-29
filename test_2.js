const usdCurr = 35;
const disc = 0.9;

function convert(amount, curr) {
    return amount * curr;
}

function promotion (result) {
    console.log(result * disc);
}


const res = convert(1000, usdCurr);

promotion(res);

function test(){}

console.log(test() === undefined);


function sayHello(name){
    return `Hello, ${name}!`;
}

let a = sayHello('Bohdan');

console.log(a);

function returnNeighboringNumbers(number) {
    return [number - 1, number, number + 1];
}


console.log(returnNeighboringNumbers(10));

function getMathResult(base, times) {
    if(typeof(times) !== 'number' || times <=0){
        return base;
    }
    let str ='';

    for(let i = 1; i <= times; i++){
        if (i === times) {
            str += `${base*i}`;
        }else{
            str += `${base*i}---`;
        }
    }
    return str;
}   

console.log(getMathResult(3, 55));


let str = "i love peach";
let arr = [1, 2, 5, 7];


console.log(str.substr(7, 5));

const num = '14.4pxdsfsdf';

console.log(parseFloat(num));



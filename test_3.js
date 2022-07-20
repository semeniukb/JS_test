
function pow(x, n) {
    if (n >= 1) {
       return x**n; 
    }
}


let x = prompt('Enter number please');
let n = prompt('Enter power');

let res = pow(x, n);
alert(res);

let str = "football";



console.log(str.slice(-5, -2));
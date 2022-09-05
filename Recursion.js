function pow(x, n) {
    if (n === 1) {
        return x;
    }
    return x * pow(x, n - 1);
}


console.log(pow(2, 3)); // 8


function sumToRec (x) {
    if (x === 1) {
        return x;
    }
    return x + sumToRec(x-1);
}

console.log(sumToRec(10));

function sumToFor (x) {
    
    let res = x;
    for (let i = 1; i < x; i++) {
        res += x - i;
        // console.log(res);
    }
    return res;
   
}

console.log(sumToFor(10));

function factorial(n) {  debugger;
    if (typeof(n) !== 'number' || n % 1 !== 0) {
        return 'something';
    }
    if (n === 0 || n < 0) {
        return 1;
    }
    if (n === 1) {
        return n;
    }
    return n * factorial(n - 1); debugger;
}

console.log(factorial(7));




let company = {
    sales: [{
      name: 'John',
      salary: 1000
    }, {
      name: 'Alice',
      salary: 600
    }],
  
    development: {
      sites: [{
        name: 'Peter',
        salary: 2000
      }, {
        name: 'Alex',
        salary: 1800
      }],
  
      internals: [{
        name: 'Jack',
        salary: 1300
      }]
    }
  };


function getSalary (data) {
  if (Array.isArray(data)) {
    let salary = 0;
    for (let i = 0; i < data.length; i++) {
        salary += data[i].salary;
    }
    return salary;
  } else {
    let sum = 0;
    for ( let price of Object.values(data)) {
        sum += getSalary(price);
    }
    return sum;
  }
}

console.log(getSalary(company));


//Fibonachi

function fib(n) {
    const arr = [0, 1];
    if (n === 0) {
        return arr[0];
    }
    if (n === 1) {
        return arr[1];
    }
    for (let i = 2; i <= n; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }
    return arr[n];

}

console.log(fib(2));


function fiboR(n) {
    if(n <= 1) {
        return n;
    }

    return fiboR(n - 1) + fiboR (n - 2);
}

console.log(fiboR(30));
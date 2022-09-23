function isIsogram(str){
    let arr = str.toLowerCase().split('');
    let newArr = []

      arr.forEach(item => {
        if(!newArr.includes(item)) {
            newArr.push(item)
        } 
    });
    return arr.every((elem, i) => elem === newArr[i] ? true : false)

  }

  console.log(isIsogram('aba')) // false

  console.log(isIsogram('moOse')) // true

  function sett(str) {
    return new Set(str.toLowerCase()).size
  }

  console.log(sett('moOse'))


//   function countBy(x, n) {
//     let z = [];
//     let num = x
//     for(let i = 0; i < n; i++) {
//         z.push(num)
//         num += x
//     }
  
//     return z
//   }


  function countBy(x, n) {
    let z = [];
    let num = x;

    if(n === 1) {
        return x
    } else {

       return z.push(num += countBy(x, n - 1))
  
    }

    return z
  }

console.log(countBy(1,10)) //=== [1,2,3,4,5,6,7,8,9,10]
console.log(countBy(2,5)) //=== [2,4,6,8,10]
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



function getCount(str) {
  // const vowels = 'aeiou'
  // let count = 0
  // str.split('').forEach(item => vowels.includes(item) ? count++ : null)
  
  return str.split('').filter(item => 'aeiou'.includes(item)).length
  
  // return count;
}

console.log(getCount('abracadabra')) // 5


function isTriangle(a,b,c){
  if (a < 0 || b < 0 || c < 0) {
    return false
  }
  const p = (a + b + c) / 2

  return p*(p - a)*(p - b)*(p - c) > 0
}

console.log(isTriangle(4, -2, 4))

function bmi(weight, height) {
  const bmi = weight / (height * height)

  switch (true) {
    case (bmi <= 18.5):
      return "Underweight"

    case (bmi <= 25.0):
      return "Normal"

    case (bmi <= 30.0):
      return "Overweight"

    case (bmi > 30.0):
      return "Obese"

  }
}


console.log(bmi(80, 1.80))

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"


function sumMix(x){
  return x.reduce((acc, curr) => acc + +curr)
}

console.log(sumMix([9, 3, '7', '3'])) // 22


function points(games) {
  // your code here
  // const n = games.map(item => (item.split(':')))

  

  return games.map(item => item[0] > item[2] ? 3 : item[0] < item[2] ? 0 : 1).reduce((acc, curr) => acc + curr)
}


console.log(points(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3'])) // 30

// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point
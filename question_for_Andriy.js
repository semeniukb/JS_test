const hamburger = 3;
const fries = 1;
const cola = 1;

console.log(hamburger === 3 && cola && fries); 
// виведе в консоль 1, але якщо 


const hamburgers = 3;
const frieses = 15;
const colas = 1;

console.log(hamburgers === 3 && colas && frieses === 15); 
// Коли значення більше ніж 1 (наприклад на frieses = 15) воно повертає true а не число, Чому?


// Щоб повернуло 15 треба прописати так:

console.log(hamburgers === 3 && colas && frieses); 

//
console.log(25 || null && !3); // null - not right Поверне 25, чому?? && - має більший пріоритет



for (let l = 0; l <= 11; l++ ) {
    if (l % 2 == 0){
        continue;
    } 
    console.log(l); // якщо винести за внутрішній цикл отримууємо інщі значення
    
    
} // як працює continue


let num;

do {
  num = prompt("Введите число больше 100?", 0);
} while (num <= 100 && num); // друга перевірка з &&? як працюэ?



// Переписати код з for на while

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask() {
  let i = 2;

  while (i <= 16) {
      if (i % 2 === 0) {     // чому два рази i++
          i++; // 
          continue;
      } else {
          console.log(i);
      }
      i++;
  }
}
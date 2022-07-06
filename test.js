

if (1) {
    console.log('Okay');
} else {
    console.log('Error!');
}

const num = 55;

// (num == 56) ? console.log("Good") : console.log("baaad");

// switch (num) {
//     case 53:
//         console.log("noupe");
//         break;
//     case 47:
//         console.log("too low");
//         break;
//     case 56:
//         console.log("too big");
//         break;
//     case 55:
//         console.log("Yeah? all right");
//         break;
//     default:
//         console.log('not this time')
//         break;
// }

const hamburger = 3,
fries = 1,
cola = 2;

console.log(hamburger === 2 && cola  && fries);

console.log(1 && 5)

if (hamburger === 3 && fries) {
    console.log("You have a good dinner")
} else {
    console.log('We are go away!')
}


const arr = [];

arr[0] = "Bohdan";
arr[1] = 'Julia';

// delete arr[0];
console.log(arr);
arr[0] = 'car';
console.log(arr);


const numm = Number('25');

console.log(typeof(numm));

console.log(Number('    435z     '));

const namee = String(undefined);
console.log(typeof namee);


let sir = 3 + 4 + '1 ' + "3" + 4;
console.log(sir);


const humburger = 3;
const frieses = 15;
const colas = 1;

console.log(humburger === 3 && colas && frieses === 15);

console.log(1 && 5);



console.log(NaN || 2 || undefined); // 2

console.log(NaN && 2 && undefined); // NaN

console.log(1 && 2 && 3); // 3

console.log(!1 && 2 && 3); // false

console.log(25 || null && !3); // null - not right

console.log(NaN || null || !3 || undefined || 5); // 5

console.log(5 === 5 && 3 > 1 || 5); // true

let uber = 57;

// for (let i = 5; i<10; i++) {
//     if (i === 7) {
//         continue;
//     }
//     console.log(i);
// }


let result = '';
let lenght = 7;

for (i = 1; i < lenght; i++){
    for ( j = 0; j < i; j++){
        result += '*';
    }
    result += '\n';
}

console.log(result);
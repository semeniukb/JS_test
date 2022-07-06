
let browser = 'Safari';

if (browser === "Edge") {
    console.log('You have got the Edge' );
} else if (browser === 'Chrome' 
|| browser === 'Chrome'
|| browser === 'Safari'
|| browser === 'Opera' ) {
    console.log( 'Okay, we suport these browser too' );
} else {
    console.log( 'We hope that this page looks ok!' );
}

const number = 4;

switch(number) {
    case 0:
        console.log('Вы ввели число 0');
        break;
    case 1:
        console.log('Вы ввели число 1');
        break;
    case 2:
    case 3:
        console.log('Вы ввели число 2, а может и 3');
        break;
        
}

let ans = prompt('Какое "официальное" название JavaScript?');


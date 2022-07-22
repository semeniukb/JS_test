
function calculateVolumeAndArea (lenghtCube) {

    if (typeof(lenghtCube) === 'string' || lenghtCube <= 0 || lenghtCube % 1 != 0) {
        console.log('Its an error');
    } else {
        let area = 6 * (lenghtCube * lenghtCube);
        let volume = lenghtCube * lenghtCube * lenghtCube;
        console.log(`Volume of Cube: ${volume}, the areas of Cube: ${area}`);
    }
}

calculateVolumeAndArea(15);




function getCoupeNumber(place) {
    if (typeof(place) !== 'number' || place < 0 || !Number.isInteger(place)) {
        console.log ("Ошибка. Проверьте правильность введеного номера места");
    } else if (place == 0 || place > 36) {
        console.log("Таких мест в вагоне не существует");
    } else {
        let coupe = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16],
            [17, 18, 19, 20],
            [21, 22, 23, 23],
            [25, 26, 27, 27],
            [29, 30, 31, 32],
            [33, 34, 35, 36]
        ];
        for (let i = 1; i < 10; i++) {
            for (let l = 1; l < 37; l++){
                if (coupe[i - 1][l - 1] == place) {
                    console.log(i); 
                }  
            }
        }
    }
}
getCoupeNumber(10);




let num = 5;

let res = Math.ceil(num/4);
console.log(res);



function getTimeFromMinutes (minutes) {
    if (typeof(minutes) !== 'number' || minutes < 0 || !Number.isInteger(minutes)) {
        console.log('Its error, check the data');
    } else {
        let hours = Math.floor(minutes / 60);
        let minute = minutes - (hours * 60);
        if (hours == 0 || hours >= 5 && hours <= 10) {
            console.log(`Это ${hours} часов и ${minute} минут`);
        } else if (hours > 1 && hours < 5) {
            console.log(`Это ${hours} часа и ${minute} минут`);
        } else {
            console.log(`Это ${hours} час и ${minute} минут`);
        } 
    }
}

getTimeFromMinutes(539);

function findMaxNumber(a, b, c, d) {
    if (typeof(a && b && c && d) !== 'number' || arguments.length < 4) {
        return 0;
    } else {
        if (a > b && a > c && a > d) {
           return a;
        } else if(b > a && b > c && b > d) {
            return b;
        } else if (c > a && c > b && c > d) {
           return c;
        } else if (d > b && d > c && d > a) {
            return d;
        }

    }
}

findMaxNumber(2, 4.1, 4, 4.11);

function findMaxNumbers(a, b, c, d) {
    if (typeof(a && b && c && d) !== 'number' || arguments.length < 4) {
        console.log('0');
    } else {

        let res = (Math.max(a, b, c, d));
        console.log(res);

    }
}
findMaxNumbers(1, 10, 5, 10.1);


let arr = [1, 2, 3, 4];

console.log(Math.max(...arr));

let b = 110 % 60;

console.log(b);

function fibo(num) {
    let str = '';
    for (let i = 0; i < num; i++) {
        
        str += `${i + (str.length - 1)} `;
        
    }
    console.log(str);
    
}

fibo(4);


let n = ['0 ', 1, 2, 3];

console.log(String(n));

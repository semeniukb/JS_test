const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    if (arr.length == 0) {
        return 'Семья пуста';
    } else {
       let str ='Семья состоит из: ';
       arr.forEach(function(item){
        str += `${item} `;
       });
       return str;
    }
}

console.log(showFamily(family));


const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];


function standardizeStrings(arr) {

    arr.forEach(function(item, i, arr){
        console.log(item.toLowerCase());
    });



}

standardizeStrings(favoriteCities);


const someString = 'This is some strange string';

function reverse (string) {
    if (typeof(string) !== 'string') {
        return 'Ошибка!';
    } else {
    let arr = [...string];
    let rev = arr.reverse();
    let str = rev.join('');
    return str;
    }
}

console.log(reverse(someString));


const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
const allCurrencies = [...baseCurrencies, ...additionalCurrencies];


function availableCurr(arr, missingCurr) {
    if (arr.length === 0) {
        return 'Нет доступных валют';
    } else {
        let result = 'Доступные валюты: \n';
        for(let key of arr) {
            if (key == missingCurr) {
                arr.splice(arr[key], 3);
                console.log(key);
            }

            result += `${key}\n`;
        }

        console.log(result);
    }
}

availableCurr(allCurrencies, 'USD');



let arr = ["Я", "изучаю", "JavaScript"];

arr.splice(1, 1);

console.log(arr);
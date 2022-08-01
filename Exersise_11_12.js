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
    let arr = [...string].reverse().join('');
    // let rev = arr.reverse();
    // let str = rev.join('');
    return arr;
    }
}

console.log(reverse(someString));


const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
const allCurrencies = [...baseCurrencies, ...additionalCurrencies];


function availableCurr(arr, missingCurr) {
    if (arr.length === 0) {
        return 'Нет доступных валют';
    }
    let result = 'Доступные валюты: \n';
       
    for (let i = 0; i < arr.length; i++) {
       if (arr[i] == missingCurr) {
        arr.splice(i, 1);          
    }  
        if (arr[i] !== undefined) {
            result += `${arr[i]}\n`;
        }
    }
        return result;
  
}


console.log(availableCurr(allCurrencies, 'USD'));


let string = 'I love you';

function rev(str) {
    let revStr = '';
    for(let i = str.length - 1; i >= 0; i--) {
        revStr += `${str[i]}`;
    }
    return revStr;
}

console.log(rev(string));
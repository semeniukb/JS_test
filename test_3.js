let str = '    fsofos   ';
console.log(str.trim());


const arr = [1, 2, 3, 4, 6];

arr.forEach(function(item, i, a) {
    console.log(`${i}: ${item} in the inner of array ${a}`);
});

let strr = 'fff, fsf, eer,';

let product = strr.split(', ');

console.log(product);


const array= [1, 2, 3, 4, 6];

array.push(55);
console.log(array);

array.pop();
console.log(array.length);

const work = 'i wor. in, Fa. rmak';

let mass = work.split('.');
console.log(mass.join(','));

const num = [10, 3, 25, 155, 1, 9, 336];

const strong = ['taras' ,'stepan', 'andriy', 'bohdan', 'olena'];
function compareName(a, b) {
    return a - b;
}

num.sort();

console.log(num);


const numbers = {
    a: 1,
    b: 2,
    c: {
        x: 4
    }
};


function copyNumbers(num) {
    let obj = {};
    for (let key in num) {
        obj[key] = num[key];
    }
    num.c.x = 5;
    console.log(num);
    return obj;
    
}

console.log(copyNumbers(numbers));


const add = {
    y: 9,
    z: 8
};

const newNumbers = Object.assign({}, numbers);

newNumbers.b = 4;

newNumbers.c.x = 11;
console.log(newNumbers);
console.log(numbers);

const oldArray = ['a', 'b', 'c',];
const newArray = oldArray.slice();

newArray[1] = 10;
console.log(oldArray);
console.log(newArray);

const video = ['youtube', 'vimeo'],
        blogs = ['wordpress', 'bloggers'],
        internet = [...video, ...blogs, 'vk', 'facebook'];

        console.log(internet);


const  soldier = {
    health: 1000,
    armor: 5,
    bracers: "Knife",
    sayBeforeKill: function () {
        console.log('I will be your happiness');
    }
};

const tara = Object.create(soldier);

tara.name = 'Taras';
tara.health = 5000;

console.log(tara.bracers);
tara.sayBeforeKill();

console.log(Object.keys(soldier)[0]);


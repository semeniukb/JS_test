// "use strict";

function showThis() {
    console.log(this);
}

showThis();


const obj = {
    a: 25,
    b: 14,
    sum: function() {
        console.log(this);
    }
};

obj.sum();


function sayName(surname, age) {
    console.log(this);
    console.log(this.name + surname + age);
}

const user = {
    name: "John"
};

sayName.call(user, 'Stepan', 27);

sayName.apply(user, ['Smith'], [14])



function count (num) {
    return this*num;
}

const tripple = count.bind(3);

console.log(tripple(7))
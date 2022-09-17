const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms(arr) {
    return arr.filter(film => film.rating >= 8);
}

showGoodFilms(films);


function showListOfFilms(arr) {
    // let a = [];
    // arr.forEach(film => {
    //     a.push(film.name);
    // });
    // return a.join(', ');
    let str = '';
    str = arr.reduce((acc, current, i, a) => {
        if (i === a.length - 1) {
            acc += current.name
        } else {
            acc += `${current.name}, `
        }
        
        
        return acc
    }, '')
    return str
}

showListOfFilms(films);


function setFilmsIds(arr) {
 return arr.map((item, index) => {
    item.id = index;
    return item
 })
}

setFilmsIds(films);

let transformedArray = setFilmsIds(films);

function checkFilms(array) {
    let ar = array.filter(item => {
        if(item.id) {
            return item
        } 
        if(item.id === 0) {
            return item
        }
    })

    return ar.length === array.length
}

console.log(checkFilms(transformedArray));
/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');   
        }
        return personalMovieDB.count;
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
        
            if (a != '' && b != '' && a != null && b != null && a.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                console.log('error');
                i--;
            }
        }
        return personalMovieDB.movies;
    },
    detectPersonalLevel: function (){
        if (personalMovieDB.count < 10) {
            alert('Too low wathing film');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert('Your are classic viewer');
        } else if (personalMovieDB.count > 30) {
            alert('You are movieman');
        } else {
            alert('Its error');
        }
    },
    showMyDB: function () {
        if (personalMovieDB.privat == false) {
            return personalMovieDB;
        }
    },
    writeYourGenres: function () {
        for (let i = 0; i < 3; i++) {
            let c = prompt(`Ваш любимый жанр под номером ${i + 1}`);
    
            if (c == '' || c == null) {
                console.log('error');
                i--;
            } else {
                personalMovieDB.genres[i] = c;
            }  
        }
        personalMovieDB.genres.forEach (function(item, i){
            console.log(`Lovely genres #${i + 1} - ${item}`);
        });

        return personalMovieDB;
        
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = !personalMovieDB.privat;
        } else {
            personalMovieDB.privat = !personalMovieDB.privat;
        }
        return personalMovieDB.privat;
    }


};

// console.log(personalMovieDB.toggleVisibleMyDB());
// console.log(personalMovieDB.showMyDB());


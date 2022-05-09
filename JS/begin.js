// alert("Hello!!!")
// const message = prompt("hi old you?","");
// console.log(message);
// let quest = confirm("Are you here?")
// const arrows = [];
// arrows[0] = prompt("как ваше имя", "")
// arrows[1] = prompt("как ваше фамилия", "")
// arrows[2] = prompt("как ваше жопа", "")
//
// document.write(arrows)
// const user = "lena";
// console.log(`привет ${user}`)
// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
//
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// }
// const lastFilm = prompt("Один из последних просмотренных фильмов?", "");
// const answer = prompt("на сколько оцените его?", "" );
// const lastFilm2 = prompt("Один из последних просмотренных фильмов?", "");
// const answer2 = prompt("на сколько оцените его?", "");
//
// personalMovieDB.movies[lastFilm] = answer;
// personalMovieDB.movies[lastFilm2] = answer2;
//
// console.log(personalMovieDB)
// const newArr = [34, 434, 1]
//
// let num = 50;
// while (num < 55) {
//     console.log(num)
//     num++
//
// }
// do {
// //     console.log(num)
// //     num++
// // } while (num < 55)

// for (let i = 1; i < 8; i++) {
//
//     if (i === 6){
//         continue;
//     }
//     console.log(i)
// }

// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);
//     }
// }
//========================Задача на Елочку=============================
// let result = "";
// const length = 7;
// for (let i = 1; i < length; i++) {
//
//     for (let j = 0; j < i; j++) {
//         result += "*";
//     }
//
//     result += '\n';
// }
//
// console.log(result);
//======================================================================

// for (let i = 5; i <= 10; i++) {
//     console.log(i)
// }

// for (let i = 20; i >=10 ; i--) {
//     if (i === 13){
//         break;
//     }
//     console.log(i);
// }

// for (let i = 2; i < 11; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// let num = 2;
// while (num < 16) {
//     num++
//     if (num % 2 === 0) {
//         continue;
//     } else {
//         console.log(num)
//     }
// }
// const arrayOfNumbers = [];
// for (let i = 5; i <= 10; i++) {
//     arrayOfNumbers[i - 5] = i;
// }
// console.log(arrayOfNumbers);

let num = "";
const yellow = 7

for (let i = 1; i < yellow; i++) {

    for (let j = 0; j < i; j++) {
        num += "*";
    }
    num += "\n";
}
console.log(num);
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
// //
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// }
// const lastFilm = prompt("Один из последних просмотренных фильмов?", "");
// const answer = prompt("на сколько оцените его?", "");
// const lastFilm2 = prompt("Один из последних просмотренных фильмов?", "");
// const answer2 = prompt("на сколько оцените его?", "");
//========================С циклом While================================
// num = 0;
// while (num < 2) {
//     const lastFilm = prompt("Один из последних просмотренных фильмов?", "");
//     const answer = prompt("на сколько оцените его?", "");
//     num++;
//     if (lastFilm != null && answer != null && lastFilm != '' && answer != '' && lastFilm.length < 50) {
//         personalMovieDB.movies[lastFilm] = answer;
//     } else {
//         console.log("error!");
//         num--;
//     }
// }
//========================С циклом While================================

// for (let i = 0; i < 2; i++) {
//     const lastFilm = prompt("Один из последних просмотренных фильмов?", "");
//     const answer = prompt("на сколько оцените его?", "");
//
//     if (lastFilm != null && answer != null && lastFilm != '' && answer != '' && lastFilm.length < 50) {
//         personalMovieDB.movies[lastFilm] = answer;
//     } else {
//         console.log("error!");
//         i--;
//     }
// }
// if (personalMovieDB.count <= 10) {
//     console.log("вы посмотрели слишком мало!");
// } else if (personalMovieDB.count < 30) {
//     console.log("вы классический зритель!");
// } else if (personalMovieDB.count > 30) {
//     console.log("вы киноман!");
// } else {
//     console.log("произошла ошибка!");
// }
//
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

// let num = "";
// const yellow = 7
//
// for (let i = 1; i < yellow; i++) {
//
//     for (let j = 0; j < i; j++) {
//         num += "*";
//     }
//     num += "\n";
// }
// console.log(num);


//=======================================функции================================
// function showFirstMessage(text) {
//     console.log(text);
// }
//
// showFirstMessage("Hello function arguments!");

// const arrow = (a, b) => {
//     return a + b;
// }
// console.log(arrow(4,5))
const usdCurr = 28;
const eurCurr = 32;

function convert(amount, curr) {
    console.log(curr * amount);
}

convert(500, usdCurr);
convert(500, eurCurr);

// let number = 5
//
// number = 1000000
// console.log(number)
//
// const number2 = {
//     a: 10
// }
// number2.a = 50
// console.log(number2)
//
// const obj = {
//     name: "alex",
//     age: 30,
//     isMarried: false
// };
//
// obj.isMarried = true
// obj.age = 18
//
//
// console.log(obj)
// const arr = ["arrow.png", 10, {}, [], "Sara", "apple.jpg"];

// alert("Evgen JS PRO")

// // const warning = confirm("Are you here?")
// // console.log(warning)
// const answer = prompt("Your age?", "");
// console.log(answer + 10)

// const answers = [];
// answers[0] = prompt("как ваше имя?", "")
// answers[1] = prompt("как ваше фамилия?", "")
// answers[2] = prompt("сколько вам лет?", "")
// document.write(answers)

// const url = "toys";
// console.log(`https://someurl.com/${url}/baby/5`)
//
// const firstName = "Evgen";
// console.log(`Привет ${firstName}!!!`)
// let incr = 10,
//     decr = 10;
// incr++;
// decr--;
// console.log(decr)
//  const isChecked = false;
//  const isClose = false;
//
//  console.log(isChecked || isClose);

//--------------Домашка1------------------


//
// if (6 === 5) {
//     console.log("Its true")
// } else {
//     console.log("Its false")
// }


// if (num < 3){
//     console.log('False')
// } else if (num < 5) {
//     console.log("неправда")
// } else {
//     console.log("OK!")
// }
//
// (num === 100) ? console.log("Good") : console.log("Bad")

// const num = 10;
// switch (num) {
//     case 40:
//         console.log("Ошибка");
//         break;
//     case 10:
//         console.log("В точку!!!");
//         break;
//     case 13:
//         console.log("Ошибка");
//         break;
//     default:
//         console.log("Не в этот раз!");
//         break;
// }


// while (num <= 55) {
//     console.log(num)
//     num++
// }
// do {
//     console.log(num)
//     num++
// } while (num < 55) {
//     console.log("Hello")
// }

// let num = 50;
//
// let num = 30;
// for (let i = 1; i < 8; i++){
//     num++
//     console.log(num);
// }
// let num = 20;
// for (let i = 1; i < 10; i++) {
//     if (i === 5){
//         continue;
//
//     }
//     console.log(i)
// }
//
// let numberOfFilms;
//
//
// function start() {
//     numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }
//
// start();
//
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
//
//
// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', "");
//         const b = prompt('На сколько оцените его?', "");
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//         } else {
//             i--;
//         }
//     }
// }
//
// rememberMyFilms();
//
//
// function detectedMyLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log("Просмотрено слишком мало фильмов");
//     } else if (personalMovieDB.count <= 10 && personalMovieDB.count < 30) {
//         console.log("Вы любитель фильмов");
//     } else if (personalMovieDB.count > 30) {
//         console.log("КИНОМАН!!!")
//     } else {
//         console.log("ОШИБКА")
//     }
//
// }
//
// detectedMyLevel();
//
// function showMyDB() {
//     if (personalMovieDB.privat === false) {
//         console.log(personalMovieDB)
//     }
// }
//
// showMyDB();
//
// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         const genre = prompt(`Ваш любимый жанр под номером ${i}`)
//         personalMovieDB.genres[i - 1] = genre;
//     }
// }
//
// writeYourGenres()

// function showFirstMessage(text) {
//     console.log(text)
// }
//
// showFirstMessage("Hello react guru");
//
// function calc(a, b) {
//     return (a + b);
//
// }
//
// console.log(calc(4, 5))
// console.log(calc(10, 5))
// console.log(calc(20, 5))
//
//
// const logger = function () {
//     console.log("HELLOLOLOLOL")
// };
// logger()
//
//
// const arrowFunc = (a, b) => {
//     console.log(a - b)
//
// }
// arrowFunc(10, 10)
//
//
// const str = "arrow"
// console.log(str.length)
//
// const logg = "Hello world"
// console.log(logg.slice(6, 11))
//
// const logg2 = "Hello world"
// console.log(logg2.substr(0, 7))

//================Callback==================

// function learnJS(lang, callback) {
//     console.log(`I learm: ${lang}`);
//     callback();
// }
//
// function done() {
//  console.log("A confirm all knowledge");
// }
//
// learnJS("Javascript", done);

// function learnJS(lang, callback) {
//     console.log(`I learn ${lang}`)
//     callback()
// }
//
// function done() {
//     console.log('A big boss JS')
// }
//
// learnJS('JavaScript', done)


const options = {
    name: "Test",
    width: 1024,
    height: 1024,
    colors: {
        border: "black",
        bg: "red"
    },
    makeTest: function () {
        console.log("test")
    }
};
options.makeTest()

console.log(Object.keys(options))

//=================Массивы и псевдомассивы==============================

const arr = [1, 2, 3, 6, 8];
// arr.pop();
// arr.push(10);
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// arr.forEach(function (item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`)
// })

const str = prompt("", "")
const products = str.split(",")
console.log(products)
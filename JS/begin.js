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
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}
const lastFilm = prompt("Один из последних просмотренных фильмов?", "");
const answer = prompt("на сколько оцените его?", "" );
const lastFilm2 = prompt("Один из последних просмотренных фильмов?", "");
const answer2 = prompt("на сколько оцените его?", "");

personalMovieDB.movies[lastFilm] = answer;
personalMovieDB.movies[lastFilm2] = answer2;

console.log(personalMovieDB)
const newArr = [34, 434, 1]
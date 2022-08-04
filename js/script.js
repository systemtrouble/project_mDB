/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Армагедон",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Ёлки - палки",
        "Скотт Пилигрим против..."
    ]
};

const adCont = document.querySelectorAll('.promo__adv img');

adCont.forEach(elem => {
    elem.remove();
})

const genre = document.querySelector('.promo__genre');
genre.textContent = "ДРАМА";

document.querySelector('.promo__bg').style.backgroundImage = `url(./img/bg.jpg)`;

const collator = new Intl.Collator('ru-RU');
movieDB.movies.sort(collator.compare);
const filmList = document.querySelector('.promo__interactive-list');
filmList.innerHTML = '';
for (let key in movieDB.movies) {
    filmList.innerHTML += `<li class="promo__interactive-item">${+key + 1}   ${movieDB.movies[key]}
    <div class="delete"></div></li>`;
}
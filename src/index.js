import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './js/fetchCountries';
import { renderCountryList } from './js/renderCountryList';
import { refs } from './js/refs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const DEBOUNCE_DELAY = 300;

// const input = document.querySelector('#search-box');
// const countryList = document.querySelector('.country-list');
// const countryInfo = document.querySelector('.country-info');

refs.input.addEventListener('input', debounce(onInputFetch, DEBOUNCE_DELAY));

// onInputFetch
function onInputFetch(event) {
  fetchCountries(event.target.value.trim())
    .then(countries => {
      console.log(countries);
      if (countries.length === 1) {
        countries.map(country => {
          renderCountryList(country.name);
          console.log('назва КРаїни', country.name);
        });
      } else if (countries.length <= 10) {
        console.log('якщо більше одноЇ країни ', countries);
      }
    })
    .catch(error => console.log(error));
  // .finally((input.value = ''));
}
// Залишилось
// Інтерфейс
// Якщо у відповіді бекенд повернув більше ніж 10 країн, в інтерфейсі з'являється повідомлення про те, що назва повинна бути специфічнішою. Для повідомлень використовуй бібліотеку notiflix і виводь такий рядок "Too many matches found. Please enter a more specific name.".

// Якщо бекенд повернув від 2 - х до 10 - и країн, під тестовим полем відображається список знайдених країн.Кожен елемент списку складається з прапора та назви країни.

// Якщо результат запиту - це масив з однією країною, в інтерфейсі відображається розмітка картки з даними про країну: прапор, назва, столиця, населення і мови.

// Обробка помилки
// Якщо користувач ввів назву країни, якої не існує, бекенд поверне не порожній масив, а помилку зі статус кодом 404 - не знайдено.Якщо це не обробити, то користувач ніколи не дізнається про те, що пошук не дав результатів.Додай повідомлення "Oops, there is no country with that name" у разі помилки, використовуючи бібліотеку notiflix.

// ⚠️ Не забувай про те, що fetch не вважає 404 помилкою, тому необхідно явно відхилити проміс, щоб можна було зловити і обробити помилку.

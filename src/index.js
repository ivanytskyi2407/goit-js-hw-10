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

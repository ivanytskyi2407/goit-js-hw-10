import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './js/fetchCountries';
import { renderCountries } from './js/renderCountries';
import { refs } from './js/refs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { cleanRender } from "./js/cleanRender";


const DEBOUNCE_DELAY = 300;
refs.input.addEventListener('input', debounce(onInputFetch, DEBOUNCE_DELAY));


// onInputFetch
function onInputFetch(event) {
  cleanRender();
  const name = event.target.value.trim();
  if (name.length ===0) { 
        return;
      }
  if (name.length ===1) { 
        Notify.info(`Too many matches found. Please enter a more specific name.`);
        return
  }  
  fetchCountries(name)
    .then(countries => {renderCountries(countries)})
    .catch(() => Notify.failure(`Oops, there is not country with that name.`));
}


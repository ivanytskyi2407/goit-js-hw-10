import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const input = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
// const countryInfo = document.querySelector('.country-info');

input.addEventListener('input', () => {
  fetchCountry(input.value)
    .then(countries => {
      if (countries.length === 1) {
        countries.map(country => {
          //   renderCountryList(country.name);
          console.log('country', country.name);
        });
      } else if (countries.length <= 10) {
        console.log(countries);
      }
    })
    .catch(error => console.log(error));
  // .finally((input.value = ''));
});

function fetchCountry(name) {
  return fetch(`https://restcountries.com/v3.1/name/${name}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

// function renderCountryList(country) {
//   console.log(country);
//   const markup = `<li>
//           <p><b>Country</b>: ${country.official}</p>
//         </li>`;

//   countryList.innerHTML = markup;
// }

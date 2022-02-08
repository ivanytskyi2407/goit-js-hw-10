// Render
import { refs } from './refs';
export function renderCountryList(country) {
  const markup = `<li>
          <p><b>Country</b>: ${country.official}</p>
        </li>`;

  refs.countryList.innerHTML = markup;
}

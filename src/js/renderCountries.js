// Render
import { refs } from './refs';
import { cleanRender } from "./cleanRender";
export function renderCountries(countries) {  
      if (countries.length > 2 && countries.length <= 10) {
          cleanRender()
          const markupCountrylist = countries.map(({ name, flags}) => {
    return `<li class="country-list_item">
            <img class="country-list_img" src="${flags.svg}" alt="${name.common}"/>
            <p style="font-size: 20px;font-weight: 600;">${name.common}</p>
            </li>`}).join("");
            refs.countryList.insertAdjacentHTML('afterbegin',markupCountrylist);
      }
  
      else if (countries.length === 1) {
        cleanRender()
        const markupCountry = countries.map(({ name, capital, population, flags, languages }) => { 
          return `<div class='country-card__wrapper'> 
                <img class='country-list_img' src="${flags.svg}" alt="${name.common}">    
                <h1>${name.common}</h1>
                  </div>   
            <h2> Capital: ${capital}</h2>
            <p> Population: ${population}</p>
            <p>Official languages: ${Object.values(languages)}</p>`
        }).join("");
        refs.countryInfo.insertAdjacentHTML('afterbegin',markupCountry)
}
}



    
    
    


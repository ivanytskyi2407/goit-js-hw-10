// export function fetchCountries(name) {
//   return fetch(
//     `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`,
//   ).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }


// *axios

import axios from 'axios';
export function fetchCountries(name) {
  return axios.get(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`)
    .then(response => {
      console.log(response);
    return response.data;
  });
}

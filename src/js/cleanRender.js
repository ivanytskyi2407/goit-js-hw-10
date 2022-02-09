import { refs } from "./refs";
export function cleanRender() {
  refs.countryList.innerHTML = "";
  refs.countryInfo.innerHTML = "";
}
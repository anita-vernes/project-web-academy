import { baseUrl } from "./index.js";

const form = document.querySelector(".no2");
const inputfirstName = form.querySelector("#firstName");
const inputlastName = form.querySelector("#lastName");
const inputAddress = form.querySelector("#address");
const inputZipcode = form.querySelector("#zipcode");
const inputCity = form.querySelector("#city");
const inputCountry = form.querySelector("#country");
const inputGender = form.querySelector("#gender");
const inputAge = form.querySelector("#age");
let inputSports = form.querySelectorAll(".section2 input");

export async function getInfo(e) {
  e.preventDefault();

  const memberId = this.value;
  const res = await fetch(baseUrl + `/${memberId}`, {
    method: "GET",
  });
  const data = await res.json();

  inputfirstName.value = data.firstName;
  inputlastName.value = data.lastName;
  inputAddress.value = data.address.streetAndNumber;
  inputZipcode.value = data.address.postalCode;
  inputCity.value = data.address.city;
  inputCountry.value = data.address.country;
  inputGender.value = data.gender;
  inputAge.value = data.age;

  const inputActivity = form.querySelector(`#${data.activity_class}`);
  inputActivity.checked = true;
  unchecker(inputSports);

  for (let sport of data.sports) {
    let inputSport = form.querySelector(`.section2 #${sport}`);
    inputSport.checked = true;
  }

  inputfirstName.setAttribute("class", memberId);
}

export const unchecker = (inputSports) => {
  for (let inputSport of inputSports) {
    inputSport.checked = false;
  }
};

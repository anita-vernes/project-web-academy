import { baseUrl } from "./index.js";

const form = document.querySelector(".no2"),
  inputfirstName = form.querySelector("#firstName"),
  inputlastName = form.querySelector("#lastName"),
  inputAddress = form.querySelector("#address"),
  inputZipcode = form.querySelector("#zipcode"),
  inputCity = form.querySelector("#city"),
  inputCountry = form.querySelector("#country"),
  inputGender = form.querySelector("#gender"),
  inputAge = form.querySelector("#age");
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

// function to set edit member fields on click
const baseUrl = "http://localhost:3000/users";

export async function getInfo(e) {
  e.preventDefault();
  const memberid = this.value;
  const inputfirstName = document.querySelector(".no2 #firstname");
  const inputlastName = document.querySelector(".no2 #lastname");
  const inputAddress = document.querySelector(".no2 #address");
  const inputZipcode = document.querySelector(".no2 #zipcode");
  const inputCity = document.querySelector(".no2 #city");
  const inputCountry = document.querySelector(".no2 #country");
  const inputGender = document.querySelector(".no2 #gender");
  const inputAge = document.querySelector(".no2 #age");

  const res = await fetch(baseUrl + `/${memberid}`, {
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

  const inputactivity = document.querySelector(`.no2 #${data.activity_class}`);

  inputactivity.checked = "checked";

  let inputsports = document.querySelectorAll(`.no2 .section2 input`);
  unchecker(inputsports);

  for (let sport of data.sports) {
    let inputsport = document.querySelector(`.no2 .section2 #${sport}`);
    inputsport.checked = true;
  }

  inputfirstName.setAttribute("class",memberid)
}

export function unchecker(inputsports) {
  for (let input of inputsports) {
    input.checked = false;
  }
}


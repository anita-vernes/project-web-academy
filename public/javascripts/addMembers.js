import { baseUrl } from "./index.js";
import { getActivity, getSports } from "./selectorElementsGet.js";
import { unchecker } from "./editMembers.js";
import { memberCards } from "./memberContainer.js";

export const addMembers = () => {
  const postBtn = document.getElementById("save");
  postBtn.addEventListener("click", postInfo);
};

async function postInfo(e) {
  e.preventDefault();
  const inputfirstName = document.querySelector(".formWrapper #firstName");
  const inputlastName = document.querySelector(".formWrapper #lastName");
  const inputAddress = document.querySelector(".formWrapper #address");
  const inputZipcode = document.querySelector(".formWrapper #zipcode");
  const inputCity = document.querySelector(".formWrapper #city");
  const inputCountry = document.querySelector(".formWrapper #country");
  const inputGender = document.querySelector(".formWrapper #gender");
  const inputAge = document.querySelector(".formWrapper #age");

  const res = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName: inputfirstName.value,
      lastName: inputlastName.value,
      address: {
        streetAndNumber: inputAddress.value,
        postalCode: inputZipcode.value,
        city: inputCity.value,
        country: inputCountry.value,
      },
      sports: getSports(),
      gender: inputGender.value,
      age: inputAge.value,
      activity_class: getActivity(),
    }),
  })
    .then((r) => r.json())
    .then((data) => {
      // console.log(data);
    });
  // .catch(errorbox());

  clearInputValue();
  clearElements();
  memberCards();
  successBox();
}

const clearInputValue = () => {
  const inputfirstName = document.querySelector(".formWrapper #firstName");
  const inputlastName = document.querySelector(".formWrapper #lastName");
  const inputAddress = document.querySelector(".formWrapper #address");
  const inputZipcode = document.querySelector(".formWrapper #zipcode");
  const inputCity = document.querySelector(".formWrapper #city");
  const inputCountry = document.querySelector(".formWrapper #country");
  const inputGender = document.querySelector(".formWrapper #gender");
  const inputAge = document.querySelector(".formWrapper #age");
  let inputsports = document.querySelectorAll(`.formWrapper .section2 input`);

  inputfirstName.value = "";
  inputlastName.value = "";
  inputAddress.value = "";
  inputZipcode.value = "";
  inputCity.value = "";
  inputCountry.value = "";
  inputGender.value = "";
  inputAge.value = "";
  const inputactivity1 = document.querySelector(`#professional`);
  const inputactivity2 = document.querySelector(`#amateur`);

  inputactivity1.checked = "";
  inputactivity2.checked = "";

  unchecker(inputsports);
};

const clearElements = () => {
  const members = document.querySelectorAll(".member-container");

  for (let element of members) {
    element.remove();
  }
};

const successBox = () => {
  const success = document.getElementById("toastmsg1");
  success.className = "show";

  setTimeout(function () {
    success.className = success.className.replace("show", "");
  }, 5000);
};

export const errorbox = () => {
  const error = document.getElementById("toastmsgError1");
  error.className = "show";

  setTimeout(function () {
    error.className = error.className.replace("show", "");
  }, 5000);
};

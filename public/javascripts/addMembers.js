import { baseUrl } from "./index.js";
import { getActivity, getSports } from "./selectorElementsGet.js";
import { memberCards } from "./memberContainer.js";
import { clearInputValue, clearElements } from "./utility.js";

const form = document.querySelector(".formWrapper"),
  inputFirstName = form.querySelector("#firstName"),
  inputLastName = form.querySelector("#lastName"),
  inputAddress = form.querySelector("#address"),
  inputZipcode = form.querySelector("#zipcode"),
  inputCity = form.querySelector("#city"),
  inputCountry = form.querySelector("#country"),
  inputGender = form.querySelector("#gender"),
  inputAge = form.querySelector("#age"),
  inputSports = form.querySelectorAll(".section2 input"),
  inputActivity1 = form.querySelector("#professional"),
  inputActivity2 = form.querySelector("#amateur");

const successBox = () => {
  const success = document.getElementById("toastmsg1");
  success.className += "show";

  setTimeout(function () {
    success.className = success.className.replace("show", "");
  }, 5000);
};

export const errorbox = () => {
  const error = document.getElementById("toastmsgError1");
  error.className += "show";

  setTimeout(function () {
    error.className = error.className.replace("show", "");
  }, 5000);
};

async function postInfo(e) {
  e.preventDefault();
  const res = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName: inputFirstName.value,
      lastName: inputLastName.value,
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
    .then((r) => {
      if (!r.ok) {
        throw Error(errorbox());
      }
      return r.json();
    })
    .then(
      clearInputValue( 
        inputFirstName,
        inputLastName,
        inputAddress,
        inputZipcode,
        inputCity,
        inputCountry,
        inputGender,
        inputAge,
        inputActivity1,
        inputActivity2,
        inputSports),
      setTimeout(5000),
      clearElements(),
      memberCards(),
      successBox()
    );
}

export const addMembers = () => {
  const postBtn = form.querySelector("#save");
  postBtn.addEventListener("click", postInfo);
};

import { baseUrl } from "./index.js";
import { getActivity, getSports } from "./selectorElementsGet.js";
import { memberCards } from "./memberContainer.js";
import { errorbox } from "./addMembers.js";
import { clearInputValue,clearElements } from "./utility.js";

const form = document.querySelector(".no2"),
 inputFirstName = form.querySelector("#firstName"),
 inputLastName = form.querySelector("#lastName"),
 inputAddress = form.querySelector("#address"),
 inputZipcode = form.querySelector("#zipcode"),
 inputCity = form.querySelector("#city"),
 inputCountry = form.querySelector("#country"),
 inputGender = form.querySelector("#gender"),
 inputAge = form.querySelector("#age"),
 inputSports = form.querySelectorAll('.section2 input'),
 inputActivity1 = form.querySelector('#professional'),
 inputActivity2 = form.querySelector('#amateur');

const successbox = () => {
  const success = document.getElementById("toastmsg2");
  success.className += "show";
  setTimeout(function () {
    success.className = success.className.replace("show", "");
  }, 5000);
};

async function updateInfo(e) {
  e.preventDefault();

  const memberId = inputFirstName.className;
  const res = await fetch(baseUrl + `/${memberId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: memberId,
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
        throw new Error(errorbox());
      }
      return r;
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
        inputSports
      ),
      setTimeout(5000),
      clearElements(),
      memberCards(),
      successbox()
    );
}

export const updateMembers = () => {
  const postBtn = document.getElementById("update");
  postBtn.addEventListener("click", updateInfo);
};
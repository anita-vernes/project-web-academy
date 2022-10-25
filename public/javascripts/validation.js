import {
  getActivity,
  getActivityEdit,
  getSports,
  getSportsEdit,
} from "./selectorElementsGet.js";
import { containsOnlyNumbers, isEmpty } from "./utility.js";

export const validationAdd = (e) => {
  const form = document.querySelector(".formWrapper"), 
    inputFirstName = form.querySelector("#firstName"),
    inputLastName = form.querySelector("#lastName"),
    inputAddress = form.querySelector("#address"),
    inputZipcode = form.querySelector("#zipcode"),
    inputCity = form.querySelector("#city"),
    inputCountry = form.querySelector("#country"),
    inputGender = form.querySelector("#gender"),
    inputAge = form.querySelector("#age"),
    inputActivity = getActivity(),
    inputSport = getSports();
  let checker = true;

  const elements = [
    inputAddress,
    inputCity,
    inputCountry,
    inputGender,
    inputAge,
    inputActivity,
  ];
  const elementsClass = [
    "address",
    "city",
    "country",
    "gender",
    "age",
    "activity",
  ];

  if (isEmpty(inputFirstName)) {
    setError("firstName", "No first name provided!");
    checker = false;
  } else {
    unSetError("firstName");
  }

  if (isEmpty(inputLastName)) {
    setError("lastName", "No last name provided!");
    checker = false;
  } else {
    unSetError("lastName");
  }

  for (let i = 0; i < elements.length; i++) {
    if (isEmpty(elements[i])) {
      setError(elementsClass[i], `No ${elementsClass[i]} provided!`);
      checker = false;
    } else {
      unSetError(elementsClass[i]);
    }
  }

  if (isEmpty(inputZipcode)) {
    setError("zipcode", "No zipcode provided!");
    checker = false;
  } else if (!containsOnlyNumbers(inputZipcode.value)) {
    setError("zipcode", "Zipcode should contain numbers only!");
    checker = false;
  } else {
    unSetError("zipcode");
  }

  if (inputSport.length === 0) {
    setError("section2Main", "No practiced sport provided!");
    checker = false;
  } else {
    unSetError("section2Main");
  }

  return checker;
};

export const validationEdit = (e) => {
  const form = document.querySelector(".no2"),
    inputFirstName = form.querySelector("#firstName"),
    inputLastName = form.querySelector("#lastName"),
    inputAddress = form.querySelector("#address"),
    inputZipcode = form.querySelector("#zipcode"),
    inputCity = form.querySelector("#city"),
    inputCountry = form.querySelector("#country"),
    inputGender = form.querySelector("#gender"),
    inputAge = form.querySelector("#age"),
    inputActivity = getActivityEdit(),
    inputSport = getSportsEdit();
  let checker = true;

  const elements = [
    inputAddress,
    inputCity,
    inputCountry,
    inputGender,
    inputAge,
    inputActivity,
  ];
  const elementsClass = [
    "no2 .address",
    "no2 .city",
    "no2 .country",
    "no2 .gender",
    "no2 .age",
    "no2 .activity",
  ];

  if (isEmpty(inputFirstName)) {
    setError("no2 .firstName", "No first name provided!");
    checker = false;
  } else {
    unSetError("no2 .firstName");
  }

  if (isEmpty(inputLastName)) {
    setError("no2 .lastName", "No last name provided!");
    checker = false;
  } else {
    unSetError("no2 .lastName");
  }

  for (let i = 0; i < elements.length; i++) {
    if (isEmpty(elements[i])) {
      setError(
        elementsClass[i],
        `No ${elementsClass[i].substring(5)} provided!`
      );
      checker = false;
    } else {
      unSetError(elementsClass[i]);
    }
  }

  if (isEmpty(inputZipcode)) {
    setError("no2 .zipcode", "No zipcode provided!");
    checker = false;
  } else if (!containsOnlyNumbers(inputZipcode.value)) {
    setError("no2 .zipcode", "Zipcode should contain numbers only!");
    checker = false;
  } else {
    unSetError("zipcode");
  }
  if (inputSport.length === 0) {
    setError("no2 .section2Main", "No practiced sport provided!");
    checker = false;
  } else {
    unSetError("section2Main");
  }

  return checker;
};

const setError = (input, message) => {
  let small = document.querySelector(`.${input} small`);
  small.style.display = "block";
  small.innerText = message;
};

const unSetError = (input) => {
  let small = document.querySelector(`.${input} small`);
  small.style.display = "none";
};

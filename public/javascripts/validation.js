import {
  getActivity,
  getActivityEdit,
  getSports,
  getSportsEdit,
} from "./selectorElementsGet.js";

export const validationAdd = (e) => {
  const inputfirstName = document.getElementById("firstName");
  const inputlastName = document.getElementById("lastName");
  const inputAddress = document.getElementById("address");
  const inputZipcode = document.getElementById("zipcode");
  const inputCity = document.getElementById("city");
  const inputCountry = document.getElementById("country");
  const inputGender = document.getElementById("gender");
  const inputAge = document.getElementById("age");
  const inputActivity = getActivity();
  const inputSport = getSports();
  let checker = true;

  const elements = [
    inputfirstName,
    inputlastName,
    inputAddress,
    inputCity,
    inputCountry,
    inputGender,
    inputAge,
    inputActivity,
  ];
  const elementsClass = [
    "firstName",
    "lastName",
    "address",
    "city",
    "country",
    "gender",
    "age",
    "activity",
  ];

  for (let i = 0; i < elements.length; i++) {
    if (isEmpty(elements[i])) {
      setError(elementsClass[i], `No ${elementsClass[i]} provided!`);
      checker = false;
    } else {
      unSetError(elementsClass[i]);
    }
  }

  if (!containsOnlyNumbers(inputZipcode.value)) {
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
  const inputfirstName = document.querySelector(".no2 #firstName");
  const inputlastName = document.querySelector(".no2 #lastName");
  const inputAddress = document.querySelector(".no2 #address");
  const inputZipcode = document.querySelector(".no2 #zipcode");
  const inputCity = document.querySelector(".no2 #city");
  const inputCountry = document.querySelector(".no2 #country");
  const inputGender = document.querySelector(".no2 #gender");
  const inputAge = document.querySelector(".no2 #age");
  const inputActivity = getActivityEdit();
  const inputSport = getSportsEdit();
  let checker = true;

  const elements = [
    inputfirstName,
    inputlastName,
    inputAddress,
    inputCity,
    inputCountry,
    inputGender,
    inputAge,
    inputActivity,
  ];
  const elementsClass = [
    "no2 .firstName",
    "no2 .lastName",
    "no2 .address",
    "no2 .city",
    "no2 .country",
    "no2 .gender",
    "no2 .age",
    "no2 .activity",
  ];

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

  if (!containsOnlyNumbers(inputZipcode.value)) {
    setError("no2 .zipcode", "Zipcode should contain numbers only!");
    checker = false;
  } else {
    unSetError("no2 .zipcode");
  }

  if (inputSport.length === 0) {
    setError("no2 .section2Main", "No practiced sport provided!");
    checker = false;
  } else {
    unSetError("section2Main");
  }

  return checker;
};

function containsOnlyNumbers(str) {
  return /^\d+$/.test(str);
}

const isEmpty = (input) => {
  return input.value === "" || input.value === "null" || input === "";
};

function setError(input, message) {
  let small = document.querySelector(`.${input} small`);
  small.style.display = "block";
  small.innerText = message;
}

function unSetError(input) {
  let small = document.querySelector(`.${input} small`);
  small.style.display = "none";
}

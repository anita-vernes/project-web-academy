import { unchecker } from "./editMembers.js";

export const clearInputValue = (
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
) => {
  inputFirstName.value = "";
  inputLastName.value = "";
  inputAddress.value = "";
  inputZipcode.value = "";
  inputCity.value = "";
  inputCountry.value = "";
  inputGender.value = "";
  inputAge.value = "";
  inputActivity1.checked = false;
  inputActivity2.checked = false;
  unchecker(inputSports);
};

export const clearElements = () => {
  const members = document.querySelectorAll(".member-container");
  for (let member of members) {
    member.remove();
  }
};

export const containsOnlyNumbers = (str) => {
  return /^\d+$/.test(str);
}

export const isEmpty = (input) => {
  return input.value === "" || input.value === "null" || input === "";
};

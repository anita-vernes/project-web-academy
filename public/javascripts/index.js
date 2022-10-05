import { memberCards } from "./memberContainer.js";
import { validationAdd, validationEdit } from "./validation.js";
import { backBtn } from "./backBtn.js";
import { updateMembers } from "./updateMembers.js";
import { addMembers } from "./addMembers.js";

export const baseUrl = "http://localhost:3000/users";
memberCards();

backBtn();

const formAdd = document.getElementById("form");
formAdd.addEventListener("submit", add);

const formUpdate = document.getElementById("formUpdate");
formUpdate.addEventListener("submit", edit);

function add(e) {
  e.preventDefault();
  const isValid = validationAdd();
  if (isValid) {
    hideErrorMsg();
    addMembers();
  }
}

function edit(e) {
  e.preventDefault();
  const isValid = validationEdit("formUpdate");
  if (isValid) {
    hideErrorMsg();
    updateMembers();
  }
}

function hideErrorMsg() {
  let small = document.querySelectorAll(`small`);
  for (let element of small) {
    element.style.display = "none";
  }
}

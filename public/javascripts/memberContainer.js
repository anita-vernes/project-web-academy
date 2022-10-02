import { baseUrl } from "./index.js";
import { popupContainer } from "./popupContainer.js";
import {hidePopup,showPopup} from "./popupDialog.js";
import {deleteMembers} from './deleteMembers.js';
import {getInfo} from './editMembers.js';

let userAnchor = document.querySelector(".members-container");
let popupAnchor = document.querySelector(".layout");

export function createMemberContainer(element) {
  let memberContainer = document.createElement("div");
  memberContainer.classList.add("member-container");

  memberContainer.innerHTML = `<div class="nametag">
                ${element.firstName[0].toUpperCase()}
            </div>
            <div class="membername">
                Name:  ${element.firstName} ${element.lastName}
            </div>
            <div class="memberid" id="${element.id}">
                ID: ${element.id}
            </div>     
            <div class="memberemail">
            ${element.firstName.toLowerCase()}.${element.lastName.toLowerCase()}@gmail.com
            </div>
            <button id="clickMe" class="edit-button" value="${element.id}">
                Edit
            </button>
            <button class="delete-button" value="${element.id}">
                Delete
            </button>`;

  return memberContainer;
}

export function memberCards() {
  // Fetching items from API
  fetch(baseUrl)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((element) => {
        let userCard = createMemberContainer(element);
        userAnchor.append(userCard);

        let popupCard = popupContainer(element);
        popupAnchor.append(popupCard);

        addEventListenerByClass(`#closebtn`, "click", hidePopup);
        addEventListenerByClass(`#yesbtn`, "click", deleteMembers);
        addEventListenerByClass(".edit-button", "click", getInfo);
        addEventListenerByClass(".delete-button", "click", showPopup);
      });
    })
    .catch((err) => console.log(err));
}

export function addEventListenerByClass(className, event, fn) {
  let getBtn = document.querySelectorAll(className);
  for (let i = 0; i < getBtn.length; i++) {
    getBtn[i].addEventListener(event, fn);
  }
}

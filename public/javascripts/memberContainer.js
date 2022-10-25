import { baseUrl } from "./index.js";
import { showPopup } from "./popupDialog.js";
import { getInfo } from "./editMembers.js";

export const elements = [];

export const createMemberContainer = (element) => {
  let memberContainer = document.createElement("div");
  memberContainer.classList.add("member-container");
  memberContainer.innerHTML = `<div class="nametag">
                ${element.firstName[0].toUpperCase()}
            </div>
            <div class="memberName">
               ${element.firstName} ${element.lastName}
            </div>
            <div class="memberId" id="${element.id}">
                ID: ${element.id}
            </div>     
            <div class="memberEmail">
            ${element.firstName.toLowerCase()}.${element.lastName.toLowerCase()}@gmail.com
            </div>
            <button class="editBtn" value="${element.id}">
                Edit
            </button>
            <button class="deleteBtn" value="${element.id}">
                Delete
            </button>`;
  const yesBtn = document.querySelector("#yesBtn");
  yesBtn.setAttribute("class", `${element.id}`);
  return memberContainer;
};

export const memberCards = () => {
  let userAnchor = document.querySelector(".membersContainer");
  const createElement = (element) => {
    let userCard = createMemberContainer(element);
    userAnchor.append(userCard);
    elements.push(element);
  };

  fetch(baseUrl)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((element) => {
        createElement(element);
      });
    })
    .then(() => {
      addEventListenerByClass(".editBtn", "click", getInfo);
      addEventListenerByClass(".deleteBtn", "click", showPopup);
    })
    .catch((err) => console.log(err));
};

export const addEventListenerByClass = (className, event, fn) => {
  let getBtn = document.querySelectorAll(className);
  for (let i = 0; i < getBtn.length; i++) {
    getBtn[i].addEventListener(event, fn);
  }
};

import { baseUrl } from "./index.js";
import { hidePopup } from "./popupDialog.js";
export const deleteMember = (memberId) => {
  return async function (e) {
    e.preventDefault();
    const res = await fetch(baseUrl + `/${memberId}`, {
      method: "DELETE",
    });

    const memberContainerdupl = document.querySelectorAll(".member-container");
    const memberContainer = document.querySelectorAll(".member-container");

    for (let container of memberContainerdupl) {
      const member = container.querySelector(".memberid");

      if (member.id === memberId) {
        removeItemOnce(container, memberContainer);
      }
    }
    hidePopup(e);
  };
};

const removeItemOnce = (item, array) => {
  let duplArray = document.querySelectorAll(".member-container");
  for (let element of duplArray) {
    if (item === element) {
      element.remove();
    }
  }
}

import { deleteMember } from "./deleteMembers.js";
import { elements } from "./memberContainer.js";

export function hidePopup() {
  removeListeners();

  const element = document.getElementById("popup");
  element.style.display = "none";

  let textInput = document.querySelector(".popupBody p").innerHTML;
  textInput = textInput.split(":")[0];
  document.querySelector(".popupBody p").innerHTML = textInput + ": ";
}

const removeListeners = () => {
  const yesButton = document.getElementById("yesBtn");
  yesButton.removeEventListener("click", deleteMember, true);
};

export function showPopup(e) {
  e.preventDefault();
  const memberId = this.value;
  const memberContainer = document.getElementById("popup");
  memberContainer.setAttribute("class", `${memberId}`);

  const fullName = getName(memberId);
  const textInput = document.querySelector(".popupBody p");
  const name = document.createElement("p");

  name.innerHTML = fullName;
  textInput.innerHTML += name.innerHTML + "?";
  memberContainer.style.display = "block";

  const yesButton = document.getElementById("yesBtn");
  const cancelButton = document.getElementById("cancelBtn");

  yesButton.onclick = deleteMember(memberId);
  cancelButton.onclick = hidePopup;
}

function getName(memberId) {
  let memberFirstName, memberLastName;
  elements.filter((member) => {
    if (member.id === memberId) {
      memberFirstName = member.firstName;
      memberLastName = member.lastName;
    }
  });
  return `${memberFirstName} ${memberLastName}`;
}

import { baseUrl } from "./index.js";
import {getActivity,getSports} from './selectorElementsGet.js';
import { unchecker } from "./editMembers.js";
import { createMemberContainer, memberCards } from "./memberContainer.js";
export function updateMembers(){
    // e.preventDefault();
    const postBtn = document.getElementById('update');
    postBtn.addEventListener("click", updateInfo);
}
async function updateInfo(e) {
    e.preventDefault();
    console.log('click')
    const inputfirstName = document.querySelector(".no2 #firstname");
    const inputlastName = document.querySelector(".no2 #lastname");
    const inputAddress = document.querySelector(".no2 #address");
    const inputZipcode = document.querySelector(".no2 #zipcode");
    const inputCity = document.querySelector(".no2 #city");
    const inputCountry = document.querySelector(".no2 #country");
    const inputGender = document.querySelector(".no2 #gender");
    const inputAge = document.querySelector(".no2 #age");
  
    const memberid = inputfirstName.className;

    const res = await fetch(baseUrl + `/${memberid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: memberid,
        firstName: inputfirstName.value,
        lastName: inputlastName.value,
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
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
      });

      clearInputValue();
      clearElements();
      memberCards();      
  }

  function clearInputValue(){
    const inputfirstName = document.querySelector(".no2 #firstname");
    const inputlastName = document.querySelector(".no2 #lastname");
    const inputAddress = document.querySelector(".no2 #address");
    const inputZipcode = document.querySelector(".no2 #zipcode");
    const inputCity = document.querySelector(".no2 #city");
    const inputCountry = document.querySelector(".no2 #country");
    const inputGender = document.querySelector(".no2 #gender");
    const inputAge = document.querySelector(".no2 #age");
    let inputsports = document.querySelectorAll(`.no2 .section2 input`);

    inputfirstName.value = "";
    inputlastName.value = "";
    inputAddress.value = "";
    inputZipcode.value = "";
    inputCity.value = "";
    inputCountry.value = "";
    inputGender.value = "";
    inputAge.value = "";
    const inputactivity1 = document.querySelector(`.no2 #professional`);
    const inputactivity2 = document.querySelector(`.no2 #amateur`);

    inputactivity1.checked = "";
    inputactivity2.checked = "";

    unchecker(inputsports);
    successbox();
  }

function clearElements(){
    const members = document.querySelectorAll('.member-container');

    for(let element of members){
        element.remove();
    }
}

function successbox(){
    const success = document.getElementById('toastmsg2');
    success.className = "show";
  
    setTimeout(function(){ success.className = success.className.replace("show", ""); }, 5000);
  }
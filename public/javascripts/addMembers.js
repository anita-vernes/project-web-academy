import { baseUrl } from "./index.js";
import {getActivity,getSports} from './selectorElementsGet.js';
import { unchecker } from "./editMembers.js";
import { createMemberContainer, memberCards } from "./memberContainer.js";
export function addMembers(){
    // e.preventDefault();
    const postBtn = document.getElementById('save');
    postBtn.addEventListener("click", postInfo);
}
async function postInfo(e) {
    e.preventDefault();
    const inputfirstName = document.querySelector("#firstname");
    const inputlastName = document.querySelector("#lastname");
    const inputAddress = document.querySelector("#address");
    const inputZipcode = document.querySelector("#zipcode");
    const inputCity = document.querySelector("#city");
    const inputCountry = document.querySelector("#country");
    const inputGender = document.querySelector("#gender");
    const inputAge = document.querySelector("#age");
  
    const res = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
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
      successbox();    
  }

  function clearInputValue(){
    const inputfirstName = document.querySelector(".form-wrapper #firstname");
    const inputlastName = document.querySelector(".form-wrapper #lastname");
    const inputAddress = document.querySelector(".form-wrapper #address");
    const inputZipcode = document.querySelector(".form-wrapper #zipcode");
    const inputCity = document.querySelector(".form-wrapper #city");
    const inputCountry = document.querySelector(".form-wrapper #country");
    const inputGender = document.querySelector(".form-wrapper #gender");
    const inputAge = document.querySelector(".form-wrapper #age");
    let inputsports = document.querySelectorAll(`.form-wrapper .section2 input`);

    inputfirstName.value = "";
    inputlastName.value = "";
    inputAddress.value = "";
    inputZipcode.value = "";
    inputCity.value = "";
    inputCountry.value = "";
    inputGender.value = "";
    inputAge.value = "";
    const inputactivity1 = document.querySelector(`#professional`);
    const inputactivity2 = document.querySelector(`#amateur`);

    inputactivity1.checked = "";
    inputactivity2.checked = "";

    unchecker(inputsports);
  }

function clearElements(){
    const members = document.querySelectorAll('.member-container');

    for(let element of members){
        element.remove();
    }
}

function successbox(){
    const success = document.getElementById('toastmsg1');
    success.className = "show";
  
    setTimeout(function(){ success.className = success.className.replace("show", ""); }, 5000);
  }
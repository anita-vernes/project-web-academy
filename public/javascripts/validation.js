// import { getActivity } from "./selectorElementsGet.js";

export const validation = () => {
    const form = document.getElementById("form");
    const inputfirstName = document.querySelector("#firstName");
    const inputlastName = document.querySelector("#lastname");
    const inputAddress = document.querySelector("#address");
    const inputZipcode = document.querySelector("#zipcode");
    const inputCity = document.querySelector("#city");
    const inputCountry = document.querySelector("#country");
    const inputGender = document.querySelector("#gender");
    const inputAge = document.querySelector("#age");
    const genderVal = inputGender.value;
    // const inputActivity = getActivity();
    
    //Show input error messages
    function showError(input, message) {
      const formControl = input.parentElement;
      formControl.className = "formWrapper error";
      const small = formControl.querySelector("small");
      small.innerText = message;
    }
    
    //show success colour
    function showSucces(input) {
      const formControl = input.parentElement;
      formControl.className = "formWrapper success";
    }
    
    //checkRequired fields
    function checkRequired(inputArr) {
      inputArr.forEach(function (input) {
        if (input.value.trim() === "") {
          showError(input, `${getFieldName(input)} is required`);
        } else {
          showSucces(input);
        }
      });
    }
    
    //check input Length
    function checkLength(input, min, max) {
      if (input.value.length < min) {
        showError(
          input,
          `${getFieldName(input)} must be at least ${min} characters`
        );
      } else if (input.value.length > max) {
        showError(
          input,
          `${getFieldName(input)} must be less than ${max} characters`
        );
      } else {
        showSucces(input);
      }
    }
    
    //get FieldName
    function getFieldName(input) {
      return input.id.charAt(0).toUpperCase() + input.id.slice(1);
    }
    
    //Event Listeners
    form.addEventListener("submit", function (e) {
      e.preventDefault();
        let inputs = [inputfirstName,inputlastName,inputAddress,inputZipcode,inputCity,inputCountry,inputGender,inputAge,inputActivity];
    
      checkRequired(inputs);
      checkLength(inputfirstName, 3, 15);
    });
}


// import index.js;

// const form = document.getElementById('form');
// const errorElement = document.getElementById('error');

// const inputfirstName = document.querySelector("#firstName");
// const inputlastName = document.querySelector("#lastname");
// const inputAddress = document.querySelector("#address");
// const inputZipcode = document.querySelector("#zipcode");
// const inputCity = document.querySelector("#city");
// const inputCountry = document.querySelector("#country");
// const inputGender = document.querySelector("#gender");
// const inputAge = document.querySelector("#age");

// const genderval = inputGender.value;

// let inputs = [inputfirstName,inputlastName,inputAddress,inputZipcode,inputCity,inputCountry,inputGender,inputAge];
// form.addEventListener('submit',(e)=>{
//   e.preventDefault()
//   let message = [];
//   let messageTypeNum = [];

//   for(let input of inputs){
//     if(input.value === '' || input.value == null || input.value !== inputGender){
//       message.push(`${input.name[0].toUpperCase()}${input.name.substring(1)}`)
//     }

//     if((input == inputZipcode)&&(!containsOnlyNumbers(input.value))){
//       messageTypeNum.push(`${input.name[0].toUpperCase()}${input.name.substring(1)}`)
//     }
//   }

//   if(message.length > 0){
//     errorElement.innerHTML = message.join(', ')+' are not specified!  ';
//   }

//   if(messageTypeNum.length > 0){
//     errorElement.innerHTML += messageTypeNum.join(', ')+ ' is not a number!'
//   }
// })

// function containsOnlyNumbers(str) {
//   return /^[0-9]+$/.test(str);
// }



// function getSports(){
//   let sportarray=[];
//   const sports = document.querySelectorAll(`.section2 input`);

//   for (let sport of sports) {
//     if(sport.checked === true){
//       sportarray.name.push(sport.name);
//     }
//   }
//   return sportarray;

// }

// function getActivity(){
//   const activities = document.querySelectorAll(`#labelActivity input`);

//   for(let activity of activities){
//     if(activity.checked === true)
//       return activity.id;
//   }
//   return "";
// }

// const form = document.getElementById('form');
// const errorElement = document.getElementById('error');

// const inputZipcode = document.querySelector("#zipcode");
// const inputGender = document.querySelector("#gender");

// const genderval = inputGender.value;
// const text = inputGender.options[inputGender.selectedIndex].text;

// let inputs = [inputZipcode,inputGender];
// export function formChecker(){
//     form.addEventListener('input',(e)=>{
//         e.preventDefault();
//         let messageTypeNum = [];
//         let message = [];
//         for(let input of inputs){

//             if(input === genderval){
//             const genderval = inputGender.value;
//             console.log(genderval)
//             if(genderval === null){
//                 message.push(`${input.name[0].toUpperCase()}${input.name.substring(1)}`)}
//             }

//             if((input == inputZipcode)&&(!containsOnlyNumbers(input.value))){
//             messageTypeNum.push(`${input.name[0].toUpperCase()}${input.name.substring(1)}`)
//             }
//         }

//         if(message.length > 0){
//             errorElement.innerHTML = message.join(', ')+' are not specified!  ';
//         }

//         if(messageTypeNum.length > 0){
//             errorElement.innerHTML += messageTypeNum.join(', ')+ ' is not a number!'
//         }
//     })
// }

// function containsOnlyNumbers(str) {
//   return /^[0-9]+$/.test(str);
// }

// import index.js;

// const form = document.getElementById('form');
// const errorElement = document.getElementById('error');

// const inputfirstName = document.querySelector("#firstName");
// const inputlastName = document.querySelector("#lastname");
// const inputAddress = document.querySelector("#address");
// const inputZipcode = document.querySelector("#zipcode");
// const inputCity = document.querySelector("#city");
// const inputCountry = document.querySelector("#country");
// const inputGender = document.querySelector("#gender");
// const inputAge = document.querySelector("#age");

// const genderval = inputGender.value;

// let inputs = [inputfirstName,inputlastName,inputAddress,inputZipcode,inputCity,inputCountry,inputGender,inputAge];
// form.addEventListener('submit',(e)=>{
//   e.preventDefault()
//   let message = [];
//   let messageTypeNum = [];

//   for(let input of inputs){
//     if(input.value === '' || input.value == null || input.value !== inputGender){
//       message.push(`${input.name[0].toUpperCase()}${input.name.substring(1)}`)
//     }

//     if((input == inputZipcode)&&(!containsOnlyNumbers(input.value))){
//       messageTypeNum.push(`${input.name[0].toUpperCase()}${input.name.substring(1)}`)
//     }
//   }

//   if(message.length > 0){
//     errorElement.innerHTML = message.join(', ')+' are not specified!  ';
//   }

//   if(messageTypeNum.length > 0){
//     errorElement.innerHTML += messageTypeNum.join(', ')+ ' is not a number!'
//   }
// })

// function containsOnlyNumbers(str) {
//   return /^[0-9]+$/.test(str);
// }


// function getSports(){
//   let sportarray=[];
//   const sports = document.querySelectorAll(`.section2 input`);

//   for (let sport of sports) {
//     if(sport.checked === true){
//       sportarray.name.push(sport.name);
//     }
//   }
//   return sportarray;

// }

// function getActivity(){
//   const activities = document.querySelectorAll(`#labelActivity input`);

//   for(let activity of activities){
//     if(activity.checked === true)
//       return activity.id;
//   }
//   return "";
// }

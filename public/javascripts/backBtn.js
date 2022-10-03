import { addEventListenerByClass } from "./memberContainer.js";

export  function backBtn(e){
    const element1 = document.querySelector(".formWrapper");
    const element2 = document.querySelector(".formWrapper.no2");
    addEventListenerByClass("#backBtnAdd","click",hideEdit);
    addEventListenerByClass("#backBtnEdit","click",hideEdit);
}

function hideEdit(e){
    e.preventDefault();
    const element1 = document.querySelector(".formWrapper");
    const element2 = document.querySelector(".formWrapper.no2");

    if(element1.style.display === "none"){
        element1.style.display="block";
        element2.style.display="none";
    }else{
        element1.style.display="none";
        element2.style.display="block";
    }
        
}
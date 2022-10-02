import { addEventListenerByClass } from "./memberContainer.js";

export  function backBtn(e){
    const element1 = document.querySelector(".form-wrapper");
    const element2 = document.querySelector(".form-wrapper.no2");
    addEventListenerByClass("#backbtnadd","click",hideEdit);
    addEventListenerByClass("#backbtnedit","click",hideEdit);
}

function hideEdit(e){
    e.preventDefault();
    const element1 = document.querySelector(".form-wrapper");
    const element2 = document.querySelector(".form-wrapper.no2");

    if(element1.style.display === "none"){
        element1.style.display="block";
        element2.style.display="none";
    }else{
        element1.style.display="none";
        element2.style.display="block";
    }
        
}
import { addEventListenerByClass } from "./memberContainer.js";

const element1 = document.querySelector(".formWrapper");
const element2 = document.querySelector(".formWrapper.no2");
const btnAdd = document.getElementById('backBtnAdd');
const btnEdit = document.getElementById('backBtnEdit');
const hide = el => el.style.setProperty("display", "none");
const show = el => el.style.setProperty("display", "block");

export  function backBtn(e){
    addEventListenerByClass("#backBtnAdd","click",addMembersShow);
    addEventListenerByClass("#backBtnEdit","click",editMembersShow);
    window.addEventListener('resize',(e)=>{
            e.preventDefault();
        if(window.screen.width > 1024){
            if(element1.style.display == 'block' && element2.style.display == 'block'){
                hide(btnAdd);
                hide(btnEdit);
            }
            if(element1.style.display == 'none'){
                show(element1)
                hide(btnAdd);
            }
            if(element2.style.display == 'none'){
                show(element2)
                hide(btnEdit);
            }
        }
    })
        
}

const editMembersShow = (e) => {
    // e.preventDefault();
    hide(element1);
    show(element2)
    hide(btnAdd)
    show(btnEdit)
    addEventListenerByClass("#backBtnEdit","click",addMembersShow);
    btnAdd.removeEventListener('click',editMembersShow)
}

const addMembersShow = (e) => {
    // e.preventDefault();
    hide(element2);
    show(element1)
    show(btnAdd)
    hide(btnEdit)
    addEventListenerByClass("#backBtnAdd","click",editMembersShow);
    btnEdit.removeEventListener('click',addMembersShow)
}
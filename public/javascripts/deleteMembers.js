import { baseUrl } from "./index.js";
import { hidePopup } from "./popupDialog.js";
export async function deleteMembers(e){
    e.preventDefault();
    const member = document.querySelector('#yesbtn')
    const memberid = member.classList.value;
    console.log(memberid)
    const res = await fetch(baseUrl + `/${memberid}`, {
        method: "DELETE",
      });
    const data = await res;
    hidePopup();
    const memberContainer = document.querySelectorAll('.member-container');
    
    for(let container of memberContainer){
      const member = container.querySelector('.memberid');
      
      if(member.id === memberid){
        container.remove();
      }
    }
    
}
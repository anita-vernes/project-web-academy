
export function popupContainer(element){
    let popup = document.createElement("div");
    popup.classList.add(`popup-container`);
    popup.setAttribute("id","popup");
    popup.innerHTML=`<div class="popup-header">
                    <h1>Delete member</h1>
                </div>
                <div class="popup-body" id=${element.id}>
                    <p>Are you sure you want to delete member: ${element.firstName} ${element.lastName} ?</p>
                </div>
                <div class="popup-footer">
                    <a href="#" id="closebtn"  class="${element.id}" value="${element.id}">No</a>
                    <a href="#" id="yesbtn" class="${element.id}" value="${element.id}">Yes</a>
                </div>
    `;
    return popup;
}
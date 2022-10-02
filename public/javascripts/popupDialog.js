// export function  popupDialog(){
//     window.addEventListener("load", function(e) {
//         e.preventDefault();
//         var close = document.getElementById("closebtn");
//         close.addEventListener("click", hidePopup);
//         });
// }


export function hidePopup() {
 const element = document.getElementById("popup")
 element.style.display = "none";
//  element.remove();
}

export function showPopup() {
    const element = document.getElementById("popup");
    element.style.display = "block";
}
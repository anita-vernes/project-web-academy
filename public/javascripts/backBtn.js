const element1 = document.querySelector(".formWrapper");
const element2 = document.querySelector(".formWrapper.no2");
const btnAdd = document.getElementById("backBtnAdd");
const btnEdit = document.getElementById("backBtnEdit");

const addMembersShow = (e) => {
  e.preventDefault();
  btnAdd.classList.remove("hide");
  btnEdit.classList.remove("show");
  element1.classList.remove("hide");
  element2.classList.remove("show");
};

const editMembersShow = (e) => {
  e.preventDefault();
  btnAdd.classList.add("hide");
  btnEdit.classList.add("show");
  element1.classList.add("hide");
  element2.classList.add("show");
};

export function backBtn(e) {
  btnAdd.addEventListener("click", editMembersShow);
  btnEdit.addEventListener("click", addMembersShow);
  window.addEventListener("resize", (e) => {
    if (window.screen.width > 1024) {
      element1.classList.remove("hide");
      btnAdd.classList.remove("hide");
      btnEdit.classList.remove("show");
      element2.classList.remove("show");
    }
  });
}

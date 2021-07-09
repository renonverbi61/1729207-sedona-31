const SearchButton = document.querySelector(".activate-modal");
const PopupForm = document.querySelector(".modal-form");

SearchButton.onclick = function() {
  PopupForm.classList.toggle("modal__form-invisible");
}

const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile-info__edit-button');
const popupCloseButton = document.querySelector('.popup__close');
const form = document.querySelector('.popup__form');
const title = document.querySelector('.profile-info__title');
const subtitle = document.querySelector('.profile-info__subtitle');
const fieldOne = document.querySelector('.popup__input_type_name');
const fieldTwo = document.querySelector('.popup__input_type_proffession');

function doPopup() {
  popup.classList.toggle('popup_opened');
}

function popupClickHandler(event) {
  if (event.target.classList.contains('popup')) {
    doPopup();
  }
}

function submitForm(event) {
  event.preventDefault();
  title.textContent = fieldOne.value;
  subtitle.textContent = fieldTwo.value;
  doPopup()
}

editButton.addEventListener('click', doPopup);
popupCloseButton.addEventListener('click', doPopup);
popup.addEventListener('mousedown', popupClickHandler);
form.addEventListener('submit', submitForm);
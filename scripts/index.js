let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile-info__edit-button');
let popupCloseButton = document.querySelector('.popup__close');
let form = document.querySelector('.popup__form');
let title = document.querySelector('.profile-info__title');
let subtitle = document.querySelector('.profile-info__subtitle');
let fieldOne = document.querySelector('.popup__input_type-name');
let fieldTwo = document.querySelector('.popup__input_type-profession');

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
let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile-info__edit-button');
let popupCloseButton = document.querySelector('.popup__close');
let form = document.querySelector('.popup__form');
let title = document.querySelector('.profile-info__title');
let subTitle = document.querySelector('.profile-info__subtitle');
let fieldOne = document.querySelector('.popup__input_type-name');
let fieldTwo = document.querySelector('.popup__input_type-profession');


function doPopup() {
  popup.classList.toggle('popup_opened');
  fieldOne.value = title.textContent;
  fieldTwo.value = subTitle.textContent;
}

function closePopup() {
  popup.classList.toggle('popup_opened');
}

function popupClickHandler(event) {
  if (event.target.classList.contains('popup')) {
    closePopup();
  }
}

function submitForm(event) {
  event.preventDefault();
  title.textContent = fieldOne.value;
  subTitle.textContent = fieldTwo.value;
  closePopup();
}

editButton.addEventListener('click', doPopup);
popupCloseButton.addEventListener('click', closePopup);
popup.addEventListener('mousedown', popupClickHandler);
form.addEventListener('submit', submitForm);


/* --------------- Project work V --------------- */
let popupCard = document.querySelector('.popupCard');
let popupCardCloseButton = document.querySelector('.popupCard__close');
let addButton = document.querySelector('.profile__add-button');

function doPopupCard() {
  popupCard.classList.toggle('popupCard_opened');
}
function closePopupCard() {
  popupCard.classList.toggle('popupCard_opened');
}
function popupCardClickHandler(event) {
  if (event.target.classList.contains('popupCard')) {
    closePopupCard();
  }
}
addButton.addEventListener('click', doPopupCard);
popupCardCloseButton.addEventListener('click', closePopupCard);
popupCard.addEventListener('mousedown', popupCardClickHandler);
form.addEventListener('submit', submitForm);
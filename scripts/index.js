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

// popup for adding Cards
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

//rendering cards from massive
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

const itemTemplate = document.querySelector(".templateCard").content;
const cardBox = document.querySelector(".elements");

function render() {
  initialCards.forEach(renderItem);
}

function renderItem(object) {
  const htmlElement = itemTemplate.cloneNode(true); 
  htmlElement.querySelector('.element__text').innerText = object.name;
  htmlElement.querySelector('.element__image').setAttribute('src', object.link);
  cardBox.appendChild(htmlElement);
}

render()

// function of adding new card

const confirmAddCard = document.querySelector('.popupCard__submit');
let fieldOneAdd = document.querySelector('.popupCard__input_name');
let fieldTwoAdd = document.querySelector('.popupCard__input_url');
function confirmAdding(event){
  event.preventDefault();
  const htmlElement = itemTemplate.cloneNode(true); 
  htmlElement.querySelector('.element__text').textContent = fieldOneAdd.value;
  htmlElement.querySelector('.element__image').src = fieldTwoAdd.value;
  cardBox.prepend(htmlElement);
}
confirmAddCard.addEventListener('click', confirmAdding);
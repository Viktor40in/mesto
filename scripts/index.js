const popup = document.querySelector('.popup');
const popupEditPerson = document.querySelector('.popupEditPerson');
const editButton = document.querySelector('.profile-info__edit-button');
const popupCloseButton = document.querySelector('.popup__close');
const form = document.querySelector('.popup__form');
const title = document.querySelector('.profile-info__title');
const subTitle = document.querySelector('.profile-info__subtitle');
const userName = document.querySelector('.popup__input_type-name');
const userProfession = document.querySelector('.popup__input_type-profession');

const popupCard = document.querySelector('.popupCard');
const popupCardCloseButton = document.querySelector('.popupCard__close');
const addButton = document.querySelector('.profile__add-button');

const confirmAddCard = document.querySelector('.popupCard__submit');
const userNameAdd = document.querySelector('.popup__input_name');
const userProfessionAdd = document.querySelector('.popup__input_url');

const itemTemplate = document.querySelector('.templateCard').content;
const cardBox = document.querySelector('.elements');

const popupImage = document.querySelector('.popupImage');
const imageFromPopup = document.querySelector('.popup__image');
const popupImageTitle = document.querySelector('.popup__title-image');
const popupImageCloseButton = document.querySelector('.popup__close-image');

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

//for popup profile edit
function handleEditPerson(){
  userName.value = title.textContent;
  userProfession.value = subTitle.textContent;
  openPopup(popupEditPerson);
}
function popupClickHandler(event) {
  if (event.target === event.currentTarget) {
    closePopup(event.target);
  }
}
function submitForm(event) {
  event.preventDefault();
  title.textContent = userName.value;
  subTitle.textContent = userProfession.value;
  closePopup(popupEditPerson);
}
editButton.addEventListener('click', handleEditPerson);
popupCloseButton.addEventListener('click',() => closePopup(popupEditPerson));
popup.addEventListener('mousedown', popupClickHandler);
form.addEventListener('submit', submitForm);

// popup for adding Cards
addButton.addEventListener('click',() => openPopup(popupCard));
popupCardCloseButton.addEventListener('click', () => closePopup(popupCard));
popupCard.addEventListener('mousedown', popupClickHandler);

//rendering cards from massive

function render() {
  initialCards.forEach(renderItem);
}
function renderItem(object) {
  const htmlElement = itemTemplate.cloneNode(true); 
  htmlElement.querySelector('.element__text').innerText = object.name;
  htmlElement.querySelector('.element__image').setAttribute('src', object.link);
  htmlElement.querySelector('.element__recycle').addEventListener('click', toTrash); // listener for recycle button
  htmlElement.querySelector('.element__button').addEventListener('click', likeButtonToBlack); // listener for negro button
  htmlElement.querySelector('.element__image').addEventListener('click', renderPopupImage); // listener for image popup
  cardBox.appendChild(htmlElement);
}
render()
// function for adding new card

function confirmAdding(event){
  event.preventDefault();
  const htmlElement = itemTemplate.cloneNode(true); 
  htmlElement.querySelector('.element__text').textContent = userNameAdd.value;
  htmlElement.querySelector('.element__image').src = userProfessionAdd.value;
  htmlElement.querySelector('.element__recycle').addEventListener('click', toTrash); // listener for recycle button
  cardBox.prepend(htmlElement);
  closePopup(popupCard);
}
confirmAddCard.addEventListener('click', confirmAdding);

//recycle button in action
function toTrash(evt){
  evt.target.closest('.element').remove();
}
//like button to black
function likeButtonToBlack(evt) {
  evt.target.classList.toggle('element__button_black');
}
//popup for image
function renderPopupImage(evt) {
  imageFromPopup.src = evt.target.getAttribute('src');
  popupImageTitle.innerText = evt.target.closest('.element').querySelector('.element__text').textContent;
  openPopup(popupImage);
}
popupImageCloseButton.addEventListener('click', () => closePopup(popupImage));
popupImage.addEventListener('mousedown', popupClickHandler);

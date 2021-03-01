const popup = document.querySelector('.popup');
const popupEditPerson = document.querySelector('.popupEditPerson');
const editButton = document.querySelector('.profile-info__edit-button');
const popupEditPersonSubmit = document.querySelector('.popupEditPerson__submit')
const popupCloseButton = document.querySelector('.popup__close');
const title = document.querySelector('.profile-info__title');
const subTitle = document.querySelector('.profile-info__subtitle');
const userName = document.querySelector('.popup__input_type-name');
const userProfession = document.querySelector('.popup__input_type-profession');

const popupCard = document.querySelector('.popupCard');
const popupCardCloseButton = document.querySelector('.popupCard__close');
const addButton = document.querySelector('.profile__add-button');

const confirmAddCard = document.querySelector('.popupCard__submit');
const cardNameInput = document.querySelector('.popup__input_name');
const cardUrlInput = document.querySelector('.popup__input_url');

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
function submitEditProfileForm(event) {
  event.preventDefault();
  title.textContent = userName.value;
  subTitle.textContent = userProfession.value;
  closePopup(popupEditPerson);
}
editButton.addEventListener('click', handleEditPerson);
popupCloseButton.addEventListener('click',() => closePopup(popupEditPerson));
popup.addEventListener('mousedown', popupClickHandler);
popupEditPersonSubmit.addEventListener('click', submitEditProfileForm);

// popup for adding Cards
addButton.addEventListener('click',() => openPopup(popupCard));
popupCardCloseButton.addEventListener('click', () => closePopup(popupCard));
popupCard.addEventListener('mousedown', popupClickHandler);

//rendering cards from massive
initialCards.forEach(object => addCard(cardBox, object));

function createCard(object) {
  const cardTemplate = itemTemplate.cloneNode(true); 
  const templateImage = cardTemplate.querySelector('.element__image');
  const templateText = cardTemplate.querySelector('.element__text');
  const templateButtonLike = cardTemplate.querySelector('.element__button');
  const templateButtonRecycle = cardTemplate.querySelector('.element__recycle');
  templateText.innerText = object.name;
  templateImage.src = object.link;
  templateImage.alt = object.name;
  initialListeners(templateButtonRecycle, templateButtonLike, templateImage);
  return cardTemplate;
}
function addCard(container, element){
  container.prepend(createCard(element));
}
function initialListeners(templateButtonRecycle, templateButtonLike, templateImage){
  templateButtonRecycle.addEventListener('click', toTrash); // listener for recycle button
  templateButtonLike.addEventListener('click', likeButtonToBlack); // listener for negro button
  templateImage.addEventListener('click', renderPopupImage); // listener for image popup
}
// function for adding new card
function submitAddCardForm(event){
  event.preventDefault();
  const object = {
    name: cardNameInput.value,
    link: cardUrlInput.value,
  };
  addCard(cardBox, object);
  closePopup(popupCard); 
  cardNameInput.value = '';
  cardUrlInput.value= '';
}
confirmAddCard.addEventListener('click', submitAddCardForm); //listener for submit button to add card


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
  const popupTitle = evt.target.closest('.element').querySelector('.element__text');
  imageFromPopup.src = evt.target.getAttribute('src');
  popupImageTitle.innerText = popupTitle.textContent;
  imageFromPopup.alt = popupTitle.textContent;
  openPopup(popupImage);
}
popupImageCloseButton.addEventListener('click', () => closePopup(popupImage));
popupImage.addEventListener('mousedown', popupClickHandler);

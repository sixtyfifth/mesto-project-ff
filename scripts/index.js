const caseElement = document.querySelector(".places__list");
const cardTemplate = document.querySelector("#card-template").content;

const deleteCard = (event) => {
  event.target.closest(".places__item").remove();
};

function createCard(data, onDelete) {
  const cardElement = cardTemplate
    .querySelector(".places__item")
    .cloneNode(true);
  const placesImage = cardElement.querySelector(".card__image");
  const deleteButton = cardElement.querySelector(".card__delete-button");
  cardElement.querySelector(".card__title").textContent = data.name;
  placesImage.src = data.link;
  placesImage.alt = data.name;
  deleteButton.addEventListener('click', onDelete)
  return cardElement;
}

const addCard = (data) => {
  const newCard = createCard(data, deleteCard);
  caseElement.prepend(newCard);
};

initialCards.forEach((data) => {
  addCard(data);
});
import "../pages/index.css";
import {
  openPopup,
  closePopup,
  closePopupByOverlay,
} from "../components/modal";
import { createCard, likeCard } from "../components/card";
import { enableValidation, clearValidation } from "../components/validation";
import {
  deleteCardRequest,
  addCardRequest,
  changeProfileInfoRequest,
  changeAvatarRequest,
  getMyInfoRequest,
  getCardsRequest,
} from "../components/api";

const cardsList = document.querySelector(".places__list");

const profileEditButton = document.querySelector(".profile__edit-button");
const newCardButton = document.querySelector(".profile__add-button");

const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileImage = document.querySelector(".profile__image");

const popupAvatar = document.querySelector(".popup_avatar");
const popupAvatarForm = document.forms["change-avatar"];
const popupAvatarLinkInput = popupAvatarForm.elements.link;
const popupAvatarButton = popupAvatar.querySelector(".popup__button");

const popupProfile = document.querySelector(".popup_type_edit");
const popupProfileForm = document.forms["edit-profile"];
const popupProfileNameInput = popupProfileForm.elements.name;
const popupProfileDescriptionInput = popupProfileForm.elements.description;
const popupProfileButton = popupProfile.querySelector(".popup__button");

const popupAddCard = document.querySelector(".popup_type_new-card");
const popupAddCardForm = document.forms["new-place"];
const popupAddCardNameInput = popupAddCardForm.elements["place-name"];
const popupAddCardLinkInput = popupAddCardForm.elements.link;
const popupAddCardButton = popupAddCard.querySelector(".popup__button");

const popupCard = document.querySelector(".popup_type_image");
const popupCardImage = document.querySelector(".popup__image");
const popupCardName = document.querySelector(".popup__caption");

const popupDeleteCard = document.querySelector(".popup_delete-image");
const popupDeleteCardButton = popupDeleteCard.querySelector(".popup__button");

const closeButtons = document.querySelectorAll(".popup__close");

const popupsList = document.querySelectorAll(".popup");

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

export let accountId = "";

Promise.all([getCardsRequest(), getMyInfoRequest()])
  .then((request) => {
    accountId = request[1]["_id"];

    profileName.textContent = request[1].name;
    profileDescription.textContent = request[1].about;
    profileImage.style = `background-image: url('${request[1].avatar}')`;

    request[0].forEach((card) => {
      cardsList.append(
        createCard(card, deleteMyCard, openPopupImage, likeCard, accountId)
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });

enableValidation(validationConfig);

profileImage.addEventListener("click", () => {
  popupAvatarForm.reset();

  clearValidation(popupAvatar, validationConfig);
  openPopup(popupAvatar);
});

profileEditButton.addEventListener("click", () => {
  popupProfileNameInput.value = profileName.textContent;
  popupProfileDescriptionInput.value = profileDescription.textContent;

  clearValidation(popupProfileForm, validationConfig);
  openPopup(popupProfile);
});

newCardButton.addEventListener("click", () => {
  popupAddCardForm.reset();

  clearValidation(popupAddCard, validationConfig);
  openPopup(popupAddCard);
});

popupsList.forEach((item) => {
  item.addEventListener("mousedown", closePopupByOverlay);
});

closeButtons.forEach((item) => {
  const popup = item.closest(".popup");
  item.addEventListener("click", () => {
    closePopup(popup);
  });
});

function openPopupImage(evt) {
  popupCardImage.src = evt.target.src;
  popupCardImage.alt = evt.target.alt;
  popupCardName.textContent = evt.target.alt;

  openPopup(popupCard);
}

function handleAvatarFormSubmit(evt) {
  evt.preventDefault();
  renderSaving(true, popupAvatarButton);

  changeAvatarRequest(popupAvatarLinkInput.value)
    .then((res) => {
      profileImage.style = `background-image: url('${res.avatar}')`;

      closePopup(popupAvatar);
      popupAvatarForm.reset();
    })
    .catch((err) => console.log(err))
    .finally(() => {
      renderSaving(false, popupAvatarButton);
    });
}

popupAvatarForm.addEventListener("submit", handleAvatarFormSubmit);

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  renderSaving(true, popupProfileButton);

  changeProfileInfoRequest(
    popupProfileNameInput.value,
    popupProfileDescriptionInput.value
  )
    .then((res) => {
      profileName.textContent = res.name;
      profileDescription.textContent = res.about;

      closePopup(popupProfile);
    })
    .catch((err) => console.log(err))
    .finally(() => {
      renderSaving(false, popupProfileButton);
    });
}

popupProfileForm.addEventListener("submit", handleProfileFormSubmit);

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  renderSaving(true, popupAddCardButton);

  addCardRequest(popupAddCardNameInput.value, popupAddCardLinkInput.value)
    .then((card) => {
      cardsList.prepend(
        createCard(card, deleteMyCard, openPopupImage, likeCard, accountId)
      );

      closePopup(popupAddCard);
      popupAddCardForm.reset();
    })
    .catch((err) => console.log(err))
    .finally(() => {
      renderSaving(false, popupAddCardButton);
    });
}

popupAddCardForm.addEventListener("submit", handleCardFormSubmit);

function deleteMyCard(card) {
  openPopup(popupDeleteCard);

  popupDeleteCardButton.dataset.cardId = card["_id"];
}

function handleDeleteClick(evt) {
  evt.preventDefault();

  const cardId = popupDeleteCardButton.dataset.cardId;

  deleteCardRequest(cardId)
    .then(() => {
      const deleteCard = document.getElementById(cardId);

      deleteCard.remove();
      popupDeleteCardButton.dataset.cardId = "";
      closePopup(popupDeleteCard);
    })
    .catch((err) => console.log(err));
}

popupDeleteCardButton.addEventListener("click", handleDeleteClick);

function renderSaving(isLoading, button) {
  if (isLoading) {
    button.textContent = "Сохранение...";
  } else {
    button.textContent = button.dataset.buttonText;
  }
}

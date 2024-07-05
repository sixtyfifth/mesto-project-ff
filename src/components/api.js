import { checkResponse } from "./utils";

const config = {
  baseUrl: "https://nomoreparties.co/v1/wff-cohort-17",
  headers: {
    authorization: "97a91d1e-dee8-462a-bbb9-a19ad2e7c4de",
    "Content-Type": "application/json",
  },
};

export const getInitialCards = async () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
  }).then(checkResponse);
};

export const getUserInfo = async () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers,
  }).then(checkResponse);
};

export const getInitialInfo = async () => {
  return Promise.all([getUserInfo(), getInitialCards()]);
};

export const updateProfile = async (userProfileData) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: userProfileData.name,
      about: userProfileData.about,
    }),
  }).then(checkResponse);
};

export const updateAvatar = async (avatarLink) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatarLink,
    }),
  }).then(checkResponse);
};

export const addNewCard = async (cardData) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name: cardData.name,
      link: cardData.link,
    }),
  }).then(checkResponse);
};

export const deleteCardUser = async (cardId) => {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then(checkResponse);
};

export const likeCard = async (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "PUT",
    headers: config.headers,
  }).then(checkResponse);
};

export const unlikeCard = async (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then(checkResponse);
};
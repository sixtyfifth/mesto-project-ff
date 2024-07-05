/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/card.js":
/*!********************************!*\
  !*** ./src/components/card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCard: () => (/* binding */ createCard),\n/* harmony export */   deleteCard: () => (/* binding */ deleteCard),\n/* harmony export */   like: () => (/* binding */ like)\n/* harmony export */ });\nfunction createCard(cardTemplate, card, deleteCard, like, openPopupImage) {\n  var cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);\n  var cardImage = cardElement.querySelector('.card__image');\n  cardImage.src = card.link;\n  cardImage.alt = card.name;\n  var cardTitle = cardElement.querySelector('.card__title');\n  cardTitle.textContent = card.name;\n  var deleteButton = cardElement.querySelector('.card__delete-button');\n  deleteButton.addEventListener('click', function () {\n    deleteCard(cardElement);\n  });\n  var likeBtn = cardElement.querySelector('.card__like-button');\n  likeBtn.addEventListener('click', function (evt) {\n    like(evt.target);\n  });\n  cardImage.addEventListener('click', function (evt) {\n    evt.stopPropagation();\n    openPopupImage(cardImage);\n  });\n  return cardElement;\n}\n;\nfunction deleteCard(element) {\n  element.remove();\n}\n;\nfunction like(button) {\n  button.classList.toggle('card__like-button_is-active');\n}\n;\n\n\n//# sourceURL=webpack://mesto/./src/components/card.js?");

/***/ }),

/***/ "./src/components/cards.js":
/*!*********************************!*\
  !*** ./src/components/cards.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialCards: () => (/* binding */ initialCards)\n/* harmony export */ });\nvar initialCards = [{\n  name: \"Найт-Сити\",\n  link: \"https://i.pinimg.com/originals/81/20/00/8120001415a08c668d3aa40b84ba11ad.jpg\"\n}, {\n  name: \"HOLLYWOOD\",\n  link: \"https://i.pinimg.com/originals/47/7e/be/477ebe73c816afaec4f525e43793870e.jpg\"\n}, {\n  name: \"Вулкан в Конго Ньирагонго\",\n  link: \"https://emosurf.com/i/0001DZ0gfEKe/vulkan_niragongo_zherlo.jpg\"\n}, {\n  name: \"Озеро Лохнесс\",\n  link: \"https://vsegda-pomnim.com/uploads/posts/2022-03/1648759720_59-vsegda-pomnim-com-p-chudovishche-ozera-lokhness-foto-63.jpg\"\n}, {\n  name: \"Чернобль\",\n  link: \"https://zhukov.eletsmuseum.ru/wp-content/uploads/2023/04/%D0%BF%D1%80%D0%B8%D0%BF%D1%8F%D1%82%D1%8C.jpg\"\n}, {\n  name: \"Зона 51\",\n  link: \"https://avatars.dzeninfra.ru/get-zen_doc/3362051/pub_61a7912c548e482352babb18_61a79191d6d4856dd76775fb/scale_1200\"\n}];\n\n\n//# sourceURL=webpack://mesto/./src/components/cards.js?");

/***/ }),

/***/ "./src/components/modal.js":
/*!*********************************!*\
  !*** ./src/components/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closePopup: () => (/* binding */ closePopup),\n/* harmony export */   openPopup: () => (/* binding */ openPopup)\n/* harmony export */ });\nfunction openPopup(popup) {\n  popup.classList.add('popup_is-opened');\n  popup.addEventListener('click', handleOverlayClick);\n  document.addEventListener('keydown', handleEsc);\n}\n;\nfunction closePopup(popup) {\n  popup.classList.remove('popup_is-opened');\n  popup.removeEventListener('click', handleOverlayClick);\n  document.removeEventListener('keydown', handleEsc);\n}\n;\nfunction handleOverlayClick(evt) {\n  evt.stopPropagation();\n  var evtTarget = evt.target;\n  if (evtTarget.classList.contains('popup_is-opened')) {\n    closePopup(evtTarget.closest('.popup'));\n  }\n  ;\n}\n;\nfunction handleEsc(evt) {\n  evt.stopPropagation();\n  var popupIsOpened = document.querySelector('.popup_is-opened');\n  if (evt.code === \"Escape\") {\n    closePopup(popupIsOpened);\n  }\n  ;\n}\n;\n\n\n//# sourceURL=webpack://mesto/./src/components/modal.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/index.css */ \"./src/pages/index.css\");\n/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/card */ \"./src/components/card.js\");\n/* harmony import */ var _components_cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/cards */ \"./src/components/cards.js\");\n/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/modal */ \"./src/components/modal.js\");\n\n\n\n\nvar cardTemplate = document.querySelector('#card-template').content;\nvar cardsList = document.querySelector('.places__list');\nvar popupTypeEdit = document.querySelector('.popup_type_edit');\nvar popupTypeAdd = document.querySelector('.popup_type_new-card');\nvar editBtn = document.querySelector('.profile__edit-button');\nvar addBtn = document.querySelector('.profile__add-button');\nvar closeBtnArr = document.querySelectorAll('.popup__close');\nvar formEditProfile = document.querySelector('form[name=\"edit-profile\"]');\nvar inputNameFormEditProfile = formEditProfile.querySelector('.popup__input_type_name');\nvar inputJobFormEditProfile = formEditProfile.querySelector('.popup__input_type_description');\nvar profileInfo = document.querySelector('.profile__info');\nvar nameField = profileInfo.querySelector('.profile__title');\nvar jobField = profileInfo.querySelector('.profile__description');\nvar formAddNewCard = document.querySelector('form[name=\"new-place\"]');\nvar inputNameFormAddNewCard = formAddNewCard.querySelector('.popup__input_type_card-name');\nvar inputUrlFormAddNewCard = formAddNewCard.querySelector('.popup__input_type_url');\nvar popups = document.querySelectorAll('.popup');\npopups.forEach(function (popup) {\n  popup.classList.add('popup_is-animated');\n});\nfunction handleProfileFormSubmit(evt, close) {\n  evt.preventDefault();\n  nameField.textContent = inputNameFormEditProfile.value;\n  jobField.textContent = inputJobFormEditProfile.value;\n  close(popupTypeEdit);\n  formEditProfile.reset();\n}\n;\nfunction handleImageFormSubmit(evt, list, createCard, template, close) {\n  evt.preventDefault();\n  var cardName = inputNameFormAddNewCard.value;\n  var url = inputUrlFormAddNewCard.value;\n  var cardDescription = {\n    link: url,\n    name: cardName\n  };\n  list.prepend(createCard(template, cardDescription, _components_card__WEBPACK_IMPORTED_MODULE_1__.deleteCard, _components_card__WEBPACK_IMPORTED_MODULE_1__.like, openPopupImage));\n  close(popupTypeAdd);\n}\n;\nfunction openPopupImage(cardImage) {\n  var popupTypeImage = document.querySelector('.popup_type_image');\n  var popupImage = popupTypeImage.querySelector('.popup__image');\n  popupImage.src = cardImage.src;\n  popupImage.alt = cardImage.alt;\n  var popupCaption = popupTypeImage.querySelector('.popup__caption');\n  popupCaption.textContent = cardImage.alt;\n  (0,_components_modal__WEBPACK_IMPORTED_MODULE_3__.openPopup)(popupTypeImage);\n}\n;\neditBtn.addEventListener('click', function (evt) {\n  evt.stopPropagation();\n  inputNameFormEditProfile.value = nameField.textContent;\n  inputJobFormEditProfile.value = jobField.textContent;\n  (0,_components_modal__WEBPACK_IMPORTED_MODULE_3__.openPopup)(popupTypeEdit);\n});\naddBtn.addEventListener('click', function (evt) {\n  evt.stopPropagation();\n  formAddNewCard.reset();\n  (0,_components_modal__WEBPACK_IMPORTED_MODULE_3__.openPopup)(popupTypeAdd);\n});\ncloseBtnArr.forEach(function (closeBtn) {\n  closeBtn.addEventListener('click', function (evt) {\n    var evtTarget = evt.target;\n    var closestPopup = evtTarget.closest('.popup');\n    (0,_components_modal__WEBPACK_IMPORTED_MODULE_3__.closePopup)(closestPopup);\n  });\n});\nformEditProfile.addEventListener('submit', function (evt) {\n  handleProfileFormSubmit(evt, _components_modal__WEBPACK_IMPORTED_MODULE_3__.closePopup);\n});\nformAddNewCard.addEventListener('submit', function (evt) {\n  handleImageFormSubmit(evt, cardsList, _components_card__WEBPACK_IMPORTED_MODULE_1__.createCard, cardTemplate, _components_modal__WEBPACK_IMPORTED_MODULE_3__.closePopup);\n});\n_components_cards__WEBPACK_IMPORTED_MODULE_2__.initialCards.forEach(function (item) {\n  cardsList.append((0,_components_card__WEBPACK_IMPORTED_MODULE_1__.createCard)(cardTemplate, item, _components_card__WEBPACK_IMPORTED_MODULE_1__.deleteCard, _components_card__WEBPACK_IMPORTED_MODULE_1__.like, openPopupImage));\n});\n\n//# sourceURL=webpack://mesto/./src/index.js?");

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://mesto/./src/pages/index.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
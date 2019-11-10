"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var elemImg = document.querySelector('.js-img');
var elemBtn = document.querySelector('.js-btn');
var originalBtnText;

function ajaxGetDogImg() {
  var resRandomDog, dataRandomDog, message;
  return _regenerator.default.async(function ajaxGetDogImg$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _regenerator.default.awrap(fetch('https://dog.ceo/api/breeds/image/random'));

        case 2:
          resRandomDog = _context.sent;
          _context.next = 5;
          return _regenerator.default.awrap(resRandomDog.json());

        case 5:
          dataRandomDog = _context.sent;
          message = dataRandomDog.message;
          return _context.abrupt("return", message);

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
}

function handleImgLoad(event) {
  elemBtn.removeAttribute('disabled');
  elemBtn.innerText = originalBtnText;
}

function handleBtnClick(event) {
  var urlDog;
  return _regenerator.default.async(function handleBtnClick$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          originalBtnText = elemBtn.innerText;
          elemBtn.setAttribute('disabled', 'disabled');
          elemBtn.innerText = 'Loading...';
          _context2.next = 5;
          return _regenerator.default.awrap(ajaxGetDogImg());

        case 5:
          urlDog = _context2.sent;
          elemImg.setAttribute('src', urlDog);

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  });
}

elemBtn.addEventListener('click', function (event) {
  handleBtnClick(event);
});
elemImg.addEventListener('load', function (event) {
  handleImgLoad(event);
});
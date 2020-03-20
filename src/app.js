import './scss/base.scss';
import baseHtml from './js/init/baseHTML';
import usersCurrentLocation from './js/api/usersCurrentLocation';
import timeTick from './js/init/timeTick';
import searchClick from './js/controls/searchClick';
import pressedButtonCheck from './js/controls/pressedButtonCheck';
import unitChangeCheck from './js/controls/unitChangeCheck';
import languageChangeCheck from './js/controls/languageChangeCheck';
import imageAPI from './js/api/imageAPI';

document.body.insertAdjacentHTML('afterbegin',baseHtml);

let timerId = setInterval(timeTick, 1000);

usersCurrentLocation();

document.querySelectorAll('.search--button')[0].addEventListener('click',searchClick);
document.addEventListener('keypress', pressedButtonCheck);
document.querySelector('.controls--units').addEventListener('click', unitChangeCheck);
document.querySelector('.controls--language').addEventListener('change', languageChangeCheck);
document.querySelector('.controls--refresh').addEventListener('click', imageAPI);

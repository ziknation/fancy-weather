import './scss/base.scss';
import baseHtml from './js/init/baseHTML';
import usersCurrentLocation from './js/api/usersCurrentLocation';
import timeTick from './js/init/timeTick'
import searchClick from './js/controls/searchClick'

document.body.insertAdjacentHTML('afterbegin',baseHtml);

let timerId = setInterval(timeTick, 1000);

usersCurrentLocation();

document.querySelectorAll('.search--button')[0].addEventListener('click',searchClick);
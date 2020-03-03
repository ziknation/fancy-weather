import './scss/base.scss';
import baseHtml from './js/init/baseHTML';
import usersCurrentLocation from './js/api/usersCurrentLocation';
import timeTick from './js/init/timeTick'

document.body.insertAdjacentHTML('afterbegin',baseHtml);

let timerId = setInterval(timeTick, 1000);

usersCurrentLocation();

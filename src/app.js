import './scss/base.scss';
import baseHtml from './js/initLanding.js';
import usersCurrentLocation from './js/api/usersCurrentLocation';
import fillMainData from './js/fillMainData'

document.body.insertAdjacentHTML('afterbegin',baseHtml);

usersCurrentLocation().then( location => {
  fillMainData(location);
});

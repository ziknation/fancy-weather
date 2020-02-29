import './scss/base.scss';
import baseHtml from './js/baseHTML';
import usersCurrentLocation from './js/api/usersCurrentLocation';
import fillMainData from './js/fillMainData';
import currentDate from './js/currentDate';

document.body.insertAdjacentHTML('afterbegin',baseHtml);

usersCurrentLocation().then( location => {
  fillMainData(location);
});

currentDate();
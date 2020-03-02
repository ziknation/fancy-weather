import './scss/base.scss';
import baseHtml from './js/baseHTML';
import usersCurrentLocation from './js/api/usersCurrentLocation';
import fillMainData from './js/fillMainData';
import tick from './js/tick'

document.body.insertAdjacentHTML('afterbegin',baseHtml);

let timerId = setInterval(tick, 1000);

usersCurrentLocation().then( location => {
  fillMainData(location);
});

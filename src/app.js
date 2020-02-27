import './scss/base.scss';
import baseHtml from './js/baseHTML';
import usersCurrentLocation from './js/api/usersCurrentLocation';
import fillMainData from './js/fillMainData';
import getWeather from './js/api/getWeather'

document.body.insertAdjacentHTML('afterbegin',baseHtml);

// usersCurrentLocation().then( location => {
//   fillMainData(location);
// });

getWeather();

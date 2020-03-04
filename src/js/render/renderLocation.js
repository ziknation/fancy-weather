import languages from '../data/languages';

export default function renderLocation(mainData){
  const location = document.querySelectorAll('.location--coordinates')[0];

  location.innerHTML = `${languages[mainData.language].coordinates.latitude}
  ${mainData.coordinates.latitude} <br>
  ${languages[mainData.language].coordinates.longitude}
  ${mainData.coordinates.longitude}`;
}
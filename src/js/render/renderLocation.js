export default function renderLocation(mainData){
  const location = document.querySelectorAll('.location--coordinates')[0];

  location.innerHTML = `Latitude: ${mainData.coordinates.latitude} <br>
  Longitude: ${mainData.coordinates.longitude}`;
}
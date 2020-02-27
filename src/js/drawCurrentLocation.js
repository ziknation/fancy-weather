export default function drawCurrentLocation(mainData){
  let place = document.querySelectorAll('.forecast--general_information-text-place')[0];
  let location = document.querySelectorAll('.location--coordinates')[0];

  place.innerHTML = mainData.place.city + ', ' + mainData.place.country;
  location.innerHTML = `Latitude: ${mainData.coordinates.latitude} <br>
  Longitude: ${mainData.coordinates.longitude}` ;
}
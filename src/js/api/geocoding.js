import getWeather from "./getWeather";

async function geocoding(mainData) {
  if (mainData.isButtonClick){
    const placeName = document.querySelector('.search--text').value;
    const apiKey = 'e42603ebcd574a43819b2249318b655a';

    const url = `https://api.opencagedata.com/geocode/v1/json?q=${placeName}&key=${apiKey}&language=${mainData.language}`;

    let response = await fetch(url);
    let data = await response.json();

    mainData.coordinates.latitude = data.results[0].geometry.lat;
    mainData.coordinates.longitude = data.results[0].geometry.lng;

    mainData.place.country = data.results[0].components.country;
    mainData.place.city = data.results[0].formatted.split(',')[0].split(' ')[0];
    getWeather(mainData);
  }
  else{
    const apiKey = 'e42603ebcd574a43819b2249318b655a';
    const api_url = 'https://api.opencagedata.com/geocode/v1/json';

    const latitude = mainData.coordinates.latitude;
    const longitude = mainData.coordinates.longitude;

    const url = `${api_url}?&q=${latitude}+${longitude}&key=${apiKey}&language=${mainData.language}`;

    const response = await fetch(url);
    const data = await response.json();
    mainData.place.country = data.results[0].components.country;
    mainData.place.city = data.results[0].components.city;
    console.log(data);
    getWeather(mainData);
  }
}

export default geocoding;
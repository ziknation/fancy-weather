import getWeather from "./getWeather";

async function geocoding(mainData) {
  let apiKey = 'e42603ebcd574a43819b2249318b655a';
  let api_url = 'https://api.opencagedata.com/geocode/v1/json';

  let latitude = mainData.coordinates.latitude;
  let longitude = mainData.coordinates.longitude;

  let url = `${api_url}?&q=${latitude}+${longitude}&key=${apiKey}`;

  let response = await fetch(url);
  let data = await response.json();
  mainData.place.country = data.results[0].components.country;
  mainData.place.city = data.results[0].components.city;
  getWeather(mainData);
}

export default geocoding;
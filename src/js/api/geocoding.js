import getWeather from "./getWeather";

async function geocoding(mainData) {
  if (mainData.isButtonClick){
    const placeName = document.querySelector('.search--text').value;
    const apiKey = 'e42603ebcd574a43819b2249318b655a';

    const urlEn = `https://api.opencagedata.com/geocode/v1/json?q=${placeName}&key=${apiKey}&language=en`;
    const responseEn = await fetch(urlEn);
    const dataEn = await responseEn.json();

    mainData.coordinates.latitude = dataEn.results[0].geometry.lat.toFixed(4);
    mainData.coordinates.longitude = dataEn.results[0].geometry.lng.toFixed(4);

    mainData.place.en.country = dataEn.results[0].components.country;
    mainData.place.en.city = dataEn.results[0].formatted.split(',')[0].split(' ')[0];

    const urlRu = `https://api.opencagedata.com/geocode/v1/json?q=${placeName}&key=${apiKey}&language=ru`;
    const responseRu = await fetch(urlRu);
    const dataRu = await responseRu.json();

    mainData.place.ru.country = dataRu.results[0].components.country;
    mainData.place.ru.city = dataRu.results[0].formatted.split(',')[0].split(' ')[0];
    getWeather(mainData);
  }
  else{
    const apiKey = 'e42603ebcd574a43819b2249318b655a';
    const api_url = 'https://api.opencagedata.com/geocode/v1/json';

    const latitude = mainData.coordinates.latitude;
    const longitude = mainData.coordinates.longitude;

    let urlEn = `${api_url}?&q=${latitude}+${longitude}&key=${apiKey}&language=en`;
    let responseEn = await fetch(urlEn);
    let dataEn = await responseEn.json();
    mainData.place.en.country = dataEn.results[0].components.country;
    mainData.place.en.city = dataEn.results[0].components.city;

    let urlRu = `${api_url}?&q=${latitude}+${longitude}&key=${apiKey}&language=ru`;
    let responseRu = await fetch(urlRu);
    let dataRu = await responseRu.json();
    mainData.place.ru.country = dataRu.results[0].components.country;
    mainData.place.ru.city = dataRu.results[0].components.city;

    getWeather(mainData);
  }
}

export default geocoding;
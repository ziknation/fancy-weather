import fillWeatherInMainData from '../data/fillWeatherInMainData'

async function getWeather(mainData){
  const latitude = mainData.coordinates.latitude;
  const longitude = mainData.coordinates.longitude;

  const API_TOKEN = "045626b11a3f1e3d0a24b85fae2e7635";
  const proxy = "https://evening-basin-27448.herokuapp.com/";
  const URL = `https://api.darksky.net/forecast/${API_TOKEN}/${latitude},${longitude}?units=si`;
  const response = await fetch(proxy+URL)
  const forecast = await response.json();

  fillWeatherInMainData(forecast, mainData);
}

export default getWeather;
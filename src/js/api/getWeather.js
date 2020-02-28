import drawCurrentLocation from '../drawCurrentLocation';
import mainData from '../mainData';
import fillWeatherInMainData from '../fillWeatherInMainData'

async function getWeather(){
  const key = '1f69c21cbdecced9f5e422b5efb63930';
  let city = 'Minsk';
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=en&units=metric&APPID=${key}`;  //my own url
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  
  fillWeatherInMainData(data, mainData);

  //drawCurrentLocation(mainData);
}

export default getWeather;
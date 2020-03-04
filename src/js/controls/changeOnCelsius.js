import renderCurrentInformation from '../render/renderCurrentInformation';
import renderNextDaysTemperature from '../render/renderNextDaysTemperature';

export default function changeOnCelsius(mainData){
  mainData.weather.current.temperature = Math.round((mainData.weather.current.temperature - 32) / 1.8);    //fahrenheit convert to celsius
  mainData.weather.current.feelsLike = Math.round((mainData.weather.current.feelsLike - 32) / 1.8);
  mainData.weather.day1.temperature = Math.round((mainData.weather.day1.temperature - 32) / 1.8);
  mainData.weather.day2.temperature = Math.round((mainData.weather.day2.temperature - 32) / 1.8);
  mainData.weather.day3.temperature = Math.round((mainData.weather.day3.temperature - 32) / 1.8);

  renderCurrentInformation(mainData);
  renderNextDaysTemperature(mainData);
}
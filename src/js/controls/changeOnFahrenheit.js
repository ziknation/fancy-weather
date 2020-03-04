import renderCurrentInformation from '../render/renderCurrentInformation';
import renderNextDaysTemperature from '../render/renderNextDaysTemperature';

export default function changeOnFahrenheit(mainData){
  mainData.weather.current.temperature = Math.round(mainData.weather.current.temperature * 1.8 + 32);    //celsius convert to fahrenheit
  mainData.weather.current.feelsLike = Math.round(mainData.weather.current.feelsLike * 1.8 + 32);
  mainData.weather.day1.temperature = Math.round(mainData.weather.day1.temperature * 1.8 + 32);
  mainData.weather.day2.temperature = Math.round(mainData.weather.day2.temperature * 1.8 + 32);
  mainData.weather.day3.temperature = Math.round(mainData.weather.day3.temperature * 1.8 + 32);

  renderCurrentInformation(mainData);
  renderNextDaysTemperature(mainData);
}
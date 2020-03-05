import renderMain from '../render/renderMain';

export default function fillWeatherInMainData(forecast, mainData){
  mainData.weather.current.sky = forecast.currently.icon.split('-').join('');
  mainData.weather.current.wind = Math.round(forecast.currently.windSpeed);
  mainData.weather.current.humidity = +forecast.currently.humidity * 100;

  mainData.weather.day1.sky = forecast.daily.data[1].icon.split('-').join('');;
  mainData.weather.day2.sky = forecast.daily.data[2].icon.split('-').join('');;
  mainData.weather.day3.sky = forecast.daily.data[3].icon.split('-').join('');;

  if (mainData.isFahrenheit){
    mainData.weather.current.temperature = Math.round(forecast.currently.temperature * 1.8 + 32);    //celsius convert to fahrenheit
    mainData.weather.current.feelsLike = Math.round(forecast.currently.apparentTemperature * 1.8 + 32);
    mainData.weather.day1.temperature = Math.round((forecast.daily.data[1].temperatureHigh + forecast.daily.data[1].temperatureLow) / 2 * 1.8 + 32);
    mainData.weather.day2.temperature = Math.round((forecast.daily.data[2].temperatureHigh + forecast.daily.data[2].temperatureLow) / 2 * 1.8 + 32);
    mainData.weather.day3.temperature = Math.round((forecast.daily.data[3].temperatureHigh + forecast.daily.data[3].temperatureLow) / 2 * 1.8 + 32);
    renderMain(mainData);
  }
  else{
    mainData.weather.current.temperature = Math.round(forecast.currently.temperature);
    mainData.weather.current.feelsLike = Math.round(forecast.currently.apparentTemperature);
    mainData.weather.day1.temperature = Math.round((forecast.daily.data[1].temperatureHigh + forecast.daily.data[1].temperatureLow) / 2);
    mainData.weather.day2.temperature = Math.round((forecast.daily.data[2].temperatureHigh + forecast.daily.data[2].temperatureLow) / 2);
    mainData.weather.day3.temperature = Math.round((forecast.daily.data[3].temperatureHigh + forecast.daily.data[3].temperatureLow) / 2);
    renderMain(mainData);
  }  
}
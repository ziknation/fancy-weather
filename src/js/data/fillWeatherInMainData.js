import renderMain from '../render/renderMain';

export default function fillWeatherInMainData(data, mainData){
  mainData.weather.current.sky = data.list[0].weather[0].main;
  mainData.weather.current.wind = Math.round(data.list[0].wind.speed);
  mainData.weather.current.humidity = +data.list[0].main.humidity;

  mainData.weather.day1.sky = data.list[8].weather[0].main;
  mainData.weather.day2.sky = data.list[16].weather[0].main;
  mainData.weather.day3.sky = data.list[24].weather[0].main;

  if (mainData.isFahrenheit){
    mainData.weather.current.temperature = Math.round(data.list[0].main.temp * 1.8 + 32);    //celsius convert to fahrenheit
    mainData.weather.current.feelsLike = Math.round(data.list[0].main.feels_like * 1.8 + 32);
    mainData.weather.day1.temperature = Math.round(data.list[8].main.temp * 1.8 + 32);
    mainData.weather.day2.temperature = Math.round(data.list[16].main.temp * 1.8 + 32);
    mainData.weather.day3.temperature = Math.round(data.list[24].main.temp * 1.8 + 32);
    renderMain(mainData);
  }
  else{
    mainData.weather.current.temperature = Math.round(data.list[0].main.temp);
    mainData.weather.current.feelsLike = Math.round(data.list[0].main.feels_like);
    mainData.weather.day1.temperature = Math.round(data.list[8].main.temp);
    mainData.weather.day2.temperature = Math.round(data.list[16].main.temp);
    mainData.weather.day3.temperature = Math.round(data.list[24].main.temp);
    renderMain(mainData);
  }  
}
export default function fillWeatherInMainData(data, mainData){
  mainData.weather.current.sky = data.list[0].weather[0].description;
  mainData.weather.current.temperature = data.list[0].main.temp;
  mainData.weather.current.feelsLike = data.list[0].main.feels_like;
  mainData.weather.current.wind = data.list[0].wind.speed;
  mainData.weather.current.humidity = data.list[0].main.humidity;

  mainData.weather.day1.sky = data.list[8].weather[0].description;
  mainData.weather.day1.temperature = data.list[8].main.temp;

  mainData.weather.day2.sky = data.list[16].weather[0].description;
  mainData.weather.day2.temperature = data.list[16].main.temp;

  mainData.weather.day3.sky = data.list[24].weather[0].description;
  mainData.weather.day3.temperature = data.list[24].main.temp;
  console.log(mainData.weather);
}
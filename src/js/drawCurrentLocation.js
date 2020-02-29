export default function drawCurrentLocation(mainData){
  let place = document.querySelectorAll('.forecast--general_information-text-place')[0];
  let location = document.querySelectorAll('.location--coordinates')[0];
  let currentTemperature = document.querySelectorAll('.forecast--main_information-temperature')[0];
  let additionInformation = document.querySelectorAll('.forecast--main_information-addition')[0];
  let currentImg = document.querySelectorAll('.forecast--general_information-img')[0];
  let day1Img = document.querySelectorAll('.day_1_img')[0];
  let day2Img = document.querySelectorAll('.day_2_img')[0];
  let day3Img = document.querySelectorAll('.day_3_img')[0];

  let degSign = `<span class="forecast--main_information-temperature-span">&deg;</span>`;
  
  place.innerHTML = mainData.place.city + ', ' + mainData.place.country;
  
  location.innerHTML = `Latitude: ${mainData.coordinates.latitude} <br>
  Longitude: ${mainData.coordinates.longitude}`;
  
  currentTemperature.innerHTML = Math.round(mainData.weather.current.temperature) + degSign;
  
  additionInformation.innerHTML = `${mainData.weather.current.sky} <br>
  Feels like: ${Math.round(mainData.weather.current.feelsLike)} &deg;<br>
  Wind: ${Math.round(mainData.weather.current.wind)} m/s <br>
  Humidity: ${mainData.weather.current.humidity} %`;

  currentImg.src = `/src/img/animated/${mainData.weather.current.sky}.svg`;
  currentImg.alt = mainData.weather.current.sky;
  
  day1Img.src = `/src/img/animated/${mainData.weather.day1.sky}.svg`;
  day1Img.alt = mainData.weather.day1.sky;
  day2Img.src = `/src/img/animated/${mainData.weather.day2.sky}.svg`;
  day2Img.alt = mainData.weather.day2.sky;
  day3Img.src = `/src/img/animated/${mainData.weather.day3.sky}.svg`;
  day3Img.alt = mainData.weather.day3.sky;
}
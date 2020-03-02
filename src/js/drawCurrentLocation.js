export default function drawCurrentLocation(mainData){
  let place = document.querySelectorAll('.forecast--general_information-text-place')[0];
  let location = document.querySelectorAll('.location--coordinates')[0];
  let currentTemperature = document.querySelectorAll('.forecast--main_information-temperature')[0];
  let additionInformation = document.querySelectorAll('.forecast--main_information-addition')[0];
  let currentImg = document.querySelectorAll('.forecast--general_information-img')[0];
  let day1Img = document.querySelectorAll('.day_1_img')[0];
  let day2Img = document.querySelectorAll('.day_2_img')[0];
  let day3Img = document.querySelectorAll('.day_3_img')[0];
  let day1Temp = document.querySelectorAll('.day_1_temp')[0];
  let day2Temp = document.querySelectorAll('.day_2_temp')[0];
  let day3Temp = document.querySelectorAll('.day_3_temp')[0];
  let days = document.querySelectorAll('.forecast--next_days')[0].childNodes;

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

  let date = new Date();
  let day1 = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
  let day2 = new Date(day1.getFullYear(), day1.getMonth(), day1.getDate() + 1);
  let day3 = new Date(day2.getFullYear(), day2.getMonth(), day2.getDate() + 1);
  
  days[1].childNodes[1].innerHTML = day1.toDateString().split(' ')[0];
  days[3].childNodes[1].innerHTML = day2.toDateString().split(' ')[0];
  days[5].childNodes[1].innerHTML = day3.toDateString().split(' ')[0];

  day1Temp.innerHTML = mainData.weather.day1.temperature + '&deg;';
  day2Temp.innerHTML = mainData.weather.day2.temperature + '&deg;';
  day3Temp.innerHTML = mainData.weather.day3.temperature + '&deg;';
}
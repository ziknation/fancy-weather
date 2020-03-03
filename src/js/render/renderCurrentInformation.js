export default function renderCurrentInformation(mainData){
  const place = document.querySelectorAll('.forecast--general_information-text-place')[0];
  const currentTemperature = document.querySelectorAll('.forecast--main_information-temperature')[0];
  const additionInformation = document.querySelectorAll('.forecast--main_information-addition')[0];

  const degSign = `<span class="forecast--main_information-temperature-span">&deg;</span>`;
  
  place.innerHTML = mainData.place.city + ', ' + mainData.place.country;
  currentTemperature.innerHTML = mainData.weather.current.temperature + degSign;
  additionInformation.innerHTML = `${mainData.weather.current.sky} <br>
  Feels like: ${mainData.weather.current.feelsLike} &deg;<br>
  Wind: ${mainData.weather.current.wind} m/s <br>
  Humidity: ${mainData.weather.current.humidity} %`;
}
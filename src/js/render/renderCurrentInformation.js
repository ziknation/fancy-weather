import languages from '../data/languages';

export default function renderCurrentInformation(mainData){
  const place = document.querySelectorAll('.forecast--general_information-text-place')[0];
  const currentTemperature = document.querySelectorAll('.forecast--main_information-temperature')[0];
  const additionInformation = document.querySelectorAll('.forecast--main_information-addition')[0];

  const degSign = `<span class="forecast--main_information-temperature-span">&deg;</span>`;
  
  place.innerHTML = mainData.place[mainData.language].city + ', ' + 
  mainData.place[mainData.language].country;

  currentTemperature.innerHTML = mainData.weather.current.temperature + degSign;
  additionInformation.innerHTML = `${languages[mainData.language].weather[mainData.weather.current.sky]} <br>
  ${languages[mainData.language].currentInformation.feels}
  ${mainData.weather.current.feelsLike} &deg;<br>
  ${languages[mainData.language].currentInformation.wind}
  ${mainData.weather.current.wind} 
  ${languages[mainData.language].currentInformation.speedUnit} <br>
  ${languages[mainData.language].currentInformation.humidity}
  ${mainData.weather.current.humidity} %`;
}
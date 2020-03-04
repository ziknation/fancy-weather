export default function renderNextDaysTemperature(mainData){
  const day1Temp = document.querySelectorAll('.day_1_temp')[0];
  const day2Temp = document.querySelectorAll('.day_2_temp')[0];
  const day3Temp = document.querySelectorAll('.day_3_temp')[0];

  day1Temp.innerHTML = mainData.weather.day1.temperature + '&deg;';
  day2Temp.innerHTML = mainData.weather.day2.temperature + '&deg;';
  day3Temp.innerHTML = mainData.weather.day3.temperature + '&deg;';
}
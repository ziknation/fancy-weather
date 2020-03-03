export default function renderDate(mainData){
  const day1Temp = document.querySelectorAll('.day_1_temp')[0];
  const day2Temp = document.querySelectorAll('.day_2_temp')[0];
  const day3Temp = document.querySelectorAll('.day_3_temp')[0];
  const days = document.querySelectorAll('.forecast--next_days')[0].childNodes;

  const date = new Date();
  const day1 = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
  const day2 = new Date(day1.getFullYear(), day1.getMonth(), day1.getDate() + 1);
  const day3 = new Date(day2.getFullYear(), day2.getMonth(), day2.getDate() + 1);
  
  days[1].childNodes[1].innerHTML = day1.toDateString().split(' ')[0];
  days[3].childNodes[1].innerHTML = day2.toDateString().split(' ')[0];
  days[5].childNodes[1].innerHTML = day3.toDateString().split(' ')[0];

  day1Temp.innerHTML = mainData.weather.day1.temperature + '&deg;';
  day2Temp.innerHTML = mainData.weather.day2.temperature + '&deg;';
  day3Temp.innerHTML = mainData.weather.day3.temperature + '&deg;';
}
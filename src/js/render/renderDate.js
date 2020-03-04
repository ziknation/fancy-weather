import languages from '../data/languages';
import mainData from '../data/mainData';

export default function renderDate(){
  const days = document.querySelectorAll('.forecast--next_days')[0].childNodes;

  const date = new Date();
  const day1 = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
  const day2 = new Date(day1.getFullYear(), day1.getMonth(), day1.getDate() + 1);
  const day3 = new Date(day2.getFullYear(), day2.getMonth(), day2.getDate() + 1);
  
  days[1].childNodes[1].innerHTML = languages[mainData.language].weekDays[day1.toDateString().split(' ')[0]];
  days[3].childNodes[1].innerHTML = languages[mainData.language].weekDays[day2.toDateString().split(' ')[0]];
  days[5].childNodes[1].innerHTML = languages[mainData.language].weekDays[day3.toDateString().split(' ')[0]];
}
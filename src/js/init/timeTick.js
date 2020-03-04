import languages from "../data/languages";
import mainData from "../data/mainData";

export default function tick(){
  const date = new Date();
  let dateP = document.querySelectorAll('.forecast--general_information-text-date')[0];
  let day = languages[mainData.language].weekDays[date.toDateString().split(' ')[0]];
  let monthDate = date.getDate();
  let month = languages[mainData.language].months[date.toDateString().split(' ')[1]];
  let hours = date.getHours();
  let minutes = date.getMinutes() <= 9 ? '0' + date.getMinutes() : date.getMinutes();

  dateP.innerHTML = `${day} ${monthDate} ${month}
  ${hours}:${minutes}`;
}
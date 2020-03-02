export default function tick(){
  const date = new Date();
  let dateP = document.querySelectorAll('.forecast--general_information-text-date')[0];
  let day = date.toDateString().split(' ')[0];
  let monthDate = date.getDate();
  let month = date.toDateString().split(' ')[1];
  let hours = date.getHours();
  let minutes = date.getMinutes() <= 9 ? '0' + date.getMinutes() : date.getMinutes();
  let seconds = date.getSeconds() <= 9 ? '0' + date.getSeconds() : date.getSeconds()

  dateP.innerHTML = `${day} ${monthDate} ${month}
  ${hours}:${minutes}:${seconds}`;
}
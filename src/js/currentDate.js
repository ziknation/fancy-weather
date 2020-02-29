export default function currentDate(){
  let dateP = document.querySelectorAll('.forecast--general_information-text-date')[0];
  const date = new Date();
  
  dateP.innerHTML = `${date.toDateString().split(' ')[0]} ${date.getDate()} ${date.toDateString().split(' ')[1]} ${date.getMinutes() + 1}:${date.getSeconds() + 1}`;
  console.log(date.toDateString())
}
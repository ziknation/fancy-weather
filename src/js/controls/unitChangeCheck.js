import mainData from '../data/mainData';
import changeOnFahrenheit from './changeOnFahrenheit';
import changeOnCelsius from './changeOnCelsius'

export default function unitChangeCheck(event){
  if (event.target.innerHTML === 'F' && mainData.isFahrenheit == false){
    event.target.classList.add('selected_unit');
    event.target.nextElementSibling.classList.remove('selected_unit');
    mainData.isFahrenheit = true;
    changeOnFahrenheit(mainData);
  }
  else if (event.target.innerHTML === 'C' && mainData.isFahrenheit == true){
    event.target.classList.add('selected_unit');
    event.target.previousElementSibling.classList.remove('selected_unit');
    mainData.isFahrenheit = false;
    changeOnCelsius(mainData);
  }
}
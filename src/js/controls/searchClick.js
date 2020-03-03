import mainData from '../data/mainData';
import geocoding from '../api/geocoding';

export default function searchClick(){
  if (document.querySelector('.search--text').value != ''){
    mainData.isButtonClick = true;
    geocoding(mainData);
  }
  else{
    alert('Сначала введите название города');
  }
}
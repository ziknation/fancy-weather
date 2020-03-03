import renderDate from './renderDate';
import renderImages from './renderImages';
import renderLocation from './renderLocation';
import renderCurrentInformation from './renderCurrentInformation';
import renderMap from './renderMap';

export default async function renderMain(mainData){
  renderCurrentInformation(mainData);
  renderLocation(mainData);
  renderImages(mainData);
  renderDate(mainData);
  if (mainData.isButtonClick){
    document.querySelector('#map').innerHTML = '';
    ymaps.ready(init);
    function init(){
      let myMap = new ymaps.Map("map", {
        center: [mainData.coordinates.latitude, mainData.coordinates.longitude],
        zoom: 10,
        controls: ['trafficControl', 'typeSelector', 'fullscreenControl']
      });
    }
  }
  else{
    renderMap(mainData);
  }
}
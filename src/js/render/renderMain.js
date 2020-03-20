import renderDate from './renderDate';
import renderImages from './renderImages';
import renderLocation from './renderLocation';
import renderCurrentInformation from './renderCurrentInformation';
import renderMap from './renderMap';
import renderNextDaysTemperature from './renderNextDaysTemperature';
import imageAPI from '../api/imageAPI';

export default async function renderMain(mainData){
  renderCurrentInformation(mainData);
  renderLocation(mainData);
  renderImages(mainData);
  renderDate(mainData);
  renderNextDaysTemperature(mainData);

  if (mainData.isButtonClick || mainData.isLanguageChange){
    document.querySelector('#map').innerHTML = '';
    renderMap(mainData);
  }
  else{
    renderMap(mainData);
  }
  imageAPI(mainData);
}
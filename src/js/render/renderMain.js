import renderDate from './renderDate';
import renderImages from './renderImages';
import renderLocation from './renderLocation';
import renderCurrentInformation from './renderCurrentInformation';
import renderMap from './renderMap';

export default function renderMain(mainData){
  renderCurrentInformation(mainData);
  renderLocation(mainData);
  renderImages(mainData);
  renderDate(mainData);
  renderMap(mainData);
}
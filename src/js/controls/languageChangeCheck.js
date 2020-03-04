import mainData from '../data/mainData';
import interfaceLanguageChange from './interfaceLanguageChange'
import geocoding from '../api/geocoding';
import renderCurrentInformation from '../render/renderCurrentInformation';
import renderLocation from '../render/renderLocation';
import renderDate from '../render/renderDate';

export default function languageChangeCheck(event){
  mainData.language = event.target.value;
  mainData.isLanguageChange = true;
  interfaceLanguageChange(mainData.language);
  renderCurrentInformation(mainData);
  renderLocation(mainData);
  renderDate(mainData);
}
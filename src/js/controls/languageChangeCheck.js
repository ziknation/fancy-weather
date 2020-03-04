import mainData from '../data/mainData';
import interfaceLanguageChange from './interfaceLanguageChange'
import geocoding from '../api/geocoding';
import renderCurrentInformation from '../render/renderCurrentInformation';
import renderLocation from '../render/renderLocation';

export default function languageChangeCheck(event){
  mainData.language = event.target.value;
  mainData.isLanguageChange = true;
  mainData.isLangJustChanged = true;
  interfaceLanguageChange(mainData.language);
  renderCurrentInformation(mainData);
  renderLocation(mainData)
}
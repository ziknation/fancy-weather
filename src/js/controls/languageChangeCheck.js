import mainData from '../data/mainData';
import interfaceLanguageChange from './interfaceLanguageChange'
import geocoding from '../api/geocoding';

export default function languageChangeCheck(event){
  mainData.language = event.target.value;
  mainData.isLanguageChange = true;
  interfaceLanguageChange(mainData.language);
  geocoding(mainData);
}
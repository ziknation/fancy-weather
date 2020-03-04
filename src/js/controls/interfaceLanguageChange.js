import languages from '../data/languages';
import mainData from '../data/mainData';

export default function interfaceLanguageChange(lang){
  document.querySelector('.search--button').innerHTML = languages[lang].search;
}
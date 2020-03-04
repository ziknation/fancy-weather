import languages from '../data/languages';
import mainData from '../data/mainData';

export default function interfaceLanguageChange(lang){
  if (lang === 'en'){
    document.querySelector('.search--button').innerHTML = languages.en.search;
  }
  else if (lang === 'ru'){
    document.querySelector('.search--button').innerHTML = languages.ru.search;
  }
}
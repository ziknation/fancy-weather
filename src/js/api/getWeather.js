import drawCurrentLocation from '../drawCurrentLocation';

async function getWeather(){
  const key = '1f69c21cbdecced9f5e422b5efb63930';
  let city = 'Minsk';
  //const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=en&units=metric&APPID=${key}`;  //my own url
  let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ua&units=metric&APPID=a9a3a62789de80865407c0452e9d1c27`;  //temporary url

  let response = await fetch(url);
  let data = await response.json();
  console.log(data);

  //drawCurrentLocation(mainData);
}

export default getWeather;
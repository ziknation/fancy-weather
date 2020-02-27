import mainData from './mainData'

export default function fillMainData(location){
  mainData.coordinates.latitude = location[0];
  mainData.coordinates.longitude = location[1];
  console.log(mainData);
}
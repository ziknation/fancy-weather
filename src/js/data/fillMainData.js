import mainData from './mainData'
import geocoding from '../api/geocoding'

export default function fillMainData(location){
  mainData.coordinates.latitude = location[0];
  mainData.coordinates.longitude = location[1];
  geocoding(mainData);
}
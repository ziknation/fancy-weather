import mainData from '../data/mainData';
import geocoding from '../api/geocoding';

async function usersCurrentLocation() {
  let token = '680fc6f5c1667a';

  let url = `https://ipinfo.io/json?token=${token}`;

  const data = await fetch(url).then(res => res.json());
  const location = data.loc.split(',');

  mainData.coordinates.latitude = location[0];
  mainData.coordinates.longitude = location[1];

  geocoding(mainData);
}

export default usersCurrentLocation;  //gets coordinates(latitude and longitude) by ip

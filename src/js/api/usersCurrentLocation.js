import mainData from '../mainData'

//let token = '680fc6f5c1667a';
let token = 'eb5b90bb77d46a';

async function usersCurrentLocation() {
  let url = `https://ipinfo.io/json?token=${token}`;

  const data = await fetch(url).then(res => res.json());
  const location = data.loc.split(',');
  return location;
}

export default usersCurrentLocation;  //gets coordinates(latitude and longitude) by ip

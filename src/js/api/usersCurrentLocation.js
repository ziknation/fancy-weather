let token = '680fc6f5c1667a';

async function usersCurrentLocation() {
  let url = `https://ipinfo.io/json?token=${token}`;

  let response = await fetch(url);
  let data = await response.json();
  return data;
}

export default usersCurrentLocation;
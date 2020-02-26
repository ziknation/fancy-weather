let apiKey = 'e42603ebcd574a43819b2249318b655a';
let latitude = '55.75';
let longitude = '37.62';

let api_url = 'https://api.opencagedata.com/geocode/v1/json'

let request_url = api_url + '?' + '&q=' + latitude + '+' + longitude + '&key=' + apiKey;

async function geocoding() {
  let url = request_url;

  let response = await fetch(url);
  let data = await response.json();
  return data;
}

export default geocoding;
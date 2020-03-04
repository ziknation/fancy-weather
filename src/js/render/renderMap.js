export default function renderMap(mainData){
  const latitude = mainData.coordinates.latitude;
  const longitude = mainData.coordinates.longitude;
  ymaps.ready(init);
  function init(){
    let myMap = new ymaps.Map("map", {
      center: [latitude, longitude],
      zoom: 10,
      controls: ['trafficControl', 'typeSelector', 'fullscreenControl']
    });
  }
}
export default function renderImages(mainData){
  const currentImg = document.querySelectorAll('.forecast--img')[0];
  const day1Img = document.querySelectorAll('.day_1_img')[0];
  const day2Img = document.querySelectorAll('.day_2_img')[0];
  const day3Img = document.querySelectorAll('.day_3_img')[0];

  currentImg.src = `/src/img/animated/${mainData.weather.current.sky}.svg`;
  currentImg.alt = mainData.weather.current.sky;
  
  day1Img.src = `/src/img/animated/${mainData.weather.day1.sky}.svg`;
  day1Img.alt = mainData.weather.day1.sky;
  day2Img.src = `/src/img/animated/${mainData.weather.day2.sky}.svg`;
  day2Img.alt = mainData.weather.day2.sky;
  day3Img.src = `/src/img/animated/${mainData.weather.day3.sky}.svg`;
  day3Img.alt = mainData.weather.day3.sky;
}
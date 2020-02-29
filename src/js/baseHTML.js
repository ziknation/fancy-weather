const baseHtml = `<header>
<div class="wrapper">
  <div class="controls">
    <div class="controls--refresh"><img src="./src/img/refreshFront.png" alt="refreshFront"></div>
    <select class="controls--language">
      <option value="en">EN</option>
      <option value="ru">RU</option>
      <option value="be">BE</option>
    </select>
    <div class="controls--units">
      <p class="controls--units-fahrenheit">F</p>
      <p class="controls--units-celsius">C</p>
    </div>        
  </div>
  <form class="search">
    <input type="text" class="search--text">
    <input type="submit" value="SEARCH" class="search--submit">
  </form>
</div>
</header>

<main>
<div class="forecast">
  <div class="forecast--general_information">
    <div class="forecast--general_information-text">
      <p class="forecast--general_information-text-place"></p>
      <p class="forecast--general_information-text-date">Mon 28 October 17:23</p>
    </div>
    <img src="/src/img/animated/weather.svg" alt="weatherSVG" class="forecast--general_information-img">
  </div>
  <div class="forecast--main_information">
    <p class="forecast--main_information-temperature"><p>
    <p class="forecast--main_information-addition">
      overcast <br>
      Feels like: 7° <br>
      Wind: 2 m/s <br>
      Humidity: 83%</p>
  </div>
  <div class="forecast--next_days">
    <div class="forecast--next_days-first">
      <p class="forecast--next_days-first-day">Tuesday</p>
      <div class="next_days_wrapper">
        <div class="forecast--next_days-first-icon next_days_icon">
          <p>7&deg;</p>
        </div>
        <img src="/src/img/animated/weather.svg" alt="weatherSVG" class="next_days_img day_1_img">
      </div>
    </div>
    <div class="forecast--next_days-second">
      <p class="forecast--next_days-second-day">Wednesday</p>
      <div class="next_days_wrapper">
        <div class="forecast--next_days-second-icon next_days_icon">
          <p>7&deg;</p>
        </div>
        <img src="/src/img/animated/weather.svg" alt="weatherSVG" class="next_days_img day_2_img">
      </div>
    </div>
    <div class="forecast--next_days-third">
      <p class="forecast--next_days-third-day">Thursday</p>
      <div class="next_days_wrapper">
        <div class="forecast--next_days-third-icon next_days_icon">
          <p>7&deg;</p>
        </div>
        <img src="/src/img/animated/weather.svg" alt="weatherSVG" class="next_days_img day_3_img">
      </div>
    </div>
  </div>
</div>
<div class="location">
  <div class="location--map">
    <img src="/src/img/map.png" alt="map">
  </div>
  <div class="location--coordinates"></div>
</div>
</main>`;

export default baseHtml;

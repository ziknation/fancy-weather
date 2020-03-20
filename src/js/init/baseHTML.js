const baseHtml = `<header>
<div class="wrapper">
  <div class="controls">
    <div class="controls--refresh"><img src="./src/img/refreshFront.png" alt="refreshFront"></div>
    <select class="controls--language">
      <option value="en">EN</option>
      <option value="ru">RU</option>
    </select>
    <div class="controls--units">
      <p class="controls--units-fahrenheit">F</p>
      <p class="controls--units-celsius selected_unit">C</p>
    </div>        
  </div>
  <div class="search">
    <input type="text" class="search--text">
    <button class="search--button">SEARCH</button>
  </div>
</div>
</header>

<main>
<div class="forecast">
  <div class="forecast--general_information">
    <div class="forecast--general_information-text">
      <p class="forecast--general_information-text-place"></p>
      <p class="forecast--general_information-text-date">Mon 28 October 17:23</p>
    </div>
  </div>
  <img src="" alt="weatherSVG" class="forecast--img">
  <div class="forecast--main_information">
    <p class="forecast--main_information-temperature"><p>
    <p class="forecast--main_information-addition"></p>
  </div>
  <div class="forecast--next_days">
    <div class="forecast--next_days-first">
      <p class="forecast--next_days-first-day"></p>
      <div class="next_days_wrapper">
        <div class="forecast--next_days-first-icon next_days_icon">
          <p class="day_1_temp">7&deg;</p>
        </div>
        <img src="" alt="weatherSVG" class="next_days_img day_1_img">
      </div>
    </div>
    <div class="forecast--next_days-second">
      <p class="forecast--next_days-second-day">Wednesday</p>
      <div class="next_days_wrapper">
        <div class="forecast--next_days-second-icon next_days_icon">
          <p class="day_2_temp">7&deg;</p>
        </div>
        <img src="" alt="weatherSVG" class="next_days_img day_2_img">
      </div>
    </div>
    <div class="forecast--next_days-third">
      <p class="forecast--next_days-third-day">Thursday</p>
      <div class="next_days_wrapper">
        <div class="forecast--next_days-third-icon next_days_icon">
          <p class="day_3_temp">7&deg;</p>
        </div>
        <img src="" alt="weatherSVG" class="next_days_img day_3_img">
      </div>
    </div>
  </div>
</div>
<div class="location">
  <div id="map" class="location--map"></div>
  <div class="location--coordinates"></div>
</div>
</main>`;

export default baseHtml;

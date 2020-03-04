let mainData = {
  coordinates:{
    latitude: '',
    longitude: ''
  },
  place:{
    en:{
      country: '',
      city: ''
    },
    ru:{
      country: '',
      city: ''
    }
  },
  weather:{
    current:{
      sky: '',
      temperature: '',
      feelsLike: '',
      wind: '',
      humidity: ''
    },
    day1:{
      sky: '',
      temperature: ''
    },
    day2:{
      sky: '',
      temperature: ''
    },
    day3:{
      sky: '',
      temperature: ''
    },
  },
  isButtonClick: false,
  isFahrenheit: false,
  language: 'en',
  isLanguageChange: false,
  isLangJustChanged: false,
};

export default mainData;
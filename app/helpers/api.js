var axios = require('axios');

var _baseURL = '//api.openweathermap.org/data/2.5/';
var _APIKEY = 'd501a0f99eabcb1ce51db5dd35edd822';

function prepRouteParams(queryStringData){
  return Object.keys(queryStringData)
    .map(function(key){
      return key + '='+ encodeURIComponent(queryStringData[key]);
    }).join('&')
}

function prepUrl (type, queryStringData) {
  return _baseURL + type + '?' + prepRouteParams(queryStringData);
}

function getQueryStringData(city){
  return {
    q: city,
    type: 'accurate',
    APPID: _APIKEY,
    cnt: 5,
    ssl : true,
    headers: 'Access-Control-Allow-Origin: *'
  }
}

function getCurrentWeather(city){
  var queryStringData = getQueryStringData(city);
  var url = prepUrl('weather', queryStringData)

  return axios.get(url)
    .then(function(currentWeatherData){
      return currentWeatherData.data;
    })
}

function getForecast(city){
  var queryStringData = getQueryStringData(city);
  var url = prepUrl('forecast/daily', queryStringData)

  return axios.get(url)
    .then(function(forecastData){
      return forecastData.data;
    })
}

module.exports = {
  getCurrentWeather: getCurrentWeather,
  getForecast: getForecast
};

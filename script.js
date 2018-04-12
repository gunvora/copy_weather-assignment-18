fetch("http://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&units=metric&APPID=22cab44144657da715c9945e9fcb1e07").then((response) => {
  return response.json()
}).then((json)  => {
  const cityName = json.name;
  document.getElementById('city').innerHTML = cityName;
  const weatherType = json.weather[0].description;
  document.getElementById('type').innerHTML = weatherType;
  const temperature = json.main.temp;
  document.getElementById('temp').innerHTML = (temperature.toFixed(1) +" &#176 C");
  const checkSunStatus = showSunImage(weatherType);
  // console.log(checkSunStatus);

  const secSunrise = json.sys.sunrise;
  const dateSunrise = new Date(secSunrise * 1000);
  const timestrSunrise = dateSunrise.toLocaleTimeString();
  const timestrSunriseShort = timestrSunrise.slice(0 , 5)
  document.getElementById('rise').innerHTML = timestrSunriseShort;

  var secSunset = json.sys.sunset;
  var dateSunset = new Date(secSunset * 1000);
  var timestrSunset = dateSunset.toLocaleTimeString();
  var timestrSunsetShort = timestrSunset.slice(0 , 5)
  document.getElementById('set').innerHTML = timestrSunsetShort;
})


//Below image to decide whether to show SUN image

const showSunImage = (weatherType)  =>  {
    if(weatherType == "clear sky"){
    var img = document.getElementById('sunshine');
    img.style.visibility = 'visible';
  } else {
  }
}

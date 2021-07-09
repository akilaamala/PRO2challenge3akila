mapboxgl.accessToken = "pk.eyJ1IjoiYWtpbGFhbWFsYSIsImEiOiJja3FwMjVtaHUwcTgwMnZwNXJvNHB0N2N0In0.MS09WBDgtZz8NM02hZam-A"

var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/satellite-streets-v11',

center: [4.322840, 52.067101],
zoom: 10,
});

function getAPIdata() {

   var url = 'https://api.openweathermap.org/data/2.5/weather';
   var apiKey ='fbdf505db145dd956f16c39df1d95ff8';
   var city = 'den haag';
   var request = url + '?' + 'appid=' + apiKey + '&' + 'q=' + city;
   
   fetch(request)
   
   .then(function(response) {
      if(!response.ok) throw Error(response.statusText);
      return response.json();
   })
   
   .then(function(response) {
      onAPISucces(response);  
   })
   
}

function onAPISucces(response) {
   
   console.log(response);

   var city = response.name;

   var humid = response.main.humidity;

   var celsius = Math.floor(response.main.temp - 273.15);

   var weather = response.weather[0].description;


   var localWeather = document.getElementById('weather');
   localWeather.innerHTML = city + '<br>' + 'humidity: <br>'+ humid + '<br>' + celsius + '&#176;C <br>' + weather +'<br>';

}

getAPIdata();










mapboxgl.accessToken = "pk.eyJ1IjoiYWtpbGFhbWFsYSIsImEiOiJja3FwMjVtaHUwcTgwMnZwNXJvNHB0N2N0In0.MS09WBDgtZz8NM02hZam-A"

var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/satellite-streets-v11',

center: [4.322840, 52.067101],
zoom: 10,
});

function getAPIdata() {

   var url = 'https://api.openweathermap.org/data/2.5/forecast';
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

   var city = response.city.name;
   var popul = response.city.population;
   var timezone = response.city.timezone;


   var localNews = document.getElementById('news');
   localNews.innerHTML = city + '<br>' + 'Population: <br>' + popul + '<br>' + 'Timezone: <br>' + timezone;

}

getAPIdata();










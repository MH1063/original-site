var query = location.search;
var value = query.split('=');
var map;
console.log(value[1]);

if(value[1]==1){

  /*google api*/
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center:  {lat: 39.7486606, lng: -105.0097915},
      zoom: 12
    });
  
    var marker = new google.maps.Marker({
      position: {lat: 39.7486606, lng: -105.0097915},
      map: map
    });
  }

}else if(value[1]==2){
  
  /*google api*/
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center:  {lat: 35.463429, lng: -97.5173025},
      zoom: 12
    });
  
    var marker = new google.maps.Marker({
      position: {lat: 35.463429, lng: -97.5173025},
      map: map
    });
  }
  
}else if(value[1]==3){
  
  /*google api*/
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 40.7682721, lng: -111.9032761},
      zoom: 12
    });
  
    var marker = new google.maps.Marker({
      position: {lat: 40.7682721, lng: -111.9032761},
      map: map
    });
  }
}else if(value[1]==4){

/*google api*/
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center:   {lat: 45.5315688, lng: -122.669031},
      zoom: 12
    });
  
    var marker = new google.maps.Marker({
      position:  {lat: 45.5315688, lng: -122.669031},
      map: map
    });
  }
}else if(value[1]==5){
  
  /*google api*/
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center:  {lat: 44.9794671, lng: -93.2782834},
      zoom: 12
    });
  
    var marker = new google.maps.Marker({
      position: {lat: 44.9794671, lng: -93.2782834},
      map: map
    });
  }
}else if(value[1]==6){
  
  /*google api*/
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center:  {lat: 34.0430219, lng: -118.2694428},
      zoom: 12
    });
  
    var marker = new google.maps.Marker({
      position: {lat: 34.0430219, lng: -118.2694428},
      map: map
    });
  }
}else if(value[1]==7){
  
  /*google api*/
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 34.0430219, lng: -118.2694428},
      zoom: 12
    });
  
    var marker = new google.maps.Marker({
      position: {lat: 34.0430219, lng: -118.2694428},
      map: map
    });
  }
}else if(value[1]==8){
  
  /*google api*/
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 33.4457415, lng: -112.073389},
      zoom: 12
    });
  
    var marker = new google.maps.Marker({
      position: {lat: 33.4457415, lng: -112.073389},
      map: map
    });
  }
}else if(value[1]==9){

/*google api*/
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 38.5802087, lng: -121.5018489},
      zoom: 12
    });
  
    var marker = new google.maps.Marker({
      position: {lat: 38.5802087, lng: -121.5018489},
      map: map
    });
  }
}else if(value[1]==10){
  
  /*google api*/
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 37.7680508, lng: -122.3899037},
      zoom: 12
    });
  
    var marker = new google.maps.Marker({
      position: {lat: 37.7680508, lng: -122.3899037},
      map: map
    });
  }
}else if(value[1]==11){

/*google api*/
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center:  {lat: 29.750765, lng: -95.3642892},
      zoom: 12
    });
  
    var marker = new google.maps.Marker({
      position: {lat: 29.750765, lng: -95.3642892},
      map: map
    });
  }
}else if(value[1]==12){
  
  /*google api*/
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center:  {lat: 32.7903953, lng: -96.8124434},
      zoom: 12
    });
  
    var marker = new google.maps.Marker({
      position: {lat: 32.7903953, lng: -96.8124434},
      map: map
    });
  }
}else if(value[1]==13){
  
  /*google api*/
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center:  {lat: 35.1381462, lng: -90.0527751},
      zoom: 12
    });
  
    var marker = new google.maps.Marker({
      position:{lat: 35.1381462, lng: -90.0527751},
      map: map
    });
  }
}else if(value[1]==14){
  
  /*google api*/
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center:  {lat: 29.4270248, lng: -98.4396539},
      zoom: 12
    });
  
    var marker = new google.maps.Marker({
      position: {lat: 29.4270248, lng: -98.4396539},
      map: map
    });
  }
}else if(value[1]==15){
  
  /*google api*/
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 29.9490397,lng: -90.0842455},
      zoom: 12
    });
  
    var marker = new google.maps.Marker({
      position: {lat: 29.9490397,lng: -90.0842455},
      map: map
    });
  }
}else if(value[1]==16){
  
  /*google api*/
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 43.64347, lng: -79.3812876},
      zoom: 12
    });
  
    var marker = new google.maps.Marker({
      position:  {lat: 43.64347, lng: -79.3812876},
      map: map
    });
  }
}else if(value[1]==17){
  
  /*google api*/
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center:  {lat: 42.3662019, lng: -71.0643347},
      zoom: 12
    });
  
    var marker = new google.maps.Marker({
      position: {lat: 42.3662019, lng: -71.0643347},
      map: map
    });
  }
}else if(value[1]==18){
  
  /*google api*/
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 39.9012056, lng: -75.1741682},
      zoom: 12
    });
  
    var marker = new google.maps.Marker({
      position: {lat: 39.9012056, lng: -75.1741682},
      map: map
    });
  }
}else if(value[1]==19){

/*google api*/
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 40.6826505, lng: -73.9776043},
      zoom: 12
    });
  
    var marker = new google.maps.Marker({
      position: {lat: 40.6826505, lng: -73.9776043},
      map: map
    });
  }
}else if(value[1]==20){
  
  /*google api*/
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 40.7505085, lng: -73.9956274},
      zoom: 12
    });
  
    var marker = new google.maps.Marker({
      position: {lat: 40.7505085, lng: -73.9956274},
      map: map
    });
  }
}else if(value[1]==21){
  
  /*google api*/
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center:  {lat: 43.0450841, lng: -87.9195749},
      zoom: 12
    });
  
    var marker = new google.maps.Marker({
      position: {lat: 43.0450841, lng: -87.9195749},
      map: map
    });
  }
}else if(value[1]==22){
  
  /*google api*/
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 39.7640475, lng: -86.1577254},
      zoom: 12
    });
  
    var marker = new google.maps.Marker({
      position: {lat: 39.7640475, lng: -86.1577254},
      map: map
    });
  }
}else if(value[1]==23){
  
  /*google api*/
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 41.8806948, lng: -87.6763646},
      zoom: 12
    });
  
    var marker = new google.maps.Marker({
      position: {lat: 41.8806948, lng: -87.6763646},
      map: map
    });
  }
}else if(value[1]==24){
  
  /*google api*/
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 42.3411065, lng: -83.057456},
      zoom: 12
    });
  
    var marker = new google.maps.Marker({
      position: {lat: 42.3411065, lng: -83.057456},
      map: map
    });
  }
}else if(value[1]==25){
  
  /*google api*/
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 41.4965807, lng: -81.6902649},
      zoom: 12
    });
  
    var marker = new google.maps.Marker({
      position: {lat: 41.4965807, lng: -81.6902649},
      map: map
    });
  }
}else if(value[1]==26){
  
  /*google api*/
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 25.7470768, lng: -80.1937742},
      zoom: 12
    });
  
    var marker = new google.maps.Marker({
      position: {lat: 25.7470768, lng: -80.1937742},
      map: map
    });
  }
}else if(value[1]==27){
  
  /*google api*/
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center:  {lat: 28.5392261, lng: -81.3860422},
      zoom: 12
    });
  
    var marker = new google.maps.Marker({
      position: {lat: 28.5392261, lng: -81.3860422},
      map: map
    });
  }
}else if(value[1]==28){
  
  /*google api*/
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center:  {lat: 35.2251563, lng: -80.8415798},
      zoom: 12
    });
  
    var marker = new google.maps.Marker({
      position: {lat: 35.2251563, lng: -80.8415798},
      map: map
    });
  }
}else if(value[1]==29){
  
  /*google api*/
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 38.898065, lng: -77.0229896},
      zoom: 12
    });
  
    var marker = new google.maps.Marker({
      position: {lat: 38.898065, lng: -77.0229896},
      map: map
    });
  }
}else{
  
  /*google api*/
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 33.7572935, lng: -84.3985131},
      zoom: 12
    });
  
    var marker = new google.maps.Marker({
      position: {lat: 33.7572935, lng: -84.3985131},
      map: map
    });
  }
}
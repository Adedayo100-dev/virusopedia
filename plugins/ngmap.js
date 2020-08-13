// Google Mpas Api
function myMap() {
  var mapProp= {
      center:new google.maps.LatLng(9.3,7),
      zoom: 5.7,
      mapTypeId:google.maps.MapTypeId.HYBRID
  };
  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
//Gooogle Maps Api Script 
function loadScript() {
  var script = document.createElement("script");
  script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyDQ3dLQ34MIXSbEkpVRuC72QpomY9jqhuk&callback=myMap";
  document.body.appendChild(script);
}
window.onload = loadScript;
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 39.8275, lng: 30.6417}, // Şefaatli'nin koordinatları
    zoom: 12
  });

  var marker = new google.maps.Marker({
    position: {lat: 39.8275, lng: 30.4617},
    map: map,
    title: 'Şefaatli Kaya Mezarları'
  });
}

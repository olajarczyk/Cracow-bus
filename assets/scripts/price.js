//VARIABLES ----------------------------------------------------------------------------------------------------------------------

let children = (sessionStorage.getItem("children")) ? sessionStorage.getItem("children") : null;
let adult = (sessionStorage.getItem("adult")) ? sessionStorage.getItem("adult") : null;
let multiplier = Number(children) + Number(adult);
//FUNCTIONS------------------------------------------------------------------------------------------------------------------------

function getAddress(results){
    var sublocality;
     var address = {};
       for (i = 0; i < results[0].address_components.length; ++i){
           for (j = 0; j < results[0].address_components[i].types.length; ++j)
           {
           if (!sublocality && results[0].address_components[i].types[j] == "sublocality")
                   address.sublocality = results[0].address_components[i].long_name;
           }
       }
       return address;
     }

function getPrice(price) {         
    const change = "Cena końcowa: " + price;
    document.getElementById('price').innerHTML = change;
    document.getElementById('price').style.color = "black";
    return price; 
  }
  
//GOOGLE MAPS----------------------------------------------------------------------------------------------------------------------

  function initAutocomplete() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 50.064062821017714, lng: 19.93618104269116}, 
             zoom: 11,
      mapTypeId: 'roadmap'
    });
    var infowindow = new google.maps.InfoWindow();
    google.maps.event.addListener(map, 'click', function(e) {
      console.log(e.latLng.toUrlValue(6)+":"+e.placeId)
    })
    // Create the search box and link it to the UI element.
    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    
    // 30.911057,75.851275:ChIJF5htW6CDGjkRTzN_txBXtr4
    // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', function() {
      searchBox.setBounds(map.getBounds());
    });
  
    var markers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', function() {
  
      var places = searchBox.getPlaces();
      console.log(places);
      if (places.length == 0) {
        return;
      }
  
      // Clear out the old markers.
      markers.forEach(function(marker) {
        marker.setMap(null);
      });
      markers = [];
  
      // For each place, get the icon, name and location.
      var bounds = new google.maps.LatLngBounds();
      places.forEach(function(place) {
        if (!place.geometry) {
          console.log("Returned place contains no geometry");
          return;
        }
  
        var icon = {
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25)
        };
  
        // Create a marker for each place.
        var marker = new google.maps.Marker({
          map: map,
          icon: icon,
          title: place.name,
          position: place.geometry.location
        });
        markers.push(marker);
        google.maps.event.addListener(marker, 'change', function() {
          infowindow.setContent('<div><strong>' + place.name);
          infowindow.open(map, this);
          var service = new google.maps.places.PlacesService(map);
          service.getDetails({
            placeId: place.place_id
          }, function(place, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
              var marker = new google.maps.Marker({
                map: map,
                position: place.geometry.location
              });
              google.maps.event.addListener(marker, 'change', function() {
                var results = [place];
                var address = getAddress(results);
                infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + '</div>'+JSON.stringify(address));
                infowindow.open(map, this);

//PRICE--------------------------------------------------------------------------------------------------------------------------------
                
let direction = (sessionStorage.getItem("to")) ? sessionStorage.getItem("to") : null;
let districts = [
                    ['Stare Miasto', 290],
                    ['Grzegórzki', 300],
                    ['Prądnik Czerwony', 150],
                    ['Prądnik Biały', 100],
                    ['Krowodrza', 200],
                    ['Bronowice', 190],
                    ['Zwierzyniec', 140],
                    ['Dębniki', 130],
                    ['Łagiewniki – Borek Fałęcki', 290],
                    ['Swoszowice', 100],
                    ['Podgórze Duchackie', 130],
                    ['Bieżanów – Prokocim', 120],
                    ['Podgórze', 200],
                    ['Czyżyny', 310],
                    ['Mistrzejowice', 110],
                    ['Bieńczyce', 120],
                    ['Wzgórza Krzesławickie', 150],
                    ['Nowa Huta', 160]
                    ]; 

              if (direction.includes("Miasteczko Studenckie AGH, Kraków, Polska")){
                let price = 240*multiplier;
                getPrice(price);
                sessionStorage.setItem("price", price);
              } 
              else if(direction.includes("Bronowice Wiadukt, Kraków, Polska")){
                let price = 190 *multiplier;
                getPrice(price);
                sessionStorage.setItem("price", price);
              }
              else if(direction.includes("Rondo Ofiar Katynia")){
                let price = 250 *multiplier;
                getPrice(price);
                sessionStorage.setItem("price", price);
              }
              else if(direction.includes("Czarnowiejska, Kraków, Polska")){
                let price = 240 *multiplier;
                getPrice(price);
                sessionStorage.setItem("price", price);
              }
              else if(direction.includes("Dworzec Autobusowy MDA Kraków, Bosacka, Kraków, Polska")){
                let price = 220 *multiplier;
                getPrice(price);
                sessionStorage.setItem("price", price);
              } 
              else {
                var result;
                for( var i = 0, len = districts.length; i < len; i++ ) {
                  if(address.sublocality.includes(districts[i][0])) {
                    result = districts[i][1];
                    var pric = multiplier*result;
                    getPrice(pric);
                    sessionStorage.setItem("price", pric);
                    break;
                 } else {
                    const change = "Nieobsługiwany adres! Wybierz inny.";
                    document.getElementById('price').innerHTML = change;
                    document.getElementById('price').style.color = "red";
                 }
              }
              }
              });
              google.maps.event.trigger(marker, 'change');        
            }
          });
        });
        if (places.length == 1)
           google.maps.event.trigger(marker, 'change')
        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      map.fitBounds(bounds);
    });
    document.getElementById('pac-input').addEventListener('change', function () {
      document.getElementById('legend').style.display = "block";
      map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push
  (document.getElementById('legend'));
  });
  }

//DIRECTION----------------------------------------------------------------------------------------------------------------------------

window.onload = function() {
//Price for stops
const input = document.getElementById('pac-input');
const log = document.getElementById('local');
input.addEventListener('blur', updateValue);
function updateValue(e) {
log.textContent = e.currentTarget.value; 
sessionStorage.setItem("to", this.value);
}
document.getElementById('back').addEventListener('click', function () {
window.location.href = "http://localhost:8080/krakow-bus/index.html";
sessionStorage.clear();
});

input.addEventListener('change', function() {
    let price = sessionStorage.getItem("price");
      const change = "Cena końcowa: " + price;
      document.getElementById('price').innerHTML = change;
      document.getElementById('price').style.color = "black";   
});


//AJAX--------------------------------------------------------------------------------------------------------------------------------

$(function() {
$('#next_two').click(function(e) {
    let airport = (window.sessionStorage.getItem("from")) ? sessionStorage.getItem("from") : null;
  $.ajax({
         url: 'ajax.php',
         data: {airport: airport},
         type: 'POST' 
  }).done(function(resp) {
        alert(resp);
  });
 });
});
}


//VARIABLES -----------------------------------------------------------------------------------------------------------------------

let children = (sessionStorage.getItem("children")) ? sessionStorage.getItem("children") : null;
let adult = (sessionStorage.getItem("adult")) ? sessionStorage.getItem("adult") : null;
let multiplier = Number(children) + Number(adult);

//FUNCTION-------------------------------------------------------------------------------------------------------------------------

function getAddress(results){
  var sublocality;
   var address = {};
     for (i = 0; i < results[0].address_components.length; ++i){
         for (j = 0; j < results[0].address_components[i].types.length; ++j)
         {
         if (!sublocality && results[0].address_components[i].types[j] == "sublocality")
                 address.sublocality = results[0].address_components[i].long_name;
                 sessionStorage.setItem("district", address.sublocality);
         }
     }
     console.log(address);
     return address;
   }

function getPrice(price) {         
    const change = "Cena końcowa: " + price;
    document.getElementById('price').innerHTML = change;
    document.getElementById('price').style.color = "black";
    return price; 
  }

function turnOnButton () {
    var next = document.getElementById("next_two");
    next.removeAttribute("disabled");
}

function turnOffButton () {
  var next = document.getElementById("next_two");
  next.setAttribute('disabled','disabled');
  next.setAttribute('title','Podaj poprawny adres');
}

function containsNumbers(str) {
  return /[0-9]/.test(str);
}




//GOOGLE MAPS----------------------------------------------------------------------------------------------------------------------

function initAutocomplete() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 60.13521, lng: 10.69954},
           zoom: 9,
    mapTypeId: 'roadmap'
  });
  var infowindow = new google.maps.InfoWindow();
// ZOOM DROPDOWN BUS STOP-----------------------------------------------------------------------------------------------------------------------------------
  function getLocal () {
      document.getElementById('legend').style.display = "block";
      map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push
      (document.getElementById('legend'));
  }

  const log = document.getElementById('local');
  const input_two = document.getElementById('pac-input');
  input_two.addEventListener('input', function () {
    //inputObject.parentNode.replaceChild(inputObject.cloneNode(true),input_two);
   // document.getElementsByClassName("pac-container")[0].setAttribute('disabled'); 
    if(input_two.value==="Miasteczko Studenckie AGH, Kraków, Polska"){
      $(".pac-container").css("visibility", "hidden");
      getLocal();
      turnOnButton();
      if(sessionStorage.getItem("direction")=="Z lotniska"){
        log.textContent ="Z lotniska do Miasteczko Studenckie AGH, Kraków, Polska"; 
        } else {
          input.addEventListener('input', updateValue);
          log.textContent = "Z Miasteczko Studenckie AGH, Kraków, Polska na lotnisko"; 
        } 
      let price = 240*multiplier;
      getPrice(price);
      sessionStorage.setItem("price", price);
      map.setCenter({lat: 59.911731, lng: 10.757077}); 
      map.setZoom(17);
      new google.maps.Marker({
      position: {lat: 59.911718, lng: 10.757044},
      map: map,
    });
    }
    else if(document.getElementById('pac-input').value=="Bronowice Wiadukt, Kraków, Polska"){
      $(".pac-container").css("visibility", "hidden");
      getLocal();
      turnOnButton();
      if(sessionStorage.getItem("direction")=="Z lotniska"){
        log.textContent ="Z lotniska do Bronowice Wiadukt, Kraków, Polska"; 
        } else {
          input.addEventListener('input', updateValue);
          log.textContent = "Z Bronowice Wiadukt, Kraków, Polska na lotnisko"; 
        } 
      let price = 190*multiplier;
      getPrice(price);
      sessionStorage.setItem("price", price);
      map.setCenter({lat: 59.731032495677475, lng: 10.21656781349083}); 
      map.setZoom(17);
      new google.maps.Marker({
        position: {lat: 59.731032495677475, lng: 10.21656781349083},
        map: map,
      });
    
    }
    else if(document.getElementById('pac-input').value=="Rondo Ofiar Katynia"){
      $(".pac-container").css("visibility", "hidden");
      getLocal();
      turnOnButton();
      if(sessionStorage.getItem("direction")=="Z lotniska"){
        log.textContent ="Z lotniska do Rondo Ofiar Katynia"; 
        } else {
          input.addEventListener('input', updateValue);
          log.textContent = "Z Rondo Ofiar Katynia na lotnisko"; 
        } 
      let price = 250*multiplier;
      getPrice(price);
      sessionStorage.setItem("price", price);
      map.setCenter({lat: 59.89367422341218, lng: 10.51343022764426}); 
      map.setZoom(17);
      new google.maps.Marker({
        position: {lat: 59.89367422341218, lng: 10.51343022764426},
        map: map,
      });
    }
    else if(document.getElementById('pac-input').value=="Czarnowiejska, Kraków, Polska"){
      $(".pac-container").css("visibility", "hidden");
      getLocal();
      turnOnButton();
      if(sessionStorage.getItem("direction")=="Z lotniska"){
        log.textContent ="Z lotniska do Czarnowiejska, Kraków, Polska"; 
        } else {
          input.addEventListener('input', updateValue);
          log.textContent = "Z Czarnowiejska, Kraków, Polska na lotnisko"; 
        } 
      let price = 240*multiplier;
      getPrice(price);
      sessionStorage.setItem("price", price);
      map.setCenter({lat: 59.92208601735478, lng: 10.6755272634898}); 
      map.setZoom(17);
      new google.maps.Marker({
        position: {lat: 59.92208601735478, lng: 10.6755272634898},
        map: map,
      });
    }
    else if(document.getElementById('pac-input').value=="Dworzec Autobusowy MDA Kraków, Bosacka, Kraków, Polska"){
      $(".pac-container").css("visibility", "hidden");
      getLocal();
      turnOnButton();
      if(sessionStorage.getItem("direction")=="Z lotniska"){
        log.textContent ="Z lotniska do Dworzec Autobusowy MDA Kraków, Bosacka, Kraków, Polska"; 
        } 
      else {
        input.addEventListener('input', updateValue);
        log.textContent = "Z Dworzec Autobusowy MDA Kraków, Bosacka, Kraków, Polska na lotnisko"; 
          } 
      let price = 220*multiplier;
      getPrice(price);
      sessionStorage.setItem("price", price);
      map.setCenter({lat: 59.834987269814896, lng: 10.442165369969675}); 
      map.setZoom(17);
      new google.maps.Marker({
        position: {lat: 59.834987269814896, lng: 10.442165369969675},
        map: map,
      });
    } else {
      $(".pac-container").css("visibility", "visible");
      } 
  }); 

//-----------------------------------------------------------------------------------------------------------------------------------
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

//PRICE FOR INPUT ADDRESS--------------------------------------------------------------------------------------------------------------------------------

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

//Price for stops
          var result;
          if(address.sublocality!=undefined){
            for( var i = 0, len = districts.length; i < len; i++ ) {
              if(address.sublocality.includes(districts[i][0])) {
                turnOnButton();
                result = districts[i][1];
                var pric = multiplier*result;
                getPrice(pric);
                sessionStorage.setItem("price", pric);
                break;
             } 
             else {
              if(!containsNumbers(direction)){
                const change = "Nie podałeś numeru. Podaj numer.";
                document.getElementById('price').innerHTML = change;
                document.getElementById('price').style.color = "red";
                turnOffButton();
              } else {
                const change = "Nieobsługiwany adres! Wybierz inny.";
                document.getElementById('price').innerHTML = change;
                document.getElementById('price').style.color = "red";
                turnOffButton();
              }
                 }
              } 
          } else {
            for( var i = 0, len = districts.length; i < len; i++ ) {
              if(direction.includes(districts[i][0])) {
                turnOnButton();
                result = districts[i][1];
                var pric = multiplier*result;
                getPrice(pric);
                sessionStorage.setItem("price", pric);
                break;
             } 
             else {
              if(!containsNumbers(direction)){
                const change = "Nie podałeś numeru. Podaj numer.";
                document.getElementById('price').innerHTML = change;
                document.getElementById('price').style.color = "red";
                turnOffButton();
              } else {
                const change = "Nieobsługiwany adres! Wybierz inny.";
                document.getElementById('price').innerHTML = change;
                document.getElementById('price').style.color = "red";
                turnOffButton();
              }
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
  if(sessionStorage.getItem("direction")=="Z lotniska"){
  input.addEventListener('blur', updateValue);
  function updateValue(e) {
  log.textContent ="Z lotniska do " + e.currentTarget.value; 
  sessionStorage.setItem("to", this.value);
} 
  } else {
    input.addEventListener('blur', updateValue);
    function updateValue(e) {
    log.textContent = e.currentTarget.value + " na lotnisko";
    sessionStorage.setItem("from", this.value);
  }

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
  sessionStorage.setItem("passengers", multiplier);
  
  $(function() {
  $('#next_two').click(function(e) {
      let passengers = (window.sessionStorage.getItem("passengers")) ? sessionStorage.getItem("passengers") : null;
      let date = (window.sessionStorage.getItem("date")) ? sessionStorage.getItem("date") : null;
      let from = (window.sessionStorage.getItem("direction")) ? sessionStorage.getItem("direction") : null;
      let to = (window.sessionStorage.getItem("to")) ? sessionStorage.getItem("to") : null;
      let price = (window.sessionStorage.getItem("price")) ? sessionStorage.getItem("price") : null;
      let time = (window.sessionStorage.getItem("time")) ? sessionStorage.getItem("time") : null;
    $.ajax({
           url: 'ajax.php',
           data: {
            passengers:passengers,
            date: date,
            from: from, 
            to:to,
            price:price,
            time:time
          },
           type: 'POST' 
    }).done(function(resp) {
          alert(resp);
    });
   });
  });
  }
  


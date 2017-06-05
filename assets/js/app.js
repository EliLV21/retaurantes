function initMap() {
        var uluru = {lat: 19.4176387, lng: -99.16481529999999};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }

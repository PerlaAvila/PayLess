function initMap() {

  var locations = [
      {
        "title": 'Payless Car Rental Aeropuerto',
        "lat": '28.645846',
        "lng": '-106.0825677',
        "description": '614 446 8406 aeropuerto.chih@paylesscarmexico.com'
      },
      {
        "title": 'Payless Car Rental Chihuahua',
        "lat": '28.7044083',
        "lng": '-105.9712019',
        "description": '614 413 1873 / 614 413 3866 centro.chihuahua@paylesscarmexico.com' 
      },
      {
        "title": 'Payless Car Rental CDMX',
        "lat": '19.4317995',
        "lng": '-99.1568846',
        "description": '55 5566 5929 / 55 5566 5921 centro.cdmx@paylesscarmexico.com'
      },
      {
        "title": 'Payless Car Rental SLP',
        "lat": '22.1408314',
        "lng": '-100.9443909',
        "description": '444 567 5293 / 444 567 6397 centro.sanluispotosi@paylesscarmexico.com rp.sanluispotosi@paylesscarmexico.com'
      },
      {
        "title": 'Payless Car Rental GDL',
        "lat": '20.6557592',
        "lng": '-103.3929889,',
        "description": '333 121 0799 / 333 121 1023 centro.guadalajara@paylesscarmexico.com'
      }
  ];

  window.onload = function(){
    LoadMap();
  }

  function LoadMap(){
    var mapOptions = {
        center: new google.maps.LatLng(locations[0].lat, locations[0].lng),
        zoom: 6,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
     var map = new google.maps.Map(document.getElementbyId("maps"), mapOptions);

        var infoWindow = new google.maps.InfoWindow();

            for (var i = 0; i < markers.length; i++) {
                var data = locations[i];
                var myLatlng = new google.maps.LatLng(data.lat, data.lng);
                var marker = new google.maps.Marker({
                    position: myLatlng,
                    map: map,
                    title: data.title
                });

                //agregamos el clickevent

                (function (marker, data){
                  google.maps.event.addListener(marker, "click", function(e){
                    infoWindow.setContent("<div style = 'width:200px;min-height:40px'>" + data.description + "</div>");
                    infoWindow.open(map, marker);
                  });
                }) (marker, data);
            }   
    }


    
;

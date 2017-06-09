function initMap() {

 var markers = [
      {
        "title": 'Payless Car Rental Aeropuerto',
        "lat": '28.645846',
        "lng": '-106.0825677',
        "description": '614 446 8406 aeropuerto.chih@paylesscarmexico.com',
        "imglink": 'http://i.imgur.com/1fmULrE.png'
      },
      {
        "title": 'Payless Car Rental Chihuahua',
        "lat": '28.7044083',
        "lng": '-105.9712019',
        "description": '614 413 1873 / 614 413 3866 centro.chihuahua@paylesscarmexico.com',
        "imglink": 'http://imgur.com/a/75ZQE' 
      },
      {
        "title": 'Payless Car Rental CDMX',
        "lat": '19.4317995',
        "lng": '-99.1568846',
        "description": '55 5566 5929 / 55 5566 5921 centro.cdmx@paylesscarmexico.com',
        "imglink": 'http://i.imgur.com/usRsC9p.png'
      },
      {
        "title": 'Payless Car Rental SLP',
        "lat": '22.1408314',
        "lng": '-100.9443909',
        "description": '444 567 5293 / 444 567 6397 centro.sanluispotosi@paylesscarmexico.com',
        "imglink": 'http://i.imgur.com/Zx6sdNG.png'
      },
      {
        "title": 'Payless Car Rental Sinaloa',
        "lat": '24.7747994',
        "lng": '-107.4678437',
        "description": '667 715 4445 / 667 712 0139 ventas.culiacan@paylesscarmexico.com',
        "imglink": 'http://davidmixner.typepad.com/.a/6a00d8341c90b153ef0192abe15965970d-500wi'
      }
  ];
    window.onload = function () {
        LoadMap();
    }
    function LoadMap() {
        var image = {
        url: 'http://i.imgur.com/8QkgAcr.png',
        size: new google.maps.Size(30, 30),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 32)
      };


        var shape = {
          coords: [1, 1, 1, 20, 18, 20, 18, 1],
          type: 'poly'
        };


        var mapOptions = {
            center: new google.maps.LatLng('24.9303343', '-105.3799148'),
            zoom: 6,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false
        };
        var map = new google.maps.Map(document.getElementById("maps"), mapOptions);
 
        //Create and open InfoWindow.
        var infoWindow = new google.maps.InfoWindow();
 
        for (var i = 0; i < markers.length; i++) {
            var data = markers[i];
            var myLatlng = new google.maps.LatLng(data.lat, data.lng);
            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                icon: image,
                shape: shape,
                title: data.title
            });
 
            //Attach click event to the marker.
            (function (marker, data) {
                google.maps.event.addListener(marker, "click", function (e) {
                    //Wrap the content inside an HTML DIV in order to set height and width of InfoWindow.
                    infoWindow.setContent("<div style = 'width:400px;min-height:400px'>" + "<center><img src='" + data.imglink + "'></center></br>" + data.description + "</div>");
                    infoWindow.open(map, marker);
                });
            })(marker, data);
        }
    }
 };   

    
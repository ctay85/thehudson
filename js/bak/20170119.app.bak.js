$(document).ready(function (){
	$(".go-top a").click(function (){
		$('html, body').animate({
			scrollTop: $("body").offset().top
		}, 1000);
	});
	$("#home .arrow-down").click(function (){
		$('html, body').animate({
			scrollTop: $("#home .intro-desc").offset().top
		}, 1000);
	});

	$('header .navbar-toggle').click(function (){
		$('.navbar').toggleClass('full-screen');
		$('body').toggleClass('overflow-h');
	});

	$(window).resize(function(){
		if ($(window).width() < 992) {
			$(".responsive-nav").css("height", $(window).height()-274);
			console.log($(window).height());
		} if ($(window).width() > 991) {
			if ($(".responsive-nav").css("height") != '0px') {
				$(".responsive-nav").css("height", "auto");
				console.log("not auto");
			}
		}
	});
	if ($(window).width() < 992) {
		$(".responsive-nav").css("height", $(window).height()-274);
	}
	lightbox.option({
      'positionFromTop': 100
    })
    var player = $('#my-video').get(0);
    function playPause() { 
	    if (player.paused) {
	        player.play();
	        console.log("click");
	        $("#home .video-controls").css("display", "none");
	    }
	    else {
	        player.pause();
	        $("#home .video-controls").css("display", "flex");
	    }
	}

	$(".intro-video a").on("click", function() {
		playPause();
	});
	
	//player.play();
	$("#my-video").on("tap", function() {
		console.log("click");
		playPause();
	});


});



function initMap() {

  // Create an array of styles.
  var styles = [
	  {
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#f5f5f5"
	      }
	    ]
	  },
	  {
	    "elementType": "labels.icon",
	    "stylers": [
	      {
	        "visibility": "off"
	      }
	    ]
	  },
	  {
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#616161"
	      }
	    ]
	  },
	  {
	    "elementType": "labels.text.stroke",
	    "stylers": [
	      {
	        "color": "#f5f5f5"
	      }
	    ]
	  },
	  {
	    "featureType": "administrative.land_parcel",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#bdbdbd"
	      }
	    ]
	  },
	  {
	    "featureType": "poi",
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#eeeeee"
	      }
	    ]
	  },
	  {
	    "featureType": "poi",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#757575"
	      }
	    ]
	  },
	  {
	    "featureType": "poi.park",
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#e5e5e5"
	      }
	    ]
	  },
	  {
	    "featureType": "poi.park",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#9e9e9e"
	      }
	    ]
	  },
	  {
	    "featureType": "road",
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#ffffff"
	      }
	    ]
	  },
	  {
	    "featureType": "road.arterial",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#757575"
	      }
	    ]
	  },
	  {
	    "featureType": "road.highway",
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#dadada"
	      }
	    ]
	  },
	  {
	    "featureType": "road.highway",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#616161"
	      }
	    ]
	  },
	  {
	    "featureType": "road.local",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#9e9e9e"
	      }
	    ]
	  },
	  {
	    "featureType": "transit.line",
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#e5e5e5"
	      }
	    ]
	  },
	  {
	    "featureType": "transit.station",
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#eeeeee"
	      }
	    ]
	  },
	  {
	    "featureType": "water",
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#c9c9c9"
	      }
	    ]
	  },
	  {
	    "featureType": "water",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#9e9e9e"
	      }
	    ]
	  }
	];

  // Create a new StyledMapType object, passing it the array of styles,
  // as well as the name to be displayed on the map type control.
  var styledMap = new google.maps.StyledMapType(styles,
    {name: "Styled Map"});

  // Create a map object, and include the MapTypeId to add
  // to the map type control.
  var mapOptions = {
    zoom: 15,
    center: new google.maps.LatLng(41.895283, -87.639403),
    scrollwheel: false,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
  };
  var map = new google.maps.Map(document.getElementById('map'),
    mapOptions);

  setMarkers(map);

  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');

}

var pointsList = [
  ['Kinmont', 41.895283, -87.639403, 4],
  ['Goddess and the Grocer', 41.898631, -87.642655, 1],
  ['Eerie Café', 41.894273, -87.642712, 3],
  ['Citizen Bar', 41.894169, -87.638178, 2],
  ['Bernie\'s Lunch & Supper', 41.894156, -87.637409, 1],
  ['Nacional', 41.894503, -87.636659, 4],
  ['Club Lago', 41.895311, -87.636951, 2],
  ['Farmhouse', 41.89682, -87.635378, 3],
  ['MK Restaurant', 41.898519, -87.636068, 2],
  ['Kiki\'s Bistro', 41.899222, -87.636108, 1],
  ['Yolk River North', 41.896242, -87.633822, 1]
];

function setMarkers(map) {

	var infowindow = new google.maps.InfoWindow();
	for (var i = 0; i < pointsList.length; i++) {
	    var points = pointsList[i];
	    var image = 'img/marker-1.png';
	    var marker = new google.maps.Marker({
			position: {lat: points[1], lng: points[2]},
			map: map,
			icon: image,
			title: points[0],
			zIndex: points[3]
	    });
	    google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.setContent('<div id="hook">' + pointsList[i][0] + '</p>');

                infowindow.open(map, marker);
                var s = $("#hook").parent().parent().parent().siblings().first().addClass("test");
            }
        })(marker, i));
	}
	
}
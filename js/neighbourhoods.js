var infowindow = null;
var markerobj = [];
var northwestLat = jQuery('#map').attr('data-northwest-lat');
var northwestLng = jQuery('#map').attr('data-northwest-lng');

var myLatlng = new google.maps.LatLng(northwestLat, northwestLng);

jQuery(document).ready(function () {
    initialize();
});

function initialize() {

     var styles = 
[
  {
    "stylers": [
      { "saturation": -100 },
      { "lightness": 19 }
    ]
  },{
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "road.highway",
    "stylers": [
      { "visibility": "on" },
      { "color": "#d1d1d1" }
    ]
  },{
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      { "color": "#d1d1d1" }
    ]
  },{
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [
      { "color": "#d9d9d9" }
    ]
  },{
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      { "color": "#888888" }
    ]
  }
];


    // create map
    var centerMap = new google.maps.LatLng(0, 0);
    var myOptions = {
        zoom: 14,
        minZoom: 1,
        maxZoom: 20,
        center: centerMap,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: styles,
        scrollwheel: false,
    }


    //attacth map to #map
    var map = new google.maps.Map(document.getElementById("map"), myOptions);

    // set the site markers and recenter the map
    setMarkers(map, sites, infowindow);


    var northwestMapMarker = jQuery('#map').attr('data-map-marker');
    var northwestMarker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Northwest',
        icon: northwestMapMarker
    });
    //recenter map on resize
    google.maps.event.addDomListener(window, "resize", function () {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
    });
    infowindow = new google.maps.InfoWindow({
        content: "loading...",
        boxStyle: {
           whiteSpace: "nowrap"
        }
    });
    // check what current tab is and adjust visable markers
    var default_location_type = jQuery('#map-filters').find('.catFilter.flex-active').attr('data-filter-name');
    adjustMapMarkers(default_location_type, map);

    // when new tab is selected, filter current visable markers
    jQuery('#map-filters').on('click', '.catFilter', function () {
        filter = jQuery(this).attr('data-filter-name');
        color = jQuery(this).attr('data-filter-color');
        jQuery('#neighbourhood-map').css('background',color);
        jQuery(this).parent().parent().find('.catFilter').css('background','#807d87');
        jQuery(this).css('background',color).parent().find('.content').css('background',color);
	   jQuery('.catFilter').css('color','#ffffff');
	   jQuery(this).css('color','#ffffff');


        if(jQuery(this).hasClass('flex-active')){
            jQuery('#map-filters').find('li.catFilter').removeClass('flex-active').parent().find('[data-filter-name='+filter+']').click().addClass('flex-active');
            jQuery('#map-filters').find('.slides').find('[data-filter-name='+filter+']').addClass('flex-active-slide').siblings().removeClass('flex-active-slide');
        }else{
            jQuery('#map-filters .accordion').find('.flex-active').find('.title').css('background','white').parent().removeClass('flex-active').parent().find('[data-filter-name='+filter+']').parent().addClass('flex-active');

            jQuery('#map-filters .accordion').find('[data-filter-name='+filter+']').css('background',color).siblings().css('background',color);
        }

        // jQuery(this).css('background',color).siblings().css('background','white');
        infowindow.close();
        adjustMapMarkers(filter, map); 

    });

    // when single location is clicked in tab, display the popup on the map
    jQuery('#map-filters').on('click', '.single-location', function (e) {
        var location_id = jQuery(this).attr('data-location-count');
        // e.preventDefault();
        var placeIdAttr;
        var placeId;
        placeId = jQuery(this).attr('data-location-count');
        google.maps.event.trigger(markerobj[placeId],"click");
        console.log(placeId);
    });
}

function adjustMapMarkers(filter, map){

    var bounds = new google.maps.LatLngBounds();
    for (i = 0; i < sites.length; i++) {
        
        if(sites[i][5] == filter) {
            markerobj[i].setVisible(true);
            bounds.extend(markerobj[i].position);

        } else {
            markerobj[i].setVisible(false);
        }
    }
    bounds.extend(myLatlng);

    map.fitBounds(bounds);
}

function setMarkers(map, markers) {

    // var infowindow = new google.maps.InfoWindow();  

    markerobj = [];
    for (var i = 0; i < markers.length; i++) {
        var sites = markers[i];
        var siteLatLng = new google.maps.LatLng(sites[1], sites[2]);
        markerobj[i] = new google.maps.Marker({
            position: siteLatLng,
            map: map,
            title: sites[0],
            zIndex: sites[3],
            html: sites[4],
            icon: sites[6]
        });

        var contentString = "";
        google.maps.event.addListener(markerobj[i], "click", function () {
            infowindow.close();
            infowindow.setContent(this.html);
            infowindow.open(map, this);

        });
    }
}


google.maps.event.addDomListener(window, 'load', initialize);

import React, { Component } from 'react';
class Maps extends Component {
  constructor(props, context) {
    super(props, context);
		this.state = {
	    directionService:null,
	    directionsDisplay:null,
	    map:null
	  }
  }
  componentDidMount() {
  	this.state.directionsService = new google.maps.DirectionsService;
    this.state.directionsDisplay = new google.maps.DirectionsRenderer;
    this.state.map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
    this.state.directionsDisplay.setMap(this.state.map);
    this.calculateAndDisplayRoute(this.props.location.origin,this.props.location.destination);
  }
  addMarker(lat,lng){
  	var marker = new google.maps.Marker({
      position: {lat: lat, lng: lng},
      map: this.state.map,
      title: 'Hello World!'
    });
    var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
      'sandstone rock formation in the southern part of the '+
      'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
      'south west of the nearest large town, Alice Springs; 450&#160;km '+
      '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
      'features of the Uluru - Kata Tjuta National Park. Uluru is '+
      'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
      'Aboriginal people of the area. It has many springs, waterholes, '+
      'rock caves and ancient paintings. Uluru is listed as a World '+
      'Heritage Site.</p>'+
      '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
      'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
      '(last visited June 22, 2009).</p>'+
      '</div>'+
      '</div>';
	  var infowindow = new google.maps.InfoWindow({
	    content: contentString
	  });
	  marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
  }
  calculateAndDisplayRoute(origin, destination) {
  	var that = this;
  	console.log(this);
    this.state.directionsService.route({
      origin: origin,
      destination: destination,
      travelMode: 'DRIVING'
    }, function(response, status) {
      if (status === 'OK') {
        that.state.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }
  render() {
  	return (
      <div id="map"></div>
  	)
  }
}
export default Maps;

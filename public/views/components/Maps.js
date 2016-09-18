import React, { Component } from 'react';
var that;
class Maps extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      directionService:null,
      directionsDisplay:null,
      service:null,
      map:null
    }
    that = this;
  }
  componentDidMount() {
    this.state.directionsService = new google.maps.DirectionsService;
    this.state.directionsDisplay = new google.maps.DirectionsRenderer;
    this.state.map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
    this.state.service = new google.maps.places.PlacesService(this.state.map);
    this.state.directionsDisplay.setMap(this.state.map);
  }
  addMarker(lat,lng){
    var marker = new google.maps.Marker({
      position: {lat: lat, lng: lng},
      map: this.state.map,
      title: 'Hello World!'
    });
  }
  calculateAndDisplayRoute(origin, destination) {
    var that = this;
    if(this.state.directionsService){
      this.state.directionsService.route({
        origin: origin,
        destination: destination,
        travelMode: 'DRIVING'
      }, function(response, status) {
        if (status === 'OK') {
          that.state.directionsDisplay.setDirections(response);
          that.getLocations(response,status);
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      });
    }
  }
  getLocations(result,status){
    var distanceCheck = true; 
    var routeCheck = true;
    var distance = 1;
    if (status == google.maps.DirectionsStatus.OK) {
      var totalRouteDistance = parseFloat(result.routes[0].legs[0].distance.value);
      var totalRouteTime = parseFloat(result.routes[0].legs[0].duration.value);
      var totalDistance = 0;
      var prevLatLng = result.routes[0].legs[0].start_location;
      if (distance != null && distance > 0) {
        var startDistance = distance;
        for (var i = 0; i < result.routes[0].legs.length; i++) {
          var leg = result.routes[0].legs[i];
          for (var j = 0; j < leg.steps.length; j++) {
            var step = leg.steps[j];
            for (var k = 0; k < step.path.length; k++) {
              var path = step.path[k];
              totalDistance = parseFloat(totalDistance + this.getDistance(path, prevLatLng));
              if (totalDistance > startDistance * 1000 && distanceCheck) {
                distanceCheck = false;
                this.addMarker(path.lat(),path.lng());
                this.performSearch(path.lat(),path.lng());
                //loc.push(path);
                //console.log(path)
              }
              prevLatLng = path;
            }
          }
        }
      }
    }
  }
  getDistance(p1, p2) {
    var R = 6378137;
    var dLat = this.rad(p2.lat() - p1.lat());
    var dLong = this.rad(p2.lng() - p1.lng());
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(this.rad(p1.lat())) * Math.cos(this.rad(p2.lat())) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d;
  }
  rad(x) {
    return x * Math.PI / 180;
  }
  performSearch(lat,lng) {
    this.state.service.nearbySearch({
      location: {lat: lat, lng: lng},
      radius: 5000,
      keyword: this.props.direction.keyword
    }, that.callback);
  }
  performRadarSearch(lat,lng) {
    console.log(lat,lng,this.props.direction.keyword);
    var request = {
      location: {lat: lat, lng: lng},
      radius:5000,
      keyword: this.props.direction.keyword
    };
    this.state.service.radarSearch(request, that.callback);
  }
  callback(results, status) {
    if (status !== google.maps.places.PlacesServiceStatus.OK) {
      console.error(status);
      return;
    }
    for (var i = 0, result; result = results[i]; i++) {
      console.log(result);
    }
  }
  render() {
    this.calculateAndDisplayRoute(this.props.direction.origin,this.props.direction.destination);
    return (
      <div>
        <div id="map"></div>
      </div>
    )
  }
}
export default Maps;

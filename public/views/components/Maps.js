import React, { Component } from 'react';
var that;
var placesArray = new Array();
var placesIdArray = new Array();
var MapObject = {
  directionService:null,
  directionsDisplay:null,
  service:null,
  map:null,
};
var counter = 0;
class Maps extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      origin:null,
      destination:null,
      keyword:null
    }
    that = this;
  }
  componentDidMount() {
    MapObject.directionsService = new google.maps.DirectionsService;
    MapObject.directionsDisplay = new google.maps.DirectionsRenderer;
    MapObject.directionsDisplay.setOptions({
      suppressMarkers: true,
      polylineOptions: {
        strokeWeight: 4,
        strokeOpacity: 0.7,
        strokeColor:  '#ff4330',
      }
    });
    MapObject.map = new google.maps.Map(document.getElementById('map'), {
      center: {lat:25.2048, lng:55.2708},
      zoom: 10,
      styles : [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]}]
    });
    MapObject.service = new google.maps.places.PlacesService(MapObject.map);
    MapObject.directionsDisplay.setMap(MapObject.map);
  }
  addMarker(lat,lng){
    var marker = new google.maps.Marker({
      position: {lat: lat, lng: lng},
      map: MapObject.map,
      title: 'Hello World!'
    });
  }
  calculateAndDisplayRoute(origin, destination) {
    this.setState({
      origin:this.props.direction.origin,
      destination:this.props.direction.destination,
      keyword:this.props.direction.keyword,
    })
    var that = this;
    if(MapObject.directionsService){
      MapObject.directionsService.route({
        origin: origin,
        destination: destination,
        travelMode: 'DRIVING',
        avoidTolls:false,
        avoidHighways:false
      }, function(response, status) {
        if (status === 'OK') {
          MapObject.directionsDisplay.setDirections(response);
          that.getLocations(response,status);
        } else {
          console.log('Directions request failed due to ' + status);
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
                this.performSearch(path.lat(),path.lng());
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
    MapObject.service.nearbySearch({
      location: {lat: lat, lng: lng},
      radius: 5000,
      keyword: this.props.direction.keyword
    }, that.callback);
  }
  callback(results, status) {
    if (status !== google.maps.places.PlacesServiceStatus.OK) {
      console.error(status);
      return;
    }
    placesIdArray = results;
    counter = 0;
    that.getPlaces();
  }
  getPlaces(){
    if(placesIdArray && counter < placesIdArray.length){
      this.getPlacesDetails(placesIdArray[counter].place_id);
    }
    else{
      console.log('completed',counter,placesIdArray.length);
      console.log(placesArray);
      this.props.updatePlaces(placesArray);
    }
  }
  getPlacesDetails(placeId){
    MapObject.service.getDetails({
      placeId: placeId
    }, function(place, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        var marker = new google.maps.Marker({
          map: MapObject.map,
          position: place.geometry.location,
          title:place.name
        });
        if(that.search(placeId,placesArray)){
          placesArray.push(place);
          that.props.updatePlaces(placesArray);
        }
      }
      setTimeout(function(){
        that.getPlaces();
        counter++;
      },10);
    });
  }
  search(key, array){
    var flag = true;
    for (var i=0; i < array.length; i++) {
      if (array[i].place_id === key) {
        flag = false;
      }
    }
    return flag;
  }
  render() {
    var renderFlag = true;
    if(this.props.direction.origin == "" || this.props.direction.origin.localeCompare(this.state.origin) == 0){
      renderFlag = false;
    }
    if(this.props.direction.destination == "" || this.props.direction.destination.localeCompare(this.state.destination) == 0){
      renderFlag = false;
    }
    if(this.props.direction.keyword == "" || this.props.direction.keyword.localeCompare(this.state.keyword) == 0){
      renderFlag = false;
    }
    if(renderFlag){
      this.calculateAndDisplayRoute(this.props.direction.origin,this.props.direction.destination);
    }
    return (
      <div>
        <div id="map"></div>
      </div>
    )
  }
}
export default Maps;

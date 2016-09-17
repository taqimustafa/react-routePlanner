import React, { Component } from 'react';
var test;
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
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      });
    }
  }
  render() {
    this.calculateAndDisplayRoute(this.props.location.origin,this.props.location.destination);
    return (
      <div>
        <div id="map"></div>
      </div>
    )
  }
}
export default Maps;

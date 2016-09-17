import React, { Component } from 'react';
import { GoogleMap, GoogleMapLoader, DirectionsRenderer, Marker } from "react-google-maps";
class Maps extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      origin: "Islamabad",
      destination: "Lahore",
      directions: null,
    }
  }
  componentDidMount() {
    const DirectionsService = new google.maps.DirectionsService();
    DirectionsService.route({
      origin: this.state.origin,
      destination: this.state.destination,
      travelMode: google.maps.TravelMode.DRIVING,
    }, (result, status) => {
      console.log(result);
      if (status === google.maps.DirectionsStatus.OK) {
        this.setState({
          directions: result,
        });
      } else {
        console.error('error fetching directions ${ result }');
      }
    });
  }
  render() {
    return (
      <div id="map">
        <GoogleMapLoader
          containerElement={
            <div
              style={{
                height: "100%",
              }}
            />
          }
          googleMapElement={
            <GoogleMap 
              defaultZoom={15}
              defaultCenter={this.state.origin}
            >
              {this.state.directions ? <DirectionsRenderer directions={this.state.directions} /> : null}
            </GoogleMap>
          }
        />
      </div>
    )
  }
}
export default Maps;

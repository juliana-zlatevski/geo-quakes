import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import QuakeModel from '../models/QuakeModel';

const containerStyle = {
  position: 'absolute',
  width: '50%',
  height: '95%'
}

export class MapContainer extends Component {
  state = {
    quakes: [],
    activeMarker: {},
    mapCenter: {
      lat: 46.877186,
      lng: -96.789803
    }
  };

  componentDidMount() {
    this.getQuakes();
  }

  getQuakes() {
    QuakeModel.all().then((data) => {
      console.log(data.data.features);
    })
  }
 
  render() {
    return (
      <Map google={this.props.google}
           containerStyle={containerStyle}
           zoom={2}
           initialCenter={{ 
              lat: this.state.mapCenter.lat,
              lng: this.state.mapCenter.lng
            }}
            center={{
              lat: this.state.mapCenter.lat,
              lng: this.state.mapCenter.lng
            }}
          >
        <Marker name={'Current location'} 
                position={{ 
                  lat: this.state.mapCenter.lat,
                  lng: this.state.mapCenter.lng
                 }}
                />

        <Marker position={{ 
                  lat: 37.774929,
                  lng: -122.419418
                 }}
                />
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyA3gT0aNNXg5T4xE4Y4K2RPfFAFNP1US2o')
})(MapContainer)

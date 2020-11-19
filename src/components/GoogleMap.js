import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const containerStyle = {
  position: 'absolute',
  width: '40%',
  height: '90%'
}

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    mapCenter: {
      lat: 46.877186,
      lng: -96.789803
    }
  };
 
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
 
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };
 
  render() {
    return (
      <Map google={this.props.google}
           containerStyle={containerStyle}
           onClick={this.onMapClicked}
           zoom={5}
           initialCenter={{ 
              lat: this.state.mapCenter.lat,
              lng: this.state.mapCenter.lng
            }}
            center={{
              lat: this.state.mapCenter.lat,
              lng: this.state.mapCenter.lng
            }}
          >
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} 
                position={{ 
                  lat: this.state.mapCenter.lat,
                  lng: this.state.mapCenter.lng
                 }}
                />
 
        {/* <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow> */}
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyA3gT0aNNXg5T4xE4Y4K2RPfFAFNP1US2o')
})(MapContainer)

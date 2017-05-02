import React, { Component } from 'react';
import PlaceForm from '../components/PlaceForm'
import GoogleMapReact from 'google-map-react';

var AnyReactComponent = ({ text }) => (
  <div style={{
    position: 'relative', color: 'white', background: 'red',
    height: 40, width: 40, top: -20, left: -30,    
  }}>
    {text}
  </div>
);



export class SimpleMap extends Component {
  static defaultProps = {
    center: {lat: 13.7515912 ,lng: 100.4926579},
    zoom: 16
  };

  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        bootstrapURLKeys={{
         key: 'AIzaSyDFGpXiv2ChtHrhkxeEj9aV6v3C9ZDDJDI',
          language: 'th'
         }}
      >
      <AnyReactComponent
          lat={13.7515912}
          lng={100.4926579}
          text={'WAT PHRA KAEW'}
        />
      </GoogleMapReact>
    );
  }
}

export default SimpleMap
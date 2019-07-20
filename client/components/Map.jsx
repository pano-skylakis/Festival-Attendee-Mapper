import React from 'react'
import { Map as LeafletMap, TileLayer } from 'react-leaflet'

class Map extends React.Component {
  constructor() {
    super()

    this.state = {
      lat: -41.293699,
      lng: 174.775497,
      zoom: 16
    }
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <LeafletMap className="map-margin enter" center={position} zoom={this.state.zoom}>
        <TileLayer url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'/>
      </LeafletMap>
    );
  }
}
  

export default Map;


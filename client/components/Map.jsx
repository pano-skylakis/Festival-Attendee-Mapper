import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet'

// const pointerIcon = new L.Icon({
//   iconUrl: require(''),
//   iconRetinaUrl: require(''),
//   iconAnchor: [5, 55],
//   popupAnchor: [10, -44],
//   iconSize: [25, 55],
//   shadowUrl: '',
//   shadowSize: [68, 95],
//   shadowAnchor: [20, 92],
// })

class Map extends React.Component {
  constructor() {
    super()

    this.state = {
      lat: -41.293699,
      lng: 174.775497,
      zoom: 16,
      markers: []
    }
  }

  addMarker = (e) => {
    const {markers} = this.state
    markers.push(e.latlng)
    this.setState({markers})
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <LeafletMap className="map-margin" center={position} zoom={this.state.zoom} onClick={this.addMarker}>
        <TileLayer url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'/>
        {this.state.markers.map((position, idx) => 
          <Marker key={`marker-${idx}`} position={position}>
          <Popup>
            <span>Info</span>
          </Popup>
        </Marker>
        )}
      </LeafletMap>
    );
  }
}
  





export default Map
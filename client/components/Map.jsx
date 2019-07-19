import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import HeatmapLayer from 'react-leaflet-heatmap-layer'


class PrimaryMap extends React.Component {
  constructor() {
    super()

    this.state = {
      lat: -41.293699,
      lng: 174.775497,
      zoom: 100,
      // addressPoints: [[-41.2964667, 174.7736692, '28'],[-41.2964667, 174.7736692, '28'],[-41.2964667, 174.7736692, '28'],[-41.2964667, 174.7736692, '28'],[-41.2964667, 174.7736692, '28']]
      addressPoints: [[-41.2964667, 174.7736692, '28']]
    }
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    // const points = [[-41.2964667, 174.7736692, '28']]
    const points = [
      [-41.2964666, 175.3657417333, "500"],
      [-41.2964665, 175.3657417333, "501"],
      [-41.2964664, 175.3657417333, "502"],
      [-41.2964663, 175.3657417333, "503"],
      [-41.2964662, 175.3657417333, "504"],
      [-41.2964661, 175.3657417333, "505"],
    ]
    console.log(points)
    return (
      <Map
          // ref={m => { this.LeafletMap = m; }}
          center={position} 
          zoom={this.state.zoom}>
            <HeatmapLayer
              fitBoundsOnLoad
              fitBoundsOnUpdate
              points={points}
              longitudeExtractor={m => {
                console.log(m)
                return m[1]
              }}
              latitudeExtractor={m => m[0]}
              intensityExtractor={m => parseFloat(m[2])} />
        <TileLayer url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'/>
      </Map>
    );
  }
}
  

export default PrimaryMap;


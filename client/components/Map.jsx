import React from 'react'
import { Map as LeafletMap, TileLayer } from 'react-leaflet'
import HeatmapLayer from 'react-leaflet-heatmap-layer'
import {getTotalUniqueUsersApi} from '../api/geoLocationApi'

class Map extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      lat: -41.293699,
      lng: 174.775497,
      zoom: 16,
      addressPoints: []
    }
    this.convertMapData = this.convertMapData.bind(this)
  }


  componentDidMount() {

    getTotalUniqueUsersApi()
      .then(data => {
        this.setState({uniqueUsers: data})
      })
  }
  convertMapData(arr){
    // console.log(this.state.addressPoints)
  }

  addMarker = (e) => {
    const {markers} = this.state
    markers.push(e.latlng)
    this.setState({markers})
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <LeafletMap className="map-margin" center={position} zoom={this.state.zoom}>
        <HeatmapLayer
              fitBoundsOnLoad
              fitBoundsOnUpdate
              points={this.props.addressPoints}
              longitudeExtractor={m => m[1]}
              latitudeExtractor={m => m[0]}
              intensityExtractor={m => parseFloat(m[2])} />
        <TileLayer url='https://{s}.tile.osm.org/{z}/{x}/{y}.png' />
      </LeafletMap>
    );
  }
}


export default Map;

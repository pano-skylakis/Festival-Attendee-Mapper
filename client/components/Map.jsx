import React from 'react'
import { Map as LeafletMap, TileLayer } from 'react-leaflet'
import HeatmapLayer from 'react-leaflet-heatmap-layer'
import {addressPoints as stuff} from './realworld.10000'

class Map extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      lat: -41.293699,
      lng: 174.775497,
      zoom: 16,
      addressPoints:[[-41.293699,174.775497,'0']],
    }
  }
  componentDidMount(){
    console.log(this.state.addressPoints)
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.addressPoints !== []){
      this.setState({
        addressPoints: [...this.state.addressPoints, nextProps.addressPoints]
      })
      console.log(this.state.addressPoints)
    }
  }

  componentDidMount() {
    getTotalUniqueUsersApi()
      .then(data => {
        this.setState({uniqueUsers: data})
      })
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
        {/* <HeatmapLayer
              fitBoundsOnLoad
              fitBoundsOnUpdate
              points={this.state.addressPoints}
              longitudeExtractor={m => m[1]}
              latitudeExtractor={m => m[0]}
              intensityExtractor={m => parseFloat(m[2])} /> */}
        <TileLayer url='https://{s}.tile.osm.org/{z}/{x}/{y}.png' />
      </LeafletMap>
    );
  }
}


export default Map;

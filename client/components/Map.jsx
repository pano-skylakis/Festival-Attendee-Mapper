import React from 'react'
<<<<<<< HEAD
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet'
import { getTotalUniqueUsersApi } from '../api/geoLocationApi'
||||||| merged common ancestors
import { Map as LeafletMap, TileLayer } from 'react-leaflet'
=======
import { Map as LeafletMap, TileLayer } from 'react-leaflet'
import HeatmapLayer from 'react-leaflet-heatmap-layer'
import {addressPoints as stuff} from './realworld.10000'
>>>>>>> 72e694ba6dbe76be0fabee6cfc799ef3e5c07a3a

class Map extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      lat: -41.293699,
      lng: 174.775497,
<<<<<<< HEAD
      zoom: 16,
      markers: [],
      uniqueUsers: null,
      maxZoom: 19,
||||||| merged common ancestors
      zoom: 16
=======
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
>>>>>>> 72e694ba6dbe76be0fabee6cfc799ef3e5c07a3a
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
<<<<<<< HEAD
      <LeafletMap className="map-margin" center={position} zoom={this.state.zoom} onClick={this.addMarker} maxZoom={this.state.maxZoom}>
        <TileLayer url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'/>
        {this.state.markers.map((position, idx) => 
          <Marker key={`marker-${idx}`} position={position}>
          <Popup>
            <span>{`${this.state.uniqueUsers}`}</span>
          </Popup>
        </Marker>
        )}
||||||| merged common ancestors
      <LeafletMap className="map-margin" center={position} zoom={this.state.zoom}>
        <TileLayer url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'/>
=======
      <LeafletMap className="map-margin" center={position} zoom={this.state.zoom}>
        {/* <HeatmapLayer
              fitBoundsOnLoad
              fitBoundsOnUpdate
              points={this.state.addressPoints}
              longitudeExtractor={m => m[1]}
              latitudeExtractor={m => m[0]}
              intensityExtractor={m => parseFloat(m[2])} /> */}
        <TileLayer url='https://{s}.tile.osm.org/{z}/{x}/{y}.png' />
>>>>>>> 72e694ba6dbe76be0fabee6cfc799ef3e5c07a3a
      </LeafletMap>
    );
  }
}

<<<<<<< HEAD
export default Map
||||||| merged common ancestors
export default Map;

=======

export default Map;
>>>>>>> 72e694ba6dbe76be0fabee6cfc799ef3e5c07a3a

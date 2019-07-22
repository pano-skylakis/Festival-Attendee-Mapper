import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup, LayersControl } from 'react-leaflet'
import { getTotalUniqueUsersApi } from '../api/geoLocationApi'
import { getMarkerLocationsApi, addMarkerLocationApi } from '../api/markerLocationApi';
import HeatmapLayer from 'react-leaflet-heatmap-layer'


class Map extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      lat: -41.293699,
      lng: 174.775497,
      zoom: 16,
      markers: [],
      uniqueUsers: null,
      maxZoom: 19,
      savedMarkers: [],
      addressPoints: [],
    }
  }


  componentDidMount() {
    getTotalUniqueUsersApi()
      .then(data => {
        this.setState({ uniqueUsers: data })
      })
    this.getMarkerLocations()
  }

  getMarkerLocations = () => {
    getMarkerLocationsApi()
      .then(data => {
        this.refreshState(data)
      })
  }

  refreshState = (data) => {
    this.setState({ savedMarkers: data })
  }

  addMarker = (e) => {
    const { markers } = this.state

    markers.push(e.latlng)
    this.setState({ markers })

    console.log(this.state.markers)

    addMarkerLocationApi(e.latlng)
      .then(this.getMarkerLocations())
  }

  render() {
    const centerPosition = [this.state.lat, this.state.lng];
    return (
      <LeafletMap className="map-margin" center={centerPosition} zoom={this.state.zoom} onClick={this.addMarker} maxZoom={this.state.maxZoom}>
        <LayersControl position='topright'>
          <LayersControl.BaseLayer checked name='Street View'>
            <TileLayer url='https://{s}.tile.osm.org/{z}/{x}/{y}.png' />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name='Satellite'>
            <TileLayer url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}' />
          </LayersControl.BaseLayer>
        </LayersControl>
        <HeatmapLayer
              fitBoundsOnLoad
              fitBoundsOnUpdate
              points={this.props.addressPoints}
              longitudeExtractor={m => m[1]}
              latitudeExtractor={m => m[0]}
              intensityExtractor={m => parseFloat(m[2])} />
        {this.state.savedMarkers.map((position, idx) =>
          <Marker key={`marker-${idx}`} position={{ lat: position.latitude, lng: position.longitude }}>
            <Popup>
              {/* this changes whatever is in the pop-up --v*/}
              {/* <span>Number of Unique Users: {`${this.state.uniqueUsers}`}</span><br/> */}
              <span>New pin!</span><br/>

              Description: <input type="text" name="lname"/>
                <input type="submit" value="Add"/>
            </Popup>
          </Marker>
                )}
                
      </LeafletMap>
    )
  }
}


export default Map;
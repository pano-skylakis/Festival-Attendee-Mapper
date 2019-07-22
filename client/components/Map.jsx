import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup, Polygon, LayersControl } from 'react-leaflet'
import { getMarkerLocationsApi, addMarkerLocationApi, deleteMarkerApi, addMarkerDescriptionApi } from '../api/markerLocationApi'
import HeatmapLayer from 'react-leaflet-heatmap-layer';


class Map extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      lat: -41.293699,
      lng: 174.775497,
      zoom: 16,
      markers: [],
      description: '',
      maxZoom: 19,
      savedMarkers: [],
      addressPoints: [],
      positions: [[-41.297850, 174.775803],[-41.296085, 174.771753],[-41.288876, 174.776126],[-41.291125, 174.779602]]
    }
  }
  
  //adds poly position on right click
  // addPolyPosition = (e) => {
  //   const newPos = [e.latlng.lat, e.latlng.lng];
  //   this.setState(prevState => (
  //     {
  //       positions: prevState.positions.concat([newPos])
  //     }
  //   ));
  //   return false
  // }


  componentDidMount() {
    this.getMarkerLocations()
  }


  //gets all marker locations from database and assigns them to state using refreshState method
  getMarkerLocations = () => {
    getMarkerLocationsApi()
      .then(data => {
        this.refreshState(data)
      })
  }
  refreshState = data => {
    this.setState({ savedMarkers: data, description: '' })
  }


  //adds marker on map-click event
  addMarker = e => {
    addMarkerLocationApi(e.latlng)
      .then(this.getMarkerLocations())
  }


  //deletes selected marker
  deleteMarker = e => {
    deleteMarkerApi(e.target.id)
      .then(this.getMarkerLocations())
  }


  //sets state to current description input value
  handleDescriptionChange = e => {
    this.setState({description: e.target.value})
  }


  //submits description to database on click event
  handleDescriptionSubmit = e => {
    e.preventDefault()
    addMarkerDescriptionApi(this.state.description, e.target.dataset.marker)
      .then(this.getMarkerLocations())
  }


  render() {
    const centerPosition = [this.state.lat, this.state.lng];
    return (
      <LeafletMap oncontextmenu={this.addPolyPosition} className="map-margin"  center={centerPosition} zoom={this.state.zoom} fitBoundsOnLoad={this.state.positions} onClick={this.addMarker} maxZoom={this.state.maxZoom}>      
        <Polygon color="black" positions = {this.state.positions}/>
        
        <HeatmapLayer
              fitBoundsOnLoad
              // fitBoundsOnUpdate
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
                  <button onClick={this.deleteMarker} id={position.id}>Delete</button>
                  Description: {position.description}<input type="text" name="lname" onChange={this.handleDescriptionChange} value={this.state.description}/>
                    <input data-marker={position.id} type="submit" value="Add" onClick={this.handleDescriptionSubmit}/>
                </Popup>
              </Marker>
                    )}


        <LayersControl position='topright'>
          <LayersControl.BaseLayer checked name='Street View'>
            <TileLayer url='https://{s}.tile.osm.org/{z}/{x}/{y}.png' />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name='Satellite'>
            <TileLayer url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}' />
          </LayersControl.BaseLayer>
        </LayersControl>

      </LeafletMap>
    )
  }
}


export default Map;
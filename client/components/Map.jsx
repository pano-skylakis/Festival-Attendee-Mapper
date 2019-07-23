import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup, Polygon, LayersControl } from 'react-leaflet'
import { getMarkerLocationsApi, addMarkerLocationApi, deleteMarkerApi, addMarkerDescriptionApi } from '../api/markerLocationApi'
import HeatmapLayer from 'react-leaflet-heatmap-layer';


import MapIcons from './MapIcons'


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
      positions: [[-41.297850, 174.775803], [-41.296085, 174.771753], [-41.288876, 174.776126], [-41.291125, 174.779602]],
      heatChange: false,
      images: [
        './images/babyCarriage.svg', 
        './images/firstAid.svg', 
        './images/coffee.svg', 
        './images/guitar.svg', 
        './images/information.svg', 
        './images/toilet.svg',
        './images/trash.svg',
        './images/food.svg',
        './images/water.svg'],
      selectedIcon: MapIcons.toiletIcon
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

    console.log(e.target)
    addMarkerLocationApi(e.latlng)
      .then(this.getMarkerLocations)
  }


  //deletes selected marker
  deleteMarker = e => {
    deleteMarkerApi(e.target.id)
      .then(this.getMarkerLocations)
  }


  //sets state to current description input value
  handleDescriptionChange = e => {
    this.setState({ description: e.target.value })
  }


  //submits description to database on click event
  handleDescriptionSubmit = e => {
    e.preventDefault()
    addMarkerDescriptionApi(this.state.description, e.target.dataset.marker)
      .then(this.getMarkerLocations)
  }

  //toggles heat map
  handleToggleHeatMap = e => {
    this.setState({ heatChange: true })
  }

  //icon click handler
//   setIcons = (iconString) => {
//     switch(true) {
//       case iconString === 'babyCarriageIcon': 
//         this.setState({selectedIcon: babyCarriageIcon})
//         break;
//       case iconString === 'coffeeIcon': 
//         this.setState({selectedIcon: coffeeIcon})
//         break;
//       case iconString === 'firstAidIcon': 
//         this.setState({selectedIcon: firstAidIcon})
//         break;
//       case iconString === 'foodIcon': 
//         this.setState({selectedIcon: foodIcon})
//         break;
//       case iconString === 'guitarIcon': 
//         this.setState({selectedIcon: guitarIcon})
//         break;
//       case iconString === 'informationIcon': 
//         this.setState({selectedIcon: informationIcon})
//         break;
//       case iconString === 'toiletIcon': 
//         this.setState({selectedIcon: toiletIcon})
//         break;
//       case iconString === 'trashIcon': 
//         this.setState({selectedIcon: trashIcon})
//         break;
//       case iconString === 'waterIcon': 
//         this.setState({selectedIcon: waterIcon})
//         break;
//     }
// }


  render() {
    const centerPosition = [this.state.lat, this.state.lng];
    return (
      <React.Fragment>
        <LeafletMap oncontextmenu={this.addPolyPosition} className="map-margin"  center={centerPosition} zoom={this.state.zoom} fitBoundsOnLoad={this.state.positions} onClick={this.addMarker} maxZoom={this.state.maxZoom}>      
          <Polygon color="black" positions = {this.state.positions}/>


              {this.state.savedMarkers.map((position, idx) => {
                return <Marker key={`marker-${idx}`} icon={MapIcons[position['markers']]} position={{ lat: position.latitude, lng: position.longitude }}>
                  <Popup>
                    {/* this changes whatever is in the pop-up --v*/}
                    <span>New pin!</span><br/>
                    <button onClick={this.deleteMarker} id={position.id}>Delete</button>
                    Description: {position.description}<input type="text" name="lname" onChange={this.handleDescriptionChange} value={this.state.description}/>
                      <input data-marker={position.id} type="submit" value="Add" onClick={this.handleDescriptionSubmit}/>
                  </Popup>
                </Marker>
              })}


                {/* map layer-control */}
          <LayersControl position='topright'>
            <LayersControl.BaseLayer checked name='Street View'>
              <TileLayer url='https://{s}.tile.osm.org/{z}/{x}/{y}.png' />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name='Satellite'>
              <TileLayer url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}' />
            </LayersControl.BaseLayer>
            <LayersControl.Overlay name="Heatmap" checked>
              <HeatmapLayer
                fitBoundsOnLoad
                points={this.props.addressPoints}
                longitudeExtractor={m => m[1]}
                latitudeExtractor={m => m[0]}
                intensityExtractor={m => parseFloat(m[2])}
              />
            </LayersControl.Overlay>
          </LayersControl>

        </LeafletMap>


                {/* map-icons */}
        <section className="icon-select-wrapper">
          <ul>
              {this.state.images.map((url, idx) => {
                  let mapIconKey = url.split('/')
                  mapIconKey = mapIconKey[2].split('.')
                  mapIconKey = mapIconKey[0]

                  return <li key={idx}><a onClick={this.handleIconClick}><img data-icon={mapIconKey} src={url} width="30px"/></a></li>
              })}
          </ul>
        </section>
      </React.Fragment>
    )
  }
}
 

export default Map;
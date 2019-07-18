import React from 'react'
import { render } from 'react-dom'
import { Map as LeafletMap, Marker, Popup, TileLayer } from 'react-leaflet'


// class Map extends React.Component {
//     constructor(props) {
//         super(props)
        
//         this.state = {

//         }
//     }


//     render() { 
//         return (  
//             <>
//                 <div id='map'>
//                   <p>
//                       map
//                   </p>

//                 </div>
//             </>
//         );
//     }
// }

// const { Map: LeafletMap, TileLayer, Marker, Popup } = ReactLeaflet

class SimpleExample extends React.Component {
  constructor() {
    super()

    this.state = {
      lat: -41.290972,
      lng: 174.780310,
      zoom: 13
    }
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <LeafletMap center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. 
            <br/> 
            Easily customizable.
          </Popup>
        </Marker>
      </LeafletMap>
    );
  }
}


// ReactDOM.render(<SimpleExample/>, document.getElementById('container'))
  
 
export default SimpleExample;


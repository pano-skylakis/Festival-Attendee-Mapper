import React from 'react'
import { success, error, options, locationTag } from '../../public/geotag'

class App extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            geoTags: [],
        }
        this.outOfBoundsChecker = this.outOfBoundsChecker.bind(this)
    }

    componentDidMount(){
        this.geolocate() 
        console.log(this.outOfBoundsChecker(-41.277843, 174.778833))       
    }

    

    geolocate = () => {
        const error = () => {
            console.warn(`ERROR(${err.code}): ${err.message}`);
          }
        const options = {
            enableHighAccuracy: true,
            timeout: 60000,
            maximumAge: 0
          };
        setInterval(function(){
            navigator.geolocation.getCurrentPosition(this.saveLocation, error, options)
        }.bind(this), 3000)
    }

outOfBoundsChecker(lat, long){
    const maxLong = 185.22685558
    const minLong = 185.22624135
    const maxLat = -41.29017383
    const minLat = -41.29675161

    if(lat <= maxLat && lat >= minLat && long <= maxLong && long >= minLong){
        return true
    }
    return false


}
saveLocation =(pos) => {
    let crd = pos.coords;
    const locationTag ={}

    locationTag.latitude = crd.latitude
    locationTag.longitude = crd.longitude
    locationTag.accuracy = crd.accuracy,


    // Set state
    this.setState({
        geoTags: [...this.state.geoTags, locationTag]
    })
}

    render() { 
        return (   
            <React.Fragment>
                <ul>
                {this.state.geoTags.map(tag =>{
                   return <li>Lat: {tag.latitude} Long: {tag.longitude} Accurate to: {tag.accuracy} meters</li>
                })}
                </ul>

            </React.Fragment>
        );
    }
}
 
export default App;
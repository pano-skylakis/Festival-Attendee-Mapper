import React from 'react'
const uuidv4 = require('uuid/v4')

import Splash from './Splash'
import Footer from './Footer'
import Map from './Map'
import BarGraph from './BarGraph'
import LineGraph from './LineGraph'
import ScatterGraph from './ScatterGraph'
import Stats from './Stats'

import { addGeoLocationApi, getGeoLocationsApi } from '../api/geoLocationApi';


class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            locs: [],
            barGraph: true,
            lineGraph: false,
        }
    }

    componentDidMount() {
        let userStorage = window.localStorage;
        if (userStorage.userId){
            console.log("Existing user found: " + userStorage.userId)
        }else{
            userStorage.userId = uuidv4()
            console.log("New User Set: " + userStorage.userId)
        }
        this.geoLocate()
        this.getLocations()
    }


        // Get Locations from Database
    getLocations = () => {
            getGeoLocationsApi()
                .then(locations => {
                    this.refreshLocations(locations)
                })
        }
    
        refreshLocations = (locations) => {
            this.setState({
                locs: locations || [],
            })
            console.log(this.state.locs)
        }



        // Track Locations
    geoLocate = () => {
        const error = () => {
            console.warn(`ERROR(${err.code}): ${err.message}`);
        }
        const options = {
            enableHighAccuracy: true,
            timeout: 60000,
            maximumAge: 0
        };
        setInterval(function () {
            navigator.geolocation.getCurrentPosition(this.saveLocation, error, options)
        }.bind(this), 3000)
    }

    saveLocation = (pos) => {
        let crd = pos.coords;
        const locationTag = {}

    
        if (this.outOfBoundsChecker(crd.latitude, crd.longitude)) {
            locationTag.latitude = crd.latitude
            locationTag.longitude = crd.longitude
            locationTag.accuracy = crd.accuracy
            locationTag.user  = window.localStorage.userId

            this.setState({
                geoTags: locationTag
            })
            addGeoLocationApi(this.state.geoTags)
            this.getLocations()
        }
        console.log("Out of bounds!")
    }

    outOfBoundsChecker = (lat, long) => {
        const eastLong = 174.780310
        const westLong = 174.772497
        const northLat = -41.290972
        const southLat = -41.297387


        if (lat >= southLat && lat <= northLat && long <= eastLong && long >= westLong) {
            return true
        }
        return false
    }

    handleClick = () => {
        this.state.barGraph ? this.setState({barGraph: false, lineGraph: true}) : this.setState({barGraph: true, lineGraph: false})
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <Splash />
                    <div className='content'>
                        <Stats/>
                         <div className="graph-container">
                            <Map />
                            <div className="graph-padding">
                                {this.state.barGraph && <BarGraph />}
                                {this.state.lineGraph && <LineGraph />}
                                <p onClick={this.handleClick} className="toggle-button">Another Graph</p>
                            </div>
                            </div> 
                        <Footer/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default App;
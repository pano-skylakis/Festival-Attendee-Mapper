import React from 'react'
import moment from 'moment'

const uuidv4 = require('uuid/v4')

import Splash from './Splash'
import Footer from './Footer'
import PrimaryMap from './Map'
import BarGraph from './BarGraph'
import LineGraph from './LineGraph'

import { addGeoLocationApi, getGeoLocationsApi, getGeoLocationByTimeApi } from '../api/geoLocationApi';


class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            locs: []
        }
    }

    componentDidMount() {
        // let userStorage = window.localStorage;
        // if (userStorage.userId){
        //     console.log("Existing user found: " + userStorage.userId)
        // }else{
        //     userStorage.userId = uuidv4()
        //     console.log("New User Set: " + userStorage.userId)
        // }
        // this.geoLocate()
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
            locs: locations || []
        })
        console.log(this.state.locs)
    }



        // Track Locations
    // geoLocate = () => {
    //     const error = () => {
    //         console.warn(`ERROR(${err.code}): ${err.message}`);
    //     }
    //     const options = {
    //         enableHighAccuracy: true,
    //         timeout: 60000,
    //         maximumAge: 0
    //     };
    //     let interval = setInterval(function () {
    //         navigator.geolocation.getCurrentPosition(this.saveLocation, error, options)
    //     }.bind(this), 3000)
    // }

    // saveLocation = (pos) => {
    //     let crd = pos.coords;
    //     const locationTag = {}

    
    //     if (this.outOfBoundsChecker(crd.latitude, crd.longitude)) {
    //         locationTag.latitude = crd.latitude
    //         locationTag.longitude = crd.longitude
    //         locationTag.accuracy = crd.accuracy
    //         locationTag.user  = window.localStorage.userId
    //         locationTag.timestamp = Date.now()

    //         this.setState({
    //             geoTags: locationTag
    //         })
    //         addGeoLocationApi(this.state.geoTags)
    //         this.getLocations()
    //     }
    //     console.log("Out of bounds!")
    // }

    // outOfBoundsChecker = (lat, long) => {
    //     const eastLong = 174.780310
    //     const westLong = 174.772497
    //     const northLat = -41.290972
    //     const southLat = -41.297387


    //     if (lat >= southLat && lat <= northLat && long <= eastLong && long >= westLong) {
    //         return true
    //     }
    //     return false
    // }


    handleClick = e => {
        getGeoLocationByTimeApi(e.target.dataset.greater, e.target.dataset.less)
    }

    
    handleDateChange = e => {
        console.log(e.target.value)
        let date = e.target.value
        let unixTimestamp = moment(`${e.target.value}`).unix()
        console.log(unixTimestamp)
        this.setState({currentDate: e.target.value})
    }


    render() {
        return (
            <React.Fragment>
                <div>
                    <Splash />
                    <input type="date" onChange={this.handleDateChange}/>
                    <button className='temp-button' onClick={this.handleClick} data-greater={1563548700} data-less={1563552300}>2pm - 3pm</button>
                    <div className='content'>
                        <PrimaryMap/> 
                        <div className="graph-container">   
                            <BarGraph />
                            <LineGraph />
                        </div> 
                        <Footer/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default App;
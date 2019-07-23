import React from 'react'
import moment from "moment";

import { addGeoLocationApi } from '../api/geoLocationApi'

const uuidv4 = require("uuid/v4");

class UserLanding extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {

        }
    }

    componentDidMount() {
        //assigns each user a unique id
        let userStorage = window.localStorage;
        if (userStorage.userId){
            console.log("Existing user found: " + userStorage.userId)
        }else{
            userStorage.userId = uuidv4()
        }
        this.geoLocate()
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }
    

    //track locations
    geoLocate = () => {
        const error = () => {
          console.warn(`ERROR(${err.code}): ${err.message}`);
        }
        const options = {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        };
        this.interval = setInterval(function () {
          navigator.geolocation.getCurrentPosition(this.saveLocation, error, options)
        }.bind(this), 5000)
    }
    

    //checks if out of bounds and saves user location to state >> database
    saveLocation = (pos) => {
    let crd = pos.coords;
    const locationTag = {}

    if (this.outOfBoundsChecker(crd.latitude, crd.longitude)) {
            locationTag.latitude = crd.latitude
            locationTag.longitude = crd.longitude
            locationTag.accuracy = crd.accuracy
            locationTag.user = window.localStorage.userId
            locationTag.timestamp =Math.floor(Date.now()/1000)
            console.log(locationTag.timestamp)

            this.setState({
            geoTags: locationTag
            })
            addGeoLocationApi(locationTag)

        } else {
            console.log("Out of bounds!")
        }
    }
    outOfBoundsChecker = (lat, long) => {
    const eastLong = 174.779602
    const westLong = 174.771753
    const northLat = -41.288876
    const southLat = -41.297850

    if (lat >= southLat && lat <= northLat && long <= eastLong && long >= westLong) {
        return true
    }
    return false
    }


    render() { 
        return (  
            <div className="scroller-container">
                <div className="scroller">
                    <div className="inner">
                        <span>Hi there.</span>
                        <br></br>
                        <span>Please let us track you.</span>
                        <br></br>
                        <span>We're not going to stalk you.</span>
                        <br></br>
                        <span>We're just trying to make <a className="orange">events</a> <a className="orangeb">easier</a>.</span>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default UserLanding;
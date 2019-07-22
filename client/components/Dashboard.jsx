import React from "react";
import moment from "moment";

const uuidv4 = require("uuid/v4");

import Splash from "./Splash";
import Footer from "./Footer";
import Map from "./Map";
import BarGraph from "./BarGraph";
import LineGraph from "./LineGraph";
import Stats from "./Stats";

import {
  addGeoLocationApi,
  getGeoLocationsApi,
  getGeoLocationByTimeApi,
  getHeatMapValues,
  getHeatMapIntensity
} from "../api/geoLocationApi";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        locs: [],
        currentDate: "",
        sliderValue: "12",
        barGraph: true,
        lineGraph: false,
        geoTags: {},
        heatmapData:[],
      };
  
    }
  
    componentDidMount() {
  
      // gets unique heatmap values + intensities.
      getHeatMapValues()
      .then(res=>{
        Promise.all(res.map(getHeatMapIntensity)).then(info => {
          this.setState({
            heatmapData: info
          })
        })
      })
  
      //Assigns each user a unique id
      let userStorage = window.localStorage;
      if (userStorage.userId){
          console.log("Existing user found: " + userStorage.userId)
      }else{
          userStorage.userId = uuidv4()
      }
      this.geoLocate()
      this.getLocations();
    }
    
    // Get Locations from Database
    getLocations = () => {
      getGeoLocationsApi().then(locations => {
        this.refreshLocations(locations);
      });
    };
  
    refreshLocations = locations => {
      this.setState({
        locs: locations || []
      });
    };
  
    // Track Locations
    geoLocate = () => {
      const error = () => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
      let interval = setInterval(function () {
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
        locationTag.user = window.localStorage.userId
        locationTag.timestamp = Date.now()
  
  
        this.setState({
          geoTags: locationTag
        })
        addGeoLocationApi(locationTag)
        this.getLocations()
      } else {
        console.log("Out of bounds!")
      }
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
        this.state.barGraph ? this.setState({ barGraph: false, lineGraph: true}) : this.setState({ barGraph: true, lineGraph: false})
    }
  
    handleDateChange = e => {
      this.setState({ currentDate: e.target.value });
    };
  
    handleSliderChange = e => {
      // 2019-07-20T11:06:55+0000  <<< this is the format the date must be in (ISO8106)
  
      let date = "";
  
      this.setState({ sliderValue: e.target.value });
      Number(this.state.sliderValue) < 10 ? (date = `${this.state.currentDate}T0${this.state.sliderValue}:00:55+0000`) : (date = `${this.state.currentDate}T${this.state.sliderValue}:00:55+0000`);
  
      let unixTimestamp = moment(`${date}`).unix();
  
      getGeoLocationByTimeApi(unixTimestamp, unixTimestamp + 3601);
    };

  render() {
    return (
        <React.Fragment>
          <Splash />
          <div className="content">
            <div data-aos="flip-up" data-aos-duration="2000">
              <Stats geoLocationData={this.state.locs} />
            </div>
            <div data-aos="fade-up" data-aos-duration="2000" className="graph-container">
              <input type="date" onChange={this.handleDateChange} />
              <div className="slidecontainer">
                <p>{Number(this.state.sliderValue) < 10 ? `0${this.state.sliderValue}:00` : `${this.state.sliderValue}:00` }</p>
                <input
                  type="range"
                  min="0"
                  max="23"
                  value={this.state.sliderValue}
                  className="slider"
                  id="myRange"
                  onChange={this.handleSliderChange}
                />
              </div>
              <Map addressPoints={this.state.heatmapData} />
              <div className="graph-margin" data-aos="fade-up" data-aos-duration="2000">
                {this.state.barGraph && <BarGraph />}
                {this.state.lineGraph && <LineGraph geoLocationData={this.state.locs} />}
                <p onClick={this.handleClick} className="toggle-button">
                  Toggle Graph
                </p>
              </div>
            </div>
            <Footer />
          </div>
        </React.Fragment>
    );
  }
}

export default Dashboard;

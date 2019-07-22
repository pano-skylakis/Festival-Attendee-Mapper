import React from "react";
import moment from "moment";

import Splash from "./Splash";
import Footer from "./Footer";
import Map from "./Map";
import BarGraph from "./BarGraph";
import LineGraph from "./LineGraph";
import Stats from "./Stats";

import {
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


  handleGraphButtonClick = () => {
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
      getGeoLocationByTimeApi(unixTimestamp, unixTimestamp + 3601)
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

              {/* slider */}
              <input type="date" onChange={this.handleDateChange} defaultValue="2019/07/23"/>
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
                <p onClick={this.handleGraphButtonClick} className="toggle-button">
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

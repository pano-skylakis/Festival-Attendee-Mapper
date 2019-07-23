import React from "react";

import moment from "moment";

import Splash from "./Splash";
import Footer from "./Footer";
import Map from "./Map";
import Graphs from "./Graphs";
import Stats from "./Stats";
import Unavailable from "./Unavailable"

import {
  getGeoLocationsApi,
  getGeoLocationByTimeApi,
  getHeatMapValues,
  getHeatMapIntensity,
  getHeatmapValuesByHour
} from "../api/geoLocationApi";


class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        locs: [],
        currentDate: "",
        sliderValue: "12",
        geoTags: {},
        heatmapData:[],
        isDesktop: false,
        datePicker: Date.now()
      };
  
    }
  
  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  
    // gets unique heatmap values + intensities.
    getHeatMapValues()
      .then(res => {
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
    this.state.barGraph ? this.setState({ barGraph: false, lineGraph: true }) : this.setState({ barGraph: true, lineGraph: false })
  }


  handleDateChange = e => {
    this.setState({ currentDate: e.target.value });
  };


  handleSliderChange = e => {
    // 2019-07-20T11:06:55+0000  <<< this is the format the date must be in (ISO8106)
    let date = "";

    this.setState({ sliderValue: e.target.value });

    // >>> stop reformatting my ternary-operators <<<
    Number(this.state.sliderValue) < 10 ? (date = `${this.state.currentDate}T0${this.state.sliderValue}:00:55+0000`) : (date = `${this.state.currentDate}T${this.state.sliderValue}:00:55+0000`);

    let unixTimestamp = moment(`${date}`).unix();

    getGeoLocationByTimeApi(unixTimestamp, unixTimestamp + 3601)
      .then(locByTime => {
        let idsArr = []
        locByTime.map(loc => {
          idsArr.push(loc.id)
        })
        return idsArr
      })
      .then(ids=>{
        getHeatmapValuesByHour(ids)
        .then(res => {

          Promise.all(res.map(getHeatMapIntensity))
          .then(info => {
            this.setState({
              heatmapData: info
            })
          })
        })
      })
    }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate = () => {
    this.setState({ isDesktop: window.innerWidth > 1023 })
  }

  render() {

    const isDesktop = this.state.isDesktop;

    return (
      <React.Fragment>
        <Splash />
        <div className="content">
          <div data-aos="flip-up" data-aos-duration="2000">
            <Stats geoLocationData={this.state.locs} />
          </div>

          <div data-aos="fade-up" data-aos-duration="2000" className="graph-container">
            <div data-aos="fade-up" data-aos-duration="2000" className="graph-container">
            <div className="slider-and-data">
              <div className="just-data">
              <input type="date" className="date-input" defaultValue="2019/07/23" onChange={this.handleDateChange} />
                <p className="slider-time">{Number(this.state.sliderValue) < 10 ? `0${this.state.sliderValue}:00` : `${this.state.sliderValue}:00` }</p>
              </div> 
                <div className="slidecontainer">
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
              </div>

              <Map addressPoints={this.state.heatmapData} />
              
              <div>
                {isDesktop ? (<Graphs geoLocationData={this.state.locs}/>) : (<Unavailable />)}
              </div>
              
            </div>
          </div>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;

//  >>>README<<<

// API is assigning data from database to local state


import React, { Component } from 'react';
import { getGeoLocationsApi } from '../api/geoLocationApi';

class ApiTest extends Component {
    constructor(props) {
        super(props);

        this.state = {
            locs: []
        }
    }

    componentDidMount() {
        this.getLocations()
    }

    getLocations = () => {
        getGeoLocationsApi()
            .then(locations => {
                this.refreshLocations(locations)
            })
    }

    refreshLocations = (locations) => {
      console.log(locations)
        this.setState({
            locs: locations || []
        })
    }
    
    render() {
        return (
            <h1>Yo</h1>
        );
    }
}
 
export default ApiTest;
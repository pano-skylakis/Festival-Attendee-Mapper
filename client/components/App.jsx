import React from 'react'
import { success, error, options, locationTag } from '../../public/geotag'

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            geoTags: [],
        }
    }

    componentDidMount() {
        this.geolocate()
    }



    geolocate = () => {
        setInterval(function () {
            navigator.geolocation.getCurrentPosition(this.saveLocation)
        }.bind(this), 3000)
    }

    saveLocation = (pos) => {
        let crd = pos.coords;
        const locationTag = {}

        locationTag.latitude = crd.latitude
        locationTag.longitude = crd.longitude
        locationTag.accuracy = crd.accuracy,

            console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
        console.log(Date.now().toString())

        // Set state
        this.setState({
            geoTags: [...this.state.geoTags, locationTag]
        })
    }

    render() {
        return (
            <React.Fragment>
                <ul>
                    {this.state.geoTags.map(tag => {
                        return <li>Lat: {tag.latitude} Long: {tag.longitude}</li>
                    })}
                </ul>
            </React.Fragment>
        );
    }
}

export default App;
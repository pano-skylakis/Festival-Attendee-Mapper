import React from 'react'
import Splash from './Splash'
import Test from './test'
import Footer from './Footer'

import { addGeoLocationApi } from '../api/geoLocationApi';


class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            geoTags: []
        }
    }

    componentDidMount(){
        this.geoLocate() 
    }



    geoLocate = () => {
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

    saveLocation =(pos) => {
        let crd = pos.coords;
        const locationTag ={}
    

       if(this.outOfBoundsChecker(crd.latitude, crd.longitude)){
        locationTag.latitude = crd.latitude
        locationTag.longitude = crd.longitude
        locationTag.accuracy = crd.accuracy
        locationTag.timestamp = Date.now()
        
        
        this.setState({
            geoTags: locationTag
        })
        addGeoLocationApi(this.state.geoTags[0])

       } else {
        locationTag.latitude = crd.latitude
        locationTag.longitude = crd.longitude
        locationTag.accuracy = crd.accuracy
        locationTag.timestamp = Date.now()
        console.log(crd)

        // in production this else statement will be removed
       }
    }

    outOfBoundsChecker = (lat, long) => {
        const eastLong = 174.780310
        const westLong = 174.772497
        const northLat = -41.290972
        const southLat = -41.297387
    
    
        if(lat >= southLat && lat <= northLat && long <= eastLong && long >= westLong){
            return true
        }
        return false
    }

    render() { 
        return (   
            <React.Fragment>
                <div>
                <Splash/>
                    <div className='content'>
                        <Test/>
                        <ul>
                            {this.state.geoTags.map(tag =>{
                            return <li>Lat: {tag.latitude} Long: {tag.longitude} Accurate to: {tag.accuracy} meters</li>
                            })}
                        </ul>
                        <Footer/>
                    
                
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default App;
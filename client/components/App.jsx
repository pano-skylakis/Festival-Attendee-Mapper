import React from 'react'
import Splash from './Splash'
import Test from './test'
import Footer from './Footer'

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
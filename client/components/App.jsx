import React from 'react'
import Map from './Map'
import Stats from './Stats'
import Splash from './Splash'

class App extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {

        }
    }


    render() { 
        return (  
            <React.Fragment>
                <h1>Welcome!!</h1>
                <Splash/>
                <Stats/>
                <Map/>
            </React.Fragment>
        );
    }
}
 
export default App;
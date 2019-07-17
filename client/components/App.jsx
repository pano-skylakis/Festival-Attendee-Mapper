import React from 'react'
import Splash from './Splash'

import Nav from './Nav'
import Graph from './Graph'

class App extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {

        }
    }


    render() { 
        return (  
            <React.Fragment>
                <div>
                <h1>Welcome!!</h1>
                <Splash/>
                <Graph/>
                <Nav/>
                </div>
            </React.Fragment>
        );
    }
}
 
export default App;
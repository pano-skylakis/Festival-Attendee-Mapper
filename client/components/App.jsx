import React from 'react'
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
                <div>
                <h1>Welcome!!</h1>
                <Splash/>
                </div>
            </React.Fragment>
        );
    }
}
 
export default App;
import React from 'react'
import Logo from './Logo'
import Loading from './Loading'

class App extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {

        }
    }


    render() { 
        return (  
            <React.Fragment className="splash">
                <h1 className="tracking-in-contract middle">Festival Attendee Mapper</h1>
                <div class="arrow bounce"></div>            
            </React.Fragment>
        );
    }
}
 
export default App;
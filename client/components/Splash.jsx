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
            <div className="splash">
                <h1 className="tracking-in-contract middle">Festival&nbsp;Attendee&nbsp;Mapper</h1>
                <div class="arrow bounce"></div>            
            </div>
        );
    }
}
 
export default App;
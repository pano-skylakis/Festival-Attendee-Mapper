import React from 'react'

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
            <>
                <h1>Welcome!!</h1>
                <Graph/>
                <Nav/>
            </>
        );
    }
}
 
export default App;
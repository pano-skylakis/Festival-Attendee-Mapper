import React from 'react'
import Splash from './Splash'
import Test from './test'


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
                <Splash/>
                    <div className='content'>
                        <Test/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default App;
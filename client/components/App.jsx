import React from 'react'
import Splash from './Splash'
import Test from './test'
import Footer from './Footer'


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
                        <Footer/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default App;
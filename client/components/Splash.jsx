import React from 'react'
import {Link, animateScroll as scroll} from 'react-scroll'

class Splash extends React.Component {

    render() { 
        return (  
            <div className="splash">
                <h1 className="tracking-in-contract middle">Festival Attendee Mapper</h1>
                <Link 
                    activeClass='active'
                    to='enter'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1050}>
                        <div className="arrow bounce"></div>
                </Link>            
            </div>
        );
    }
}
 
export default Splash;
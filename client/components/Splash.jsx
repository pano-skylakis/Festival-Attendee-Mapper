import React from 'react'
import {Link, animateScroll as scroll} from 'react-scroll'

class Splash extends React.Component {

    render() { 
        return (  
            <div className="splash">
                <h1 className="tracking-in-contract middle"><span className="festival-fade">Festival</span> <span className="attendee-fade">Attendee</span> <span className="mapper-fade">Mapper</span></h1>
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
import React from 'react'

class UserLanding extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {

        }
    }


    render() { 
        return (  
            <div className="scroller-container">
                <div className="scroller">
                    <div className="inner">
                        <span>Hi there.</span>
                        <br></br>
                        <span>Please let us track you.</span>
                        <br></br>
                        <span>We're not going to stalk you.</span>
                        <br></br>
                        <span>We're just trying to make <a className="orange">events</a> <a className="orangeb">easier</a>.</span>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default UserLanding;
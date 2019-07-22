import React from 'react'

class UserLanding extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {

        }
    }


    render() { 
        return (  
            <div className="splash-container">
                <div className="scroller">
                    <div className="inner">
                        <span>Hi there.</span>
                        <span>Please let us track you.</span>
                        <span>We're not going to stalk you.</span>
                        <span>We're just trying to make <a className="blue">events</a> <a className="blueb">easier</a>.</span>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default UserLanding;
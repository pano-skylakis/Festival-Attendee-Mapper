import React from 'react'

class Nav extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {

        }
    }

    render() { 
        return (  
            <>
                <div>
                    <h1>Nav</h1>
                    <button>Location 1</button>
                    <button>Location 2</button>
                    <button>Location 3</button>
                    <button>Location 4</button>
                </div>
            </>
        );
    }
}
 
export default Nav;
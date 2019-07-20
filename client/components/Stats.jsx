import React from 'react'
import { getTotalUniqueUsersApi } from '../api/geoLocationApi';



class Stats extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
          uniqueUsers: null,
        }
    }

    componentDidMount() {
      getTotalUniqueUsersApi()
        .then(data => {
          this.setState({uniqueUsers: data})
        })
    }

    render() { 
        return (  
          <div className="statsbar">
              <div className="stats-1">
                <p className="stats-1-big">2,410</p>
                <p>users currently being tracked</p>
              </div>
              

              <div className="stats-2">
                <p className="stats-big">{`${this.state.uniqueUsers}`}</p>
                <p className="stats-little">users tracked to date</p>
              </div>
              
              <div className="stats-3">
              <p className="stats-big">76%</p>
              <p className="stats-little">users accept location tracking</p>
              </div>

              <div className="stats-4">
              <p className="stats-big">64</p>
              <p className="stats-little">bullshit statistics</p>
              </div>
          </div>
        );
    }
}
 
export default Stats;



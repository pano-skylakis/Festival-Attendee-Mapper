import React from 'react'
import { getTotalUniqueUsersApi, getCurrentUniqueUsersApi } from '../api/geoLocationApi';



class Stats extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
          uniqueUsers: null,
          currentUsers: 0,
          geoLocationData: this.props.geoLocationData
        }
    }

    
    componentDidMount() {
      getCurrentUniqueUsersApi()
      .then(uniqueUsersInt=>{
        this.setState({
          currentUsers: uniqueUsersInt
        })
      })
      getTotalUniqueUsersApi()
        .then(data => {
          this.setState({uniqueUsers: data})
        })
    }


    componentWillReceiveProps(nextProps) {
      this.setState({geoLocationData: nextProps.geoLocationData})
    }


    render() { 
        return (  
          <div className="statsbar enter">
              <div className="stats-1">
                <p className="stats-1-big stats-big">{`${this.state.currentUsers}`}</p>
                <p>users currently being tracked</p>
              </div>
              

              <div className="stats-2">
                <p className="stats-big">{`${this.state.uniqueUsers}`}</p>
                <p className="stats-little">users tracked to date</p>
              </div>
              
              <div className="stats-3">
              <p className="stats-big">{this.state.geoLocationData.length}</p>
              <p className="stats-little">locations pinged</p>
              </div>

              <div className="stats-4">
              <p className="stats-big">588</p>
              <p className="stats-little">hours spent on this project</p>
              </div>
          </div>
        );
    }
}
 
export default Stats;
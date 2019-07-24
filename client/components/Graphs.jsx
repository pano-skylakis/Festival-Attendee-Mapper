import React from 'react'
import LineGraph from './LineGraph'
import BarGraph from './BarGraph'

class Graphs extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            barGraph: false,
            lineGraph: true,
        }
    }

    handleGraphButtonClick = e => {
        this.state.lineGraph ? this.setState({ barGraph: true, lineGraph: false }) : this.setState({ barGraph: false, lineGraph: true })
      }

    render() {
        return(
           <div className="graph-margin" data-aos="fade-up" data-aos-duration="2000">
                {this.state.barGraph && <BarGraph />}
                {this.state.lineGraph && <LineGraph geoLocationData={this.props.geoLocationData} />}
                <p onClick={this.handleGraphButtonClick} className="toggle-button">
                    Toggle Graph
                </p>
            </div> 
        )
    }
}

export default Graphs

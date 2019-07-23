import React from 'react'
import LineGraph from './LineGraph'
import BarGraph from './BarGraph'

class Graphs extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            barGraph: true,
            lineGraph: false,
        }
    }

    handleGraphButtonClick = e => {
        this.state.barGraph ? this.setState({ barGraph: false, lineGraph: true }) : this.setState({ barGraph: true, lineGraph: false })
      }

    render() {
        return(
           <div>
           <div className="graph-margin" data-aos="fade-up" data-aos-duration="2000">
                <div className="graph-margin-left">
                    {this.state.barGraph && <BarGraph />}
                    {this.state.lineGraph && <LineGraph geoLocationData={this.props.geoLocationData} />}
                </div>
                    
                    <h1 className="graph-text">Collecting data, providing insights and inspiring action.</h1>
                </div> 
            
                <div>
                    <p onClick={this.handleGraphButtonClick} className="toggle-button">
                        Toggle Graph
                    </p>
                </div>
            </div> 
        )
    }
}

export default Graphs

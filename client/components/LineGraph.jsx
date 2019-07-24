import React from 'react'
import { Chart } from "react-google-charts";
import { getGeoLocationByTimeApi } from '../api/geoLocationApi';
import regeneratorRuntime from "regenerator-runtime";
import { unix } from 'moment';

class LineGraph extends React.Component {
    constructor(props) {
        super(props)

        this.state={
            // geoLocationData: this.props.geoLocationData,
            time: 8,
            graphData: [['Time', '2018-07-23', '2019-07-23'],
                        ['8:00', 56, 0],
                        ['9:00', 102, 0],
                        ['10:00', 708, 0],
                        ['11:00', 600, 0],
                        ['12:00', 1300, 0],
                        ['13:00', 1200, 0],
                        ['14:00', 1200, 0],
                        ['15:00', 1100, 0],
                        ['16:00', 1000, 0],
                        ['17:00', 1400, 0],
                        ['18:00', 1800, 0],
                        ['19:00', 1700, 0],
                        ['20:00', 1400, 0],
                        ['21:00', 1200, 0],
                        ['22:00', 1100, 0],
                        ['23:00', 1000, 0]],
            chartHeight: '500px',
            chartWidth: '500px',
        }
    }

    componentDidMount() {
        this.getLocationByTime()
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
        console.log(this.getLocationByTime)
    }
    
    componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
    }
      
    
    updatePredicate = () => {
        switch(true) {
            case window.innerWidth > 1023:
              this.setState({ chartHeight: '500px', chartWidth: '800px'})   
              break;
            
        }
    }

    
    getLocationByTime = async () => {

        let unixGreaterThan = 1563911000 // 2019-07-23T08:00:00+00:00
        let unixLessThan = 1563915600 // 2019-07-23T09:00:00+00:00

        // let unixLessThan = 1563883199 // 2019-07-23T11:59:59+00:00

        let index = 1

        for(let i = 0; i < 16; i++) {

            await getGeoLocationByTimeApi(unixGreaterThan, unixLessThan)
                .then(locationByTime => {

                    let newState = [...this.state.graphData]

                    
                    newState[index][2] = locationByTime.length
                    this.setState({graphData: newState})

                    newState = [...this.state.graphData]
                    unixGreaterThan = unixGreaterThan + 3600
                    unixLessThan = unixLessThan + 3600

                    index = index + 1
                })
            }
        }

        
        

    render() { 
        

        return (  
            <>
                <div className="graph-align" align="center">
                    <Chart
                        className="chart"
                        width={this.state.chartWidth}
                        height={this.state.chartHeight}
                        chartType="LineChart"
                        loader={<div>Loading Chart</div>}
                        data={this.state.graphData}
                        options={{
                            colors: ['#E67E22', '#EB984E'],
                            hAxis: {
                            title: 'Time',
                            },
                            vAxis: {
                            title: 'Attendance',
                            },
                        }}
                        rootProps={{ 'data-testid': '2' }}
                        />
                    </div>
            </>
        );
    }
}
 
export default LineGraph;

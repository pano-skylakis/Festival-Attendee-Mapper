import React from 'react'
import { Chart } from "react-google-charts";
import { getGeoLocationByTimeApi } from '../api/geoLocationApi';
import regeneratorRuntime from "regenerator-runtime";
import { unix } from 'moment';

class LineGraph extends React.Component {
    constructor(props) {
        super(props)

        this.state={
            geoLocationData: this.props.geoLocationData,
            time: 8,
            graphData: [['Time', '2019-07-23']],
            chartHeight: '500px',
            chartWidth: '500px',
        }
    }


    componentDidMount() {
        this.getLocationByTime()
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
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

        let unixGreaterThan = 1563868800 // 2019-07-23T08:00:00+00:00
        let unixLessThan = 1563872401 // 2019-07-23T09:00:00+00:00

        // let unixLessThan = 1563883199 // 2019-07-23T11:59:59+00:00

        let time = 8

        for(let i = 0; i < 16; i++) {

            await getGeoLocationByTimeApi(unixGreaterThan, unixLessThan)
                .then(locationByTime => {

                    let timeArr = []
                    let timeString = `${time}:00`
                    

                    timeArr.push(timeString, locationByTime.length)
                    this.setState({graphData: [...this.state.graphData, timeArr]})
                    timeArr = []

                    unixGreaterThan = unixGreaterThan + 3600
                    unixLessThan = unixLessThan + 3600
                    time = time + 1
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

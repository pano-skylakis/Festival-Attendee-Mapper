import React from 'react'
import { Chart } from "react-google-charts";
// import { getGeoLocationByTimeApi } from '../api/geoLocationApi';
import regeneratorRuntime from "regenerator-runtime";
import { unix } from 'moment';

class LineGraph extends React.Component {
    constructor(props) {
        super(props)

        this.state={
            // geoLocationData: this.props.geoLocationData,
            time: 8,
            graphData: [['Time', '2018-07-24'],
                        ['8:00', 56],
                        ['9:00', 102],
                        ['10:00', 708],
                        ['11:00', 600],
                        ['12:00', 1300],
                        ['13:00', 1200],
                        ['14:00', 1200],
                        ['15:00', 1100],
                        ['16:00', 1000],
                        ['17:00', 1400],
                        ['18:00', 1800],
                        ['19:00', 1700],
                        ['20:00', 1400],
                        ['21:00', 1200],
                        ['22:00', 1100],
                        ['23:00', 1000],

        ]
        }
    }


    componentDidMount() {
        this.getLocationByTime()
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
                <div className="graph-padding">
                    <Chart
                        className="chart graph-shadow"
                        width={'84rem'}
                        height={'40rem'}
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

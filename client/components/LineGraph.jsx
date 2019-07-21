import React from 'react'
import { Chart } from "react-google-charts";
import { getGeoLocationByTimeApi } from '../api/geoLocationApi';
import { unix } from 'moment';

class LineGraph extends React.Component {
    constructor(props) {
        super(props)

        this.state={
            geoLocationData: this.props.geoLocationData,
            time: {
                One: [],
                Two: []
            }
        }
    }


    // timesStamps between x - y  push to array and assign to key in 'time

    componentDidMount() {
        this.getLocationByTime()
    }


    getLocationByTime = () => {
        getGeoLocationByTimeApi(1563634620, 1563653450)
            .then(locationByTime => {
                console.log(locationByTime)
            })
        }


    // let unixGreaterThan = 1563634620
    // let unixLessThan = 1563653450
    // .then(data => {
    //     unixGreaterThan = unixGreaterThan + 6000
    //     unixLessThan = unixLessThan + 6000
    //     console.log('unixGreaterThan: ', unixGreaterThan)
    //     console.log('unixLessThan: ', unixLessThan)
    // })


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
                        data={[
                            ['Time', '2019', '2018'],
                            ['10AM', 7328,  8440],
                            ['11AM', 6863,  5600],
                            ['12PM', 15877, 12187],
                            ['1PM', 13449, 12149],
                            ['2PM', 12888, 11388],
                            ['3PM', 10999, 9999],
                            ['4PM', 12098, 10098],
                            ['5PM', 13788, 10788],
                            ['6PM', 17668, 14668],
                            ['7PM', 16872, 12872],
                            ['8PM', 14092, 11092],
                            ['9PM', 13908, 12908],
                            ['10PM', 12331, 9543],
                            ['11PM', 11721, 10829],
                            ['12AM', 9003,  7892]
                        ]}
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

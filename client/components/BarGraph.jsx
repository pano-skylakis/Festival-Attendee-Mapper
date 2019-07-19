import React from 'react'
import { Chart } from "react-google-charts";
import Buttons from './Buttons'

class BarGraph extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {

        }
    }


    render() { 
        return (  
            <>
                <div className="bar-margin">
                            <h3 className="padding-title">Attendees by Year</h3>
                            <Chart className="chart"
                                width={'40vw'}
                                height={'40vh'}
                                chartType="Bar"
                                loader={<div>Loading Chart</div>}
                                data={[
                                    ['Time', '2019', '2018'],
                                    ['10AM', 8440,  8440],
                                    ['11AM', 5600,  5600],
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
                                    title: 'Festival attendees',
                                    chartArea: { width: '75%' },
                                    colors: ['#E67E22', '#EB984E'],
                                    hAxis: {
                                    title: 'people',
                                    minValue: 0,
                                    },
                                    vAxis: {
                                    title: 'time',
                                    },
                                }}
                                // For tests
                                rootProps={{ 'data-testid': '1' }}
                                />
                            </div>
                            
            </>
        );
    }
}
 
export default BarGraph;

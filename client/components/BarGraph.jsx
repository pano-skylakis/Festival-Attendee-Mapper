import React from 'react'
import { Chart } from "react-google-charts";

class BarGraph extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {

        }
    }


    render() { 
        return (  
            <>
                <div className="graph-padding">
                            <Chart className="chart graph-shadow graph-border"
                                width={'84rem'}
                                height={'40rem'}
                                chartType="Bar"
                                loader={<div>Loading Chart</div>}
                                data={[
                                    ['Time', '2019', '2018'],
                                    ['10AM', 732,  844],
                                    ['11AM', 686,  560],
                                    ['12PM', 1587, 1218],
                                    ['1PM', 1344, 1214],
                                    ['2PM', 1288, 1138],
                                    ['3PM', 1099, 999],
                                    ['4PM', 1209, 1009],
                                    ['5PM', 1378, 1078],
                                    ['6PM', 1766, 1466],
                                    ['7PM', 1687, 1287],
                                    ['8PM', 1409, 1109],
                                    ['9PM', 1390, 1290],
                                    ['10PM', 1233, 954],
                                    ['11PM', 1172, 1082],
                                    ['12AM', 900,  789]
                                    
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

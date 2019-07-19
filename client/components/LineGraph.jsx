import React from 'react'
import { Chart } from "react-google-charts";

class LineGraph extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {

        }
    }


    render() { 
        return (  
            <>
                <div className="line-margin">
                    <Chart
                        width={'500px'}
                        height={'300px'}
                        chartType="LineChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                            ['Time', '2019', '2018'],
                            ['6PM', 3730, 2878],
                            ['7PM', 5800, 4698],
                            ['8PM', 4900, 4269],
                            ['9PM', 4180, 3278],
                        ]}
                        options={{
                            colors: ['#E67E22', '#EB984E'],
                            hAxis: {
                            title: 'Time',
                            },
                            vAxis: {
                            title: 'Attendance',
                            },
                            series: {
                            1: { curveType: 'function' },
                            2: { curveType: 'function' },
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

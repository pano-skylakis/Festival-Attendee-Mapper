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
                <div className="bar-margin enter">
                            <Chart
                                width={'500px'}
                                height={'300px'}
                                chartType="Bar"
                                loader={<div>Loading Chart</div>}
                                data={[
                                    ['Time', 'Attendance 2019', 'Attendance 2018'],
                                    ['6PM', 3730, 2878],
                                    ['7PM', 5800, 4698],
                                    ['8PM', 4900, 4269],
                                    ['9PM', 4180, 3278],
                                    
                                ]}
                                options={{
                                    title: 'Population of Largest U.S. Cities',
                                    chartArea: { width: '75%' },
                                    colors: ['#E67E22', '#EB984E'],
                                    hAxis: {
                                    title: 'Total Population',
                                    minValue: 0,
                                    },
                                    vAxis: {
                                    title: 'City',
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

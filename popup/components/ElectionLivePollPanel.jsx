import React from 'react';
import { Line } from 'react-chartjs-2';

import Base from './Base';
import SegmentHeader from './SegmentHeader';


export default class ElectionLivePollPanel extends Base {

    constructor(props) {
        super(props);
    }

    render() {

        var data = {
                    labels: [
                        '9/10',
                        '9/11',
                        '9/12',
                        '9/13',
                        '9/14',
                        '9/15',
                        '9/16',
                        '9/17',
                        '9/18',
                        '9/19',
                        '9/20',
                    ],
                    datasets: [
                        {
                            label: 'D.Trump',
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: "rgba(239,83,80,.5)",
                            borderColor: "rgba(244,67,54,1)",
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: "rgba(244,67,54,1)",
                            pointBackgroundColor: "#fff",
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: "rgba(75,192,192,1)",
                            pointHoverBorderColor: "rgba(220,220,220,1)",
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                            spanGaps: false,
                        },
                        {   
                            label: "H.Clinton",
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: "rgba(0,164,228,0.5)",
                            borderColor: "rgba(1,113,208,1)",
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: "rgba(1,113,208,1)",
                            pointBackgroundColor: "#fff",
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: "rgba(57,129,129,1)",
                            pointHoverBorderColor: "rgba(220,220,220,1)",
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
                            spanGaps: false,
                        },
                        {
                            label: "Not Sure",
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: "rgba(55,71,79,0.5)",
                            borderColor: "rgba(49,53,66,1)",
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: "rgba(49,53,66,1)",
                            pointBackgroundColor: "#fff",
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: "rgba(54,28,0,1)",
                            pointHoverBorderColor: "rgba(220,220,220,1)",
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                            spanGaps: false,
                        }
                    ]
                };
                var options = {
                    scales: {
                        yAxes: [{
                            display: true,
                            ticks: {
                                suggestedMin: 0,                  
                                beginAtZero: true,
                                max: 70
                            }
                        }]
                    },
                    legend: {
                        display: true,
                        label: {
                            position:'bottom',
                            fullWidth:true
                        }
                    }
                };
        return (
            <div className='ElectionLivePollPanel'>
                <SegmentHeader title='Latest Live Poll'/>
                <div className='data_container'>
                    <Line data={data} option={options} />
                </div>
            </div>
        );
    }
}
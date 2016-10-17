import React from 'react';
import { Doughnut } from 'react-chartjs-2';

import Base from './Base';
import SegmentHeader from './SegmentHeader';


export default class CandidateContributions extends Base {
    constructor(props) {
        super(props);
    }
    render() {
        const data = {
            labels: [
                'Red',
                'Blue',
                'Yellow'
            ],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                    ],
                    hoverBackgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                    ]
                }
            ]
        };
        const options = {
            elements: {
                points: {
                    borderWidth: 1,
                    borderColor: 'rgb(0, 0, 0)'
                }
            }
        };
        return (
            <div className='CandidateContributions'>
                <SegmentHeader title='Campaign Contributions'/>
                <div className='chart_container'>
                    <Doughnut data={data} options={options} />
                </div>
                <div className='row'>
                    <div className='data_box column right'>
                        <div className='data_box_value'>
                             $12 M
                        </div>
                        <div className='data_box_label'>
                            Total Raised
                        </div>
                    </div>
                    <div className='data_box column'>
                        <div className='data_box_value'>
                            $16 M
                        </div>
                        <div className='data_box_label'>
                            Total Spent
                        </div>
                    </div>
                    <div className='data_box column left'>
                        <div className='data_box_value'>
                            $8 M
                        </div>
                        <div className='data_box_label'>
                            On Hand
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
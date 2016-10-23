import React from 'react';
import { connect } from 'react-redux';
import { Doughnut } from 'react-chartjs-2';

import Base from './Base';
import SegmentHeader from './SegmentHeader';
import { fetchCandidateContributions } from '../actions/Candidate';

import { red, green, blue } from '../constants/colors';

class CandidateContributions extends Base {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
    }
    render() {
        const data = {
            labels: [
                'Red',
                'Green',
                'Blue'
            ],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        red,
                        green,
                        blue
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
                            $24 M
                        </div>
                        <div className='data_box_label'>
                            Total Raised
                        </div>
                    </div>
                    <div className='data_box column' onClick={this.props.fetchCandidateContributions.bind(this, 'N00030612')}>
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

const mapStateToProps = (state) => {
    //console.log('CandidateContributions mapStateToProps');
    //console.log(state);

    return {
        CandidateContributions: state.CandidateContributions
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCandidateContributions: id => dispatch(fetchCandidateContributions(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CandidateContributions);
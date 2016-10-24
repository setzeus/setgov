import React from 'react';
import { Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';

import Base from './Base';
import SegmentHeader from './SegmentHeader';

class CandidateInfoPanel extends Base {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='CandidateInfoPanel'>
                <SegmentHeader title='Candidate Info'/>
                <div className='data_container column'>
                    <div className='column'>
                        <div className='row'>
                            <Icon size='big' name='street view'/>
                            <div className='label'>Born</div>
                        </div>
                        <div className='row'>
                            <p>{this.props.Candidate.generalInfo.dateOfBirth}</p>
                            <p className='flex right'>
                                {this.props.Candidate.generalInfo.placeOfBirth}
                            </p>
                        </div>
                    </div>
                    <div className='column'>
                        <div className='row'>
                            <Icon size='big' name='student'/>
                            <div className='label'>Education</div>
                        </div>
                        <p className='value_container'>
                            {this.props.Candidate.generalInfo.education}
                        </p>
                    </div>
                    <div className='column'>
                        <div className='row'>
                            <Icon size='big' name='university'/>
                            <div className='label'>Political Experience</div>
                        </div>
                        <p className='value_container'>
                            {this.props.Candidate.generalInfo.politicalExperience}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        Candidate: state.Candidate
    };
};
export default connect(mapStateToProps)(CandidateInfoPanel);

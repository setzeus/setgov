import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';

import Base from './Base';
import CandidateBillVotingHistory from './CandidateBillVotingHistory';
import CandidateContributions from './CandidateContributions';
import CandidateInfoPanel from './CandidateInfoPanel';
import CandidateHeader from './CandidateHeader';
import CandidateSegmentButton from './CandidateSegmentButton';
import RootHeader from './RootHeader';

class CandidateView extends Base {

    constructor(props) {
        super(props);
        this.autoBind();
    }

    render() {
        console.log(this.props)
        let activeComponent = <CandidateContributions />;
        switch (this.props.Candidate.activeSegment) {
        case 'contributions':
            activeComponent = <CandidateContributions/>;
            break;
        case 'info':
            activeComponent = <CandidateInfoPanel/>;
            break;
        case 'history':
            activeComponent = <CandidateBillVotingHistory/>;
            break;
        default:
            break;
        }

        return (
            <div className='CandidateView'>
                <RootHeader to='/home' title='Marco Rubio'/>
                <CandidateHeader name='Marco Rubio'/>
                <div className='segmented_controller_container'>
                    <Button.Group>
                        <CandidateSegmentButton name='contributions'/>
                        <CandidateSegmentButton name='info'/>
                        <CandidateSegmentButton name='history'/>
                    </Button.Group>
                </div>
                {activeComponent}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        Candidate: state.Candidate
    };
};

export default connect(mapStateToProps)(CandidateView);
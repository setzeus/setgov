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

import { changeActiveCandidate } from '../actions/Candidate';

class CandidateView extends Base {

    constructor(props) {
        super(props);
        this.autoBind();
    }
    componentWillMount() {
        const activeCandidate = this.props.environment.candidates[this.props.params.candidateIndex];
        console.log('candidateIndex = ' + this.props.params.candidateIndex);
        this.props.changeActiveCandidate(activeCandidate);
    }

    render() {
        let activeSegment;
        switch (this.props.Candidate.activeSegment) {
        case 'contributions':
            activeSegment = <CandidateContributions />;
            break;
        case 'info':
            activeSegment = <CandidateInfoPanel/>;
            break;
        case 'history':
            activeSegment = <CandidateBillVotingHistory/>;
            break;
        default:
            break;
        }

        return (
            <div className='CandidateView'>
                <RootHeader to='/home' />
                <CandidateHeader />
                <div className='segmented_controller_container'>
                    <Button.Group>
                        <CandidateSegmentButton name='contributions'/>
                        <CandidateSegmentButton name='info'/>
                        <CandidateSegmentButton name='history'/>
                    </Button.Group>
                </div>
                {activeSegment}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        environment: state.environment,
        Candidate: state.Candidate
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeActiveCandidate: candidate => dispatch(changeActiveCandidate(candidate))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(CandidateView);
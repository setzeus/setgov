import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';

import Base from './Base';
import CandidateBillVotingHistory from './CandidateBillVotingHistory';
import CandidateContributions from './CandidateContributions';
import CandidateHeader from './CandidateHeader';
import CandidateSegmentButton from './CandidateSegmentButton';

class CandidateView extends Base {

    constructor(props) {
        super(props);
        this.autoBind();
    }

    render() {
        const activeComponent = <CandidateContributions />;
        // switch (this.props.activeSegment) {
        // case 'contributions':
        //     activeComponent = <CandidateContributions/>;
        //     break;
        // case 'info':
        //     // activeComponent = <CandidateInformation/>;
        //     break;
        // case 'history':
        //     activeComponent = <CandidateBillVotingHistory/>;
        //     break;
        // default:
        //     break;
        // }

        return (
            <div className='CandidateView'>
                <CandidateHeader />
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
    console.log('CandidateView mapStateToProps');

    console.log(state);
    return {
        Candidate: state.Candidate
    };
};

export default connect(mapStateToProps)(CandidateView);
import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';

import Base from './Base';
import CandidateSegmentButton from './CandidateSegmentButton';
import ElectionGenInfoPanel from './ElectionGenInfoPanel';
import ElectionLivePollPanel from './ElectionLivePollPanel';
import ElectionHeader from './ElectionHeader';
import ElectionPlatformPanel from './ElectionPlatformPanel';
import RootHeader from './RootHeader';

class ElectionView extends Base {

    constructor(props) {
        super(props);
        this.autoBind();
    }

    render() {
        const activeComponent = <ElectionPlatformPanel />;
        // switch (this.props.activeSegment) {
        // case 'livepolls':
        //     activeComponent = <ElectionLivePollPanel/>;
        //     break;
        // case 'info':
        //     // activeComponent = <ElectionGenInfoPanel/>;
        //     break;
        // case 'platform':
        //     activeComponent = <ElectionPlatformPanel/>;
        //     break;
        // default:
        //     break;
        // }

        return (
            <div className='ElectionView'>
                <RootHeader to='/home' title='Presidential Election'/>
                <ElectionHeader />
                <div className='segmented_controller_container'>
                    <Button.Group>
                        <CandidateSegmentButton name='livepolls'/>
                        <CandidateSegmentButton name='info'/>
                        <CandidateSegmentButton name='platform'/>
                    </Button.Group>
                </div>
                {activeComponent}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('ElectionView mapStateToProps');

    console.log(state);
    return {
        Candidate: state.Candidate
    };
};

export default connect(mapStateToProps)(ElectionView);
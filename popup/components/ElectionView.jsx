import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';

import Base from './Base';
import ElectionSegmentButton from './ElectionSegmentButton';
import ElectionGenInfoPanel from './ElectionGenInfoPanel';
import ElectionLivePollPanel from './ElectionLivePollPanel';
import ElectionHeader from './ElectionHeader';
import ElectionPlatformPanel from './ElectionPlatformPanel';
import RootHeader from './RootHeader';

import { changeActiveElection } from '../actions/Election';

class ElectionView extends Base {

    constructor(props) {
        super(props);
        this.autoBind();
    }

    componentWillMount() {
        const activeElection = this.props.environment.elections[this.props.params.electionIndex];
        this.props.changeActiveElection(activeElection);
    }

    render() {
        console.log("got to election view");
        
        let activeComponent = <ElectionPlatformPanel/>;
        switch (this.props.Election.activeSegment) {
        case 'livepolls':
            activeComponent = <ElectionLivePollPanel/>;
            break;
        case 'info':
            activeComponent = <ElectionGenInfoPanel/>;
            break;
        case 'platform':
            activeComponent = <ElectionPlatformPanel/>;
            break;
        default:
            break;
        }

        return (
            <div className='ElectionView'>
                <RootHeader to='/home' title='Presidential Election'/>
                <ElectionHeader />
                <div className='segmented_controller_container'>
                    <Button.Group>
                        <ElectionSegmentButton name='livepolls'/>
                        <ElectionSegmentButton name='info'/>
                        <ElectionSegmentButton name='platform'/>
                    </Button.Group>
                </div>
                {activeComponent}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        environment: state.environment,
        Election: state.Election
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeActiveElection: election => dispatch(changeActiveElection(election))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(ElectionView);













import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';

import ElectionList from './ElectionList';
import CandidateList from './CandidateList';
import Base from './Base';
import { changeActiveComponent } from '../actions/SetGovHome';


class SetGovHomeListPage extends Base {
    constructor(props) {
        super(props);
        this.autoBind('handleClick', 'displayActiveSegment');
        // this.state = {
        //     selection: 1
        // };
    }

    dispatchRace(msg) {
        console.log(msg);
    }
    handleClick(state) {
       
        this.props.changeActiveComponent(state);
    }
    displayActiveSegment() {
        if (this.props.environment != null) {
            if (this.props.environment.activeComponent == 'CandidateView') {
                return <CandidateList />;
            }
            return <ElectionList />;
        }
        return false;
    }

    render() {
        // custom styles for party_selection
        return (
            <div className='SetGovHomeListPage'>
                <Button.Group size='huge'>
                    <Button
                        onClick={() => this.handleClick('')}
                        className='race_button'
                        active={this.displayActiveSegment() ? this.props.environment.activeComponent != 'CandidateView' : console.log('error')}
                    >
                        Election
                    </Button>
                    <Button.Or />
                    <Button
                        onClick={() => this.handleClick('CandidateView')}
                        className='candidate_button'
                        active={this.displayActiveSegment() ? this.props.environment.activeComponent == 'CandidateView' : console.log('error')}
                    >
                        Candidate
                    </Button>
                </Button.Group>
                <div className='result_container'>

                    {this.displayActiveSegment()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ElectionInfo: state.ElectionInfo,
        environment: state.environment
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeActiveComponent: component => dispatch(changeActiveComponent(component))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SetGovHomeListPage);

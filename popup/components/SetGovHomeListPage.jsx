import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router/lib';
import { Button } from 'semantic-ui-react';

import RaceList from './RaceList';
import CandidateList from './CandidateList';
import Base from './Base';

class SetGovHomeListPage extends Base {
    constructor(props) {
        super(props);
        this.autoBind('handleClick');

        this.state = {
            selection: 1
        };
    }

    dispatchRace(msg) {
        console.log(msg);
    }
    handleClick(state){
        console.log(state)
        this.setState({
            selection: state
        })
    }
    render() {
        console.log(this.state);
        // custom styles for party_selection
        return (
            <div className='SetGovHomeListPage'>
               
                    <Button.Group  size='huge'>
                        <Button onClick={ () => this.handleClick(0)} className='race_button'>Race</Button>
                        <Button.Or />
                        <Button onClick={ () => this.handleClick(1)} className='candidate_button'>Candidate</Button>
                    </Button.Group>
               
                <div className='result_container'>
                    { this.state.selection == 1 &&  <CandidateList environment={this.props.environment}/> }
                    { this.state.selection == 0 && <RaceList/> }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ElectionInfo: state.ElectionInfo,
    };
};

export default connect(mapStateToProps)(SetGovHomeListPage);

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router/lib';
import { Button } from 'semantic-ui-react';

import CandidateList from './CandidateList';
import Base from './Base';

class SetGovHomeListPage extends Base {
    constructor(props) {
        super(props);
    }

    dispatchRace(msg) {
        console.log(msg);
    }

    render() {
        console.log(this.props);
        // custom styles for party_selection
        return (
            <div className='SetGovHomeListPage'>
               
                    <Button.Group  size='huge'>
                        <Button className='race_button'>Race</Button>
                        <Button.Or />
                        <Button className='candidate_button'>Candidate</Button>
                    </Button.Group>
               
                <div className='result_container'>
                    <CandidateList/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ElectionInfo: state.ElectionInfo
    };
};

export default connect(mapStateToProps)(SetGovHomeListPage);

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router/lib';
import { Button } from 'semantic-ui-react';

import Base from './Base';

class CandidateListPage extends Base {
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
            <div className='CandidateListPage'>
                <div className='row'>
                    <Link to='/candidate'>
                        <Button
                            inverted
                            color='red'
                        >
                            Candidates
                        </Button>
                    </Link>
                    <Link to='/home'>
                        <Button
                            inverted
                            color='red'
                        >
                            Elections
                        </Button>
                    </Link>
                </div>
                <div className='listContainer column'>
                    <p>ListViews go here</p>
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

export default connect(mapStateToProps)(CandidateListPage);

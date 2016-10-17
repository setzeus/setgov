import React from 'react';
import { connect } from 'react-redux';

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
                <div className='party_selection'>
                    <div className='button raised dem' onClick={() => this.props.dispatch({ type: 'DEMOCRAT' })}/>

                    <div
                        className='button raised rep'
                        onClick={() => this.props.dispatch({ type: 'REPUBLICAN' })}
                    >

                    </div>
                </div>

                <div className='party_candidates'>

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




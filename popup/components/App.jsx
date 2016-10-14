import React from 'react';
import { connect } from 'react-redux';
import RootHeader from './RootHeader';

import Base from './Base';
import CandidateView from './CandidateView';

class App extends Base {

    render() {
        console.log(this.props);
        return (
            <div>
                <RootHeader/>
                <CandidateView/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        count: state.count,
        race: state.race,
        generalElection: state.GeneralElection,
        FloridaSenate: state.FloridaSenate
    };
};

export default connect(mapStateToProps)(App);
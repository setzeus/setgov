import React from 'react';
import { connect } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Base from './Base';
import CandidateListPage from './CandidateListPage';
import CandidateView from './CandidateView';
import RootHeader from './RootHeader';

injectTapEventPlugin();

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
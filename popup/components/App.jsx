import React from 'react';
import { connect } from 'react-redux';

import Base from './Base';
import CandidateListPage from './CandidateListPage';
import CandidateView from './CandidateView';
import RootHeader from './RootHeader';

class App extends Base {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('App render');
        let activeComponent = <CandidateView/>;

        // switch (this.props.activeComponent) {
        // case 'CandidateView':
        //     activeComponent = <CandidateView/>;
        //     break;
        // default:
        //     break;
        // }
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('App mapStateToProps');

    console.log(state);

    return {
        environment: state.environment,
        Candidate: state.Candidate,
        generalElection: state.GeneralElection,
        FloridaSenate: state.FloridaSenate
    };
};

export default connect(mapStateToProps)(App);
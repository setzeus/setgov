import React, {Component} from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import RootHeader from './RootHeader';
import CandidateView from './CandidateView';


class App extends Component {
	constructor(props){
		super(props)
	}
	render() {
		console.log(this.props);
	    return (
          <div>
            <RootHeader />
            <CandidateView />
          </div>
                  
    	);
  }
}
const mapStateToProps = (state) => {
  return {
    count: state.count,
    race: state.race,
    generalElection : state.GeneralElection,
    FloridaSenate: state.FloridaSenate
  };
};

export default connect(mapStateToProps)(App);

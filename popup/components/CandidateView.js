import React, {Component} from 'react';
import {connect} from 'react-redux';

import Base from './Base';

import { hiliarySetup } from '../scripts/canidateSetup';


class CandidateView extends Base{
	constructor(props) {
	   super(props);
	   console.log(this.props)
	    var test = hiliarySetup(this.props.generalElection);
	    console.log(test);
	}
	

	render(){
		return (
			<div className="top_body">
     			<div className="top_label_container">
     			</div>
    		</div>
			)
	}
}

// const mapStateToProps = (state) => {
//   return {
//     race: state.race,
//     generalElection : state.GeneralElection,
//     FloridaSenate: state.FloridaSenate
//   };
// };

const mapStateToProps = (state) => {
  return {
   
    GeneralElection: state.GeneralElection
  };
};

export default connect(mapStateToProps)(CandidateView);

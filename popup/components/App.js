import React, {Component} from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';

import Base from './Base';
import CandidateView from './CandidateView';

export default class App extends Base{
	

 

	render() {
		console.log(this.props)
	    return (
	      <div>
	      	{this.props.children}
	      	<CandidateView/>
	      </div>
    	);
  	}
}



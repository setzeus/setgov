import React from 'react';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';

import App from './components/App.js';
import CandidateView from './components/CandidateView.js';


export default(
		<div>
		<Route path='/index.html' component={App}/>
		<Route path='/candidateView' component={CandidateView}/>
		</div>
	);
import React from 'react';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';

import App from './components/App.js';


export default(
		<div>
			<Route path='/index.html' component={App}/>
		</div>
	);
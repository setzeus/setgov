import React from 'react';
import {Router, Route} from 'react-router';
import App from './App.js';
import Test from './Test.js';

const Routes = React.createClass({
 
  render: function () {
    return (
     <Router>
    	<Route path="/" component={App}/>
    	<Route path="/test" component={Test}/>
  	</Router>
    );
  }
});
export default Routes;
import React, {Component} from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Base from './Base';
import CandidateView from './CandidateView';
import CandidateListPage from './CandidateListPage';

injectTapEventPlugin();

export default class App extends Base{
	

 

	render() {
	    return (

          <div className='App'>
            
              <CandidateListPage/>
            
          	{
          	// <RootHeader />
           //  <CandidateView />
          	}
            
          </div>
                  
    	);
  	}
}



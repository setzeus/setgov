import React from 'react';
import { IndexRoute, Route } from 'react-router/lib';

import App from './components/App';
import CandidateListPage from './components/CandidateListPage';
import CandidateView from './components/CandidateView';

export default(

    <Route path='/index.html' component={App}>
        <IndexRoute component={CandidateListPage}/>
        <Route path='/home' component={CandidateListPage}/>
        <Route path='/candidate' component={CandidateView}/>
    </Route>

);
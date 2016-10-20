import React from 'react';
import { IndexRoute, Route } from 'react-router/lib';

import App from './components/App';
import CandidateView from './components/CandidateView';
import ElectionView from './components/ElectionView';
import SetGovHomeListPage from './components/SetGovHomeListPage';

export default(

    <Route path='/index.html' component={App}>
        <IndexRoute component={SetGovHomeListPage}/>
        <Route path='/candidate/:candidateIndex' component={CandidateView}/>
        <Route path='/election' component={ElectionView}/>
        <Route path='/home' component={SetGovHomeListPage}/>
    </Route>

);
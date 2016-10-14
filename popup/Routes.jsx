import React from 'react';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';

import App from './components/App';

export default(

    <Route path='/index.html'>
        <IndexRoute component={App}/>
    </Route>

);
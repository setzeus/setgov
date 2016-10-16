import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'react-chrome-redux';

import App from './components/App';
import './styles/index.less';

const proxyStore = new Store({
    portName: 'setgov'
});

render(
    <Provider store={proxyStore}>
        <App/>
    </Provider>,
    document.getElementById('container')
);
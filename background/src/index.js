import {createStore} from 'redux';
import rootReducer from './reducers';

import {wrapStore} from 'react-chrome-redux';

const store = createStore(rootReducer, {});

console.log('testing');
console.log('hot reloding')
wrapStore(store, {
  portName: 'setgov'
});

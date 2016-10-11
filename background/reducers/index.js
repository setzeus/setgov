import {combineReducers} from 'redux';

import count from './start';
import race from './Race';
import GeneralElection from './GeneralElection';
import FloridaSenate from './FloridaSenate';


export default combineReducers({
  race,
  GeneralElection,
  FloridaSenate
});

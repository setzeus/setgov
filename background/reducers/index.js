import {combineReducers} from 'redux';

import count from './start';
import ElectionInfo from './ElectionInfo';
import GeneralElection from './GeneralElection';
import FloridaSenate from './FloridaSenate';


export default combineReducers({
  ElectionInfo,
  GeneralElection,
  FloridaSenate
});

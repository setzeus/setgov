import { combineReducers } from 'redux';

import Candidate from './Candidate';
import environment from './environment';
import ElectionInfo from './ElectionInfo';
import GeneralElection from './GeneralElection';
import FloridaSenate from './FloridaSenate';

export default combineReducers({
    Candidate,
    environment,
    ElectionInfo,
    GeneralElection,
    FloridaSenate
});

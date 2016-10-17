import { combineReducers } from 'redux';

import Candidate from './Candidate';
import environment from './environment';
import Election from './Election';
import PlatformCounts from './PlatformCounts';

export default combineReducers({
    Candidate,
    environment,
    Election,
    PlatformCounts
});

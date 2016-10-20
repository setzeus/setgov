import * as types from '../actionTypes';

const initalState = {
    activeElectionSegment: 'platform',
    name: '',
    candidates: [],
    electionDate: '2016-11-08T00:00:00.000Z',
    livePolling: {},
    summary: ''
};

export default (state = initalState, action) => {
    switch (action.type) {
    case types.CHANGE_ELECTION_SEGMENT:
        return Object.assign({}, state, {
            activeElectionSegment: action.segment
        });
    case types.GENERAL_ELECTION:
        return Object.assign({}, state, {
            race: action.type
        });
    case types.FLORIDA_SENATE:
        return Object.assign({}, state, {
            race: action.type
        });
    case types.RUBIO:
        return Object.assign({}, state, {
            candidate: action.type
        });
    case types.MURPHY:
        return Object.assign({}, state, {
            candidate: action.type
        });
    case types.TRUMP:
        return Object.assign({}, state, {
            candidate: action.type
        });
    case types.CLINTON:
        return Object.assign({}, state, {
            candidate: action.type
        });
    case types.DEMOCRAT:
        return Object.assign({}, state, {
            party: action.type
        });
    case types.REPUBLICAN:
        return Object.assign({}, state, {
            party: action.type
        });
    default:
        return state;
    }
};
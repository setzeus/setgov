import * as types from '../actionTypes';

const initalState = {
    activeSegment: 'platform',
    title: '',
    democrat: '',
    republican: '',
    d_image: '',
    r_image: '',
    d_index: 0,
    r_index: 0,
    electionDate: '2016-11-08T00:00:00.000Z',
    livePolling: {},
    summary: ''
};

export default (state = initalState, action) => {
    switch (action.type) {
    case types.CHANGE_ELECTION_SEGMENT:
        return Object.assign({}, state, {
            activeSegment: action.segment
        });
    case types.CHANGE_ACTIVE_ELECTION:
        return Object.assign({}, state, {
            title: action.election.title,
            democrat: action.election.democrat,
            republican: action.election.republican,
            d_image: action.election.d_image,
            r_image: action.election.r_image,
            d_index: action.election.d_index,
            r_index: action.election.r_index,
            electionDate: action.election.electionDate,
            livePolling: action.election.livePolling

    // case types.GENERAL_ELECTION:
    //     return Object.assign({}, state, {
    //         race: action.type
    //     });
    // case types.FLORIDA_SENATE:
    //     return Object.assign({}, state, {
    //         race: action.type
    //     });
    // case types.RUBIO:
    //     return Object.assign({}, state, {
    //         candidate: action.type
    //     });
    // case types.MURPHY:
    //     return Object.assign({}, state, {
    //         candidate: action.type
    //     });
    // case types.TRUMP:
    //     return Object.assign({}, state, {
    //         candidate: action.type
    //     });
    // case types.CLINTON:
    //     return Object.assign({}, state, {
    //         candidate: action.type
    //     });
    // case types.DEMOCRAT:
    //     return Object.assign({}, state, {
    //         party: action.type
    //     });
    // case types.REPUBLICAN:
    //     return Object.assign({}, state, {
    //         party: action.type
    //     });
        });
    default:
        return state;
    }
};
import * as types from '../actionTypes';

const initalState = {
    activeSegment: 'history'
};

export default (state = initalState, action) => {
    switch (action.type) {
    case types.CHANGE_CANDIDATE_SEGMENT:
        return Object.assign({}, state, {
            activeSegment: action.segment
        });
    default:
        return state;
    }
};
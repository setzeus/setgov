import * as types from '../actionTypes';

const initalState = {
    activeComponent: 'CandidateView'
};

export default (state = initalState, action) => {
    switch (action.type) {
    case types.CHANGE_ACTIVE_COMPONENT:
        return Object.assign({}, state, {
            activeComponent: action.component
        });
    default:
        return state;
    }
};
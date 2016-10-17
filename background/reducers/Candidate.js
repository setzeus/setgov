import * as types from '../actionTypes';

const initalState = {
    activeSegment: 'history',
    name: '',
    party: 'democrat',
    imageUrl: '',
    contributions: {
        chartData: {},
        totalRaised: 0,
        totalSpent: 0,
        onHand: 0
    },
    generalInfo: {
        dateOfBirth: '',
        donateLink: '',
        education: '',
        placeOfBirth: '',
        politicalExperience: ''
    },
    votingHistory: [],
    latestPollResult: ''
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
import * as types from '../actionTypes';

const initalState = {
    activeSegment: 'history',
    name: '',
    party: '',
    bannerImageUrl: '',
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
    case types.CHANGE_ACTIVE_CANDIDATE:
        return Object.assign({}, state, {
            name: action.candidate.name,
            party: action.candidate.party,
            bannerImageUrl: action.candidate.bannerImageUrl,
            contributions: action.candidate.contributions,
            generalInfo: action.candidate.generalInfo,
            votingHistory: action.candidate.votingHistory,
            latestPollResult: action.candidate.latestPollResult,
        });
    default:
        return state;
    }
};
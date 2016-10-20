import * as types from '../actionTypes';

const initalState = {
    activeComponent: 'CandidateView',
    candidates: [
        {
            name: 'Hillary Clinton',
            race: 'Presidential Election',
            party: 'democrat',
            image: 'hillary',
            bannerImageUrl: 'https://s3-us-west-2.amazonaws.com/setgov/Hillary.jpg',
            contributions: {
                chartData: {},
                totalRaised: '$530 M',
                totalSpent: '$420 M',
                onHand: '$109 M'
            },
            generalInfo: {
                dateOfBirth: 'October 26, 1947',
                donateLink: 'https://www.hillaryclinton.com/donate/',
                education: 'Yale Law',
                placeOfBirth: 'Chicago, Illinois',
                politicalExperience: 'Senator (NY), Secretary of State'
            },
            votingHistory: [
                {
                    date: '',
                    name: '',
                    status: '',
                    vote: ''
                }
            ],
            latestPollResult: '48.9%'
        },
        {
            name: 'Donald Trump',
            race: 'Presidential Election',
            party: 'republican',
            image: 'donald',
            bannerImageUrl: 'https://s3-us-west-2.amazonaws.com/setgov/Trump.jpg',
            contributions: {
                chartData: {},
                totalRaised: '$209 M',
                totalSpent: '$147 M',
                onHand: '$62 M'
            },
            generalInfo: {
                dateOfBirth: 'June 14, 1946',
                donateLink: 'https://secure.donaldjtrump.com/donate-homepage-btn/',
                education: 'University of Pennsylvania',
                placeOfBirth: 'New York, New York',
                politicalExperience: 'No Experience'
            },
            votingHistory: [
                {
                    date: '',
                    name: '',
                    status: '',
                    vote: ''
                }
            ],
            latestPollResult: '40.7%'
        },
        {
            name: 'Patrick Murphy',
            race: 'Florida Senate Election',
            party: 'democrat',
            image: 'murphy',
            bannerImageUrl: 'https://s3-us-west-2.amazonaws.com/setgov/patrick+murphy+resized.jpg',
            contributions: {
                chartData: {},
                totalRaised: '$11 M',
                totalSpent: '$7 M',
                onHand: '$4 M'
            },
            generalInfo: {
                dateOfBirth: 'March 30, 1983',
                donateLink: 'https://secure.actblue.com/contribute/page/patrickmurphyforsenate',
                education: 'University of Miami',
                placeOfBirth: 'Miami, Florida',
                politicalExperience: 'House of Representatives (FL)'
            },
            votingHistory: [
                {
                    date: '',
                    name: '',
                    status: '',
                    vote: ''
                }
            ],
            latestPollResult: '42.3%'
        },
        {
            name: 'Marco Rubio',
            race: 'Florida Senate Election',
            party: 'republican',
            image: 'rubio',
            bannerImageUrl: 'https://s3-us-west-2.amazonaws.com/setgov/Marco-Rubio.jpg',
            contributions: {
                chartData: {},
                totalRaised: '$14 M',
                totalSpent: '$6 M',
                onHand: '$4 M'
            },
            generalInfo: {
                dateOfBirth: 'May 28, 1971',
                donateLink: 'https://marcorubio.com/donate/',
                education: 'University of Miami',
                placeOfBirth: 'Miami, Florida',
                politicalExperience: 'House of Representatives (FL), Speaker of the House (FL), Senator(FL)'
            },
            votingHistory: [
                {
                    date: '',
                    name: '',
                    status: '',
                    vote: ''
                }
            ],
            latestPollResult: '48.5%'
        }
    ]
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
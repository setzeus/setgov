import * as types from '../actionTypes';

const initalState = {
    activeComponent: 'CandidateView',
    candidates: [
        {
            name: 'Hillary Clinton',
            race: 'Presidential Election',
            party: 'democrat',
            image: '/images/clinton.jpg',
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
            image: '/images/donald.jpg',
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
            image: '/images/murphy.jpeg',
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
            image: '/images/rubio.png',
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
        },
        {
            name: 'Debbie Lieberman',
            race: 'Montgomery County Commissioner',
            party: 'democrat',
            image: '/images/lieberman.jpg',
            bannerImageUrl: 'https://s3-us-west-2.amazonaws.com/setgov/Debbie+Lieberman.jpg',
            contributions: {
                chartData: {},
                totalRaised: '',
                totalSpent: '',
                onHand: ''
            },
            generalInfo: {
                dateOfBirth: '',
                donateLink: 'https://debbielieberman.nationbuilder.com/donate',
                education: 'University of Dayton',
                placeOfBirth: '',
                politicalExperience: 'City Council (Clay, OH), County Commisioner (Montgomery, OH)'
            },
            votingHistory: [
                {
                    date: '',
                    name: '',
                    status: '',
                    vote: ''
                }
            ],
            latestPollResult: ''
        },
        {
            name: 'Gary Leitzell',
            race: 'Montgomery County Commissioner',
            party: 'republican',
            image: '/images/leitzell.jpg',
            bannerImageUrl: 'https://s3-us-west-2.amazonaws.com/setgov/Gary+Leitzell.jpg',
            contributions: {
                chartData: {},
                totalRaised: '',
                totalSpent: '',
                onHand: ''
            },
            generalInfo: {
                dateOfBirth: '',
                donateLink: 'http://gogarygo.com/',
                education: 'University of London',
                placeOfBirth: '',
                politicalExperience: 'Mayor (Dayton, OH), County Commisioner (Montgomery, OH)'
            },
            votingHistory: [
                {
                    date: '',
                    name: '',
                    status: '',
                    vote: ''
                }
            ],
            latestPollResult: ''
        }
    ],
    elections: [
        {
            title: 'Presidential Election',
            democrat: 'Hillary Clinton',
            republican: 'Donald Trump',
            list_image: '/images/USA-icon.png',
            d_image: '/images/clinton.jpg',
            r_image: '/images/donald.jpg'
        },
        {
            title: 'Florida Senate',
            democrat: 'Patrick Murphy',
            republican: 'Marco Rubio',
            list_image: '/images/Florida-icon.png',
            d_image: '/images/rubio.png',
            r_image: '/images/murphy.jpeg'
        },
        {
            title: 'County Commissioner',
            democrat: 'Debbie Lieberman',
            republican: 'Gary Leitzell',
            list_image: '/images/ohio.png',
            d_image: '/images/lieberman.png',
            r_image: '/images/leitzell.jpg'
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
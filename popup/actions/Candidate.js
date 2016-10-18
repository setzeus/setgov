import api from '../scripts/api';


export function changeActiveSegment(segment) {
    return {
        type: 'CHANGE_CANDIDATE_SEGMENT',
        segment
    };
}
export function fetchCandidateContributions(id) {
    console.log('fetchCandidateContributions');
    return dispatch => {
        console.log("dispatch fetchCandidateContributions");
        api.getExt('http://www.opensecrets.org/api/?method=candContrib&cid=' + id + '&cycle=2016&apikey=212b7685617ea4be70a4b4cfff35bdb0')
        .then((data) => {
            console.log(data);
        }).catch((error) => {
            console.log(error);
        });
    };
}
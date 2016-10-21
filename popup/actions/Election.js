export function changeActiveSegment(segment) {
    return {
        type: 'CHANGE_ELECTION_SEGMENT',
        segment
    };
}

export function changeActiveElection(election) {
    return {
        type: 'CHANGE_ACTIVE_ELECTION',
        election
    };
}
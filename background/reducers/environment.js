import * as types from '../actionTypes';

const initalState = {
    activeComponent: 'CandidateView',
    candidates: [
    	{
    		name: 'Hilliary Clinton',
            race: 'Presidential Election',
            party: 'democrat',
            image: 'hilliary'
    	},
    	{
    		name: 'Donald Trump',
            race: 'Presidential Election',
            party: 'republican',
            image: 'donald'
    	},
    	{
    		name: 'Patrick Murphy',
            race: 'Florida Senate Election',
            party: 'democrat',
            image: 'murphy'
    	},
    	{
    		name: 'Marco Rubio',
            race: 'Florida Senate Election',
            party: 'republican',
            image: 'rubio'
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
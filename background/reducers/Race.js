import * as types from '../actionTypes';

const initalState = 'GENERAL_ELECTION';

export default (state = initalState, action) => {
	switch (action.type){
		case types.GENERAL_ELECTION:
			return state = "GENERAL_ELECTION ";
		case types.FLORIDA_SENATE:
			return state = "FLORIDA_SENATE";
		default: 
			return state;
	}
}
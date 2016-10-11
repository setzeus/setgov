import * as types from '../actionTypes';

const initalState = {
	economy:0,
        economy_wall_street_reform:0,
        economy_farmers_ranchers:0,

      education:0,
        education_common_core:0,
        improving_education:0,

      environment: 0,
        environment_our_environment: 0,

      equality: 0,
        equality_criminal_justice_reform:0,
        equality_immigration_reform:0,
        equality_lgbt_rights_and_equality:0,
        equality_voting_rights:0,
        equality_seniors:0,
        equality_womens_rights_and_opportunity: 0,

      health: 0,
        healthcare: 0,

      jobs: 0,

      security: 0,
        security_national_security:0
}

export default (state = initalState, aciton) =>{
	switch (aciton.type){
		case types.ECONOMY:
			return state.economy ++;
		case types.ECONOMY_WALL_STREET_REFORM:
			return state.economy_wall_street_reform ++;
		case types.ECONOMY_FARMERS_RANCHERS:
			return state.economy_farmers_ranchers ++;
		case types.EDUCATION:
			return state.education ++;
		case types.EDUCATION_COMMON_CORE:
			return state.education_common_core ++;
		case types.IMPROVING_EDUCATION:
			return state.improving_education ++;
		case types.ENVIRONMENT:
			return state.environment ++;
		case types.ENVIRONMENT_OUR_ENVIRONMENT:
			return state.environment_our_environment ++;
		case types.EQUALITY:
			return state.equality ++;
		case types.EQUALITY_CRIMINAL_JUSTICE_REFORM:
			return state.equality_criminal_justice_reform ++;
		case types.EQUALITY_IMMIGRATION_REFORM:
			return state.equality_immigration_reform ++;
		case types.EQUALITY_LFBT_RIGHTS_AND_EQULITY:
			return state.equality_lgbt_rights_and_equality ++;
		case types.EQUALITY_VOTING_RIGHTS:
			return state.equality_voting_rights ++;
		case types.EQUALITY_SENIORS:
			return state.equality_seniors ++;
		case types.EQUALITY_WOMENS_RIGHTS_AND_OPPORTUNITY:
			return state.equality_womens_rights_and_opportunity ++;
		case types.HEALTH:
			return state.health ++;
		case types.JOBS:
			return state.jobs ++;
		case types.SECURITY:
			return state.security ++;
		case types.SECURITY_NATIONAL_SECURITY:
			return state.security_national_security ++;
		default:
			return state;
	}
}







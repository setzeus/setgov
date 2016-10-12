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
		case types.ECONOMY:{
			return Object.assign({},state, {
				economy: action.payload
			});
		}
			
		case types.ECONOMY_WALL_STREET_REFORM:
			return Object.assign({},state, {
				economy_wall_street_reform: action.payload
			});
		case types.ECONOMY_FARMERS_RANCHERS:
			return Object.assign({},state, {
				economy_farmers_ranchers: action.payload
			});
		case types.EDUCATION:
			return Object.assign({},state, {
				education: action.payload
			});
		case types.EDUCATION_COMMON_CORE:
			return Object.assign({},state, {
				education_common_core: action.payload
			});
		case types.IMPROVING_EDUCATION:
			return Object.assign({},state, {
				improving_education: action.payload
			});
		case types.ENVIRONMENT:
			return Object.assign({},state, {
				environment: action.payload
			});
		case types.ENVIRONMENT_OUR_ENVIRONMENT:
			return Object.assign({},state, {
				environment_our_environment: action.payload
			});
		case types.EQUALITY:
			return Object.assign({},state, {
				equality: action.payload
			});
		case types.EQUALITY_CRIMINAL_JUSTICE_REFORM:
			return Object.assign({},state, {
				equality_criminal_justice_reform: action.payload
			});
		case types.EQUALITY_IMMIGRATION_REFORM:
			return Object.assign({},state, {
				equality_immigration_reform: action.payload
			});
		case types.EQUALITY_LFBT_RIGHTS_AND_EQULITY:
			return Object.assign({},state, {
				equality_lgbt_rights_and_equality: action.payload
			});
		case types.EQUALITY_VOTING_RIGHTS:
			return Object.assign({},state, {
				equality_voting_rights: action.payload
			});
		case types.EQUALITY_SENIORS:
			return Object.assign({},state, {
				equality_seniors: action.payload
			});
		case types.EQUALITY_WOMENS_RIGHTS_AND_OPPORTUNITY:
			return Object.assign({},state, {
				equality_womens_rights_and_opportunity: action.payload
			});
		case types.HEALTH:
			return Object.assign({},state, {
				health: action.payload
			});
		case types.JOBS:
			return Object.assign({},state, {
				jobs: action.payload
			});
		case types.SECURITY:
			return Object.assign({},state, {
				security: action.payload
			});
		case types.SECURITY_NATIONAL_SECURITY:
			return Object.assign({},state, {
				security_national_security: action.payload
			});
		default:
			return state;
	}
}







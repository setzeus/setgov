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

export default (state = initalState, action) =>{
	var payload = action.payload
	switch (action.type){
		
		case types.ECONOMY:{
			return Object.assign({},state, {
				economy: payload
			});
		}
		case types.ECONOMY_WALL_STREET_REFORM:
			return Object.assign({},state, {
				economy_wall_street_reform: payload
			});
		case types.ECONOMY_FARMERS_RANCHERS:
			return Object.assign({},state, {
				economy_farmers_ranchers: payload
			});
		case types.EDUCATION:
			return Object.assign({},state, {
				education: payload
			});
		case types.EDUCATION_COMMON_CORE:
			return Object.assign({},state, {
				education_common_core: payload
			});
		case types.IMPROVING_EDUCATION:
			return Object.assign({},state, {
				improving_education: payload
			});
		case types.ENVIRONMENT:
			return Object.assign({},state, {
				environment: payload
			});
		case types.ENVIRONMENT_OUR_ENVIRONMENT:
			
			return Object.assign({},state, {
				environment_our_environment: payload
			});
		case types.EQUALITY:
			return Object.assign({},state, {
				equality: payload
			});
		case types.EQUALITY_CRIMINAL_JUSTICE_REFORM:
			return Object.assign({},state, {
				equality_criminal_justice_reform: payload
			});
		case types.EQUALITY_IMMIGRATION_REFORM:
			return Object.assign({},state, {
				equality_immigration_reform: payload
			});
		case types.EQUALITY_LFBT_RIGHTS_AND_EQULITY:
			return Object.assign({},state, {
				equality_lgbt_rights_and_equality: payload
			});
		case types.EQUALITY_VOTING_RIGHTS:
			return Object.assign({},state, {
				equality_voting_rights: payload
			});
		case types.EQUALITY_SENIORS:
			return Object.assign({},state, {
				equality_seniors: payload
			});
		case types.EQUALITY_WOMENS_RIGHTS_AND_OPPORTUNITY:
			return Object.assign({},state, {
				equality_womens_rights_and_opportunity: payload
			});
		case types.HEALTH:
			return Object.assign({},state, {
				health: payload
			});
		case types.JOBS:
			return Object.assign({},state, {
				jobs: payload
			});
		case types.SECURITY:
			return Object.assign({},state, {
				security: payload
			});
		case types.SECURITY_NATIONAL_SECURITY:
			return Object.assign({},state, {
				security_national_security: payload
			});
		default:
			return state;
	}
}







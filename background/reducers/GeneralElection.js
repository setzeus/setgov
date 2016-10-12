import * as types from '../actionTypes';

const initalState = {
	economy:0,
        economy_a_fair_tax_system:0,
        economy_fixing_americas_infrastructure:0,
        economy_manufacturing:0,
        economy_small_business:0,
        economy_social_security_and_medicare:0,
        economy_wall_street_reform:0,
        economy_works_for_everyone:0,
        economy_regulation: 0,
        economy_taxplan: 0,
        economy_trade: 0,

      education:0,
        education_campus_sexual_assault:0,
        education_college_debt:0,
        education_early_childhood:0,
        education_k_12:0,
        education_technology_and_innovation:0,

      environment: 0,
        environment_climate_change:0,
        environment_protecting_animals_and_wildlife:0,
        environment_rural_communities:0,
        environment_energy: 0,

      equality: 0,
        equality_campaign_finance_reform:0,
        equality_criminal_justice_reform:0,
        equality_immigration_reform:0,
        equality_lgbt_rights_and_equality:0,
        equality_racial_justice:0,
        equality_voting_rights:0,
        equality_womens_rights_and_opportunity:0,
        equality_gun_control: 0,

      health: 0,
        health_addiction_and_substance_use:0,
        health_an_end_to_alzheimers:0,
        health_autism:0,
        health_disability_rights:0,
        health_health_care:0,
        health_hiv_and_aids:0,
        health_child_care: 0,

      jobs: 0,
        jobs_paid_family_and_medical_leave:0,
        jobs_labor_and_workers_rights:0,  
        jobs_veterans_the_armed_forces_and_their_families:0, 
        jobs_wages:0,
        jobs_workforce_skills_and_jobs_training:0, 

      security: 0,
        security_combating_terrorism:0,
        security_gun_violence:0,
        security_miliary_and_defense:0,
        security_national_security:0,
        security_foreign_policy: 0
}

export default (state = initalState, action) => {
	console.log(action.type)
	console.log(types.ECONOMY)
	console.log(action.payload)
	switch(action.type){
		case types.ECONOMY :{
			return Object.assign({},state, {
				economy: action.payload
			});
		}	
		case types.ECONOMY_A_FAIR_TAX_SYSTEM :
			return Object.assign({},state, {
				economy_a_fair_tax_system: action.payload
			});
		case types.ECONOMY_FIXING_AMERICAS_INFRASTRUCTURE:{
			return Object.assign({},state, {
				economy_fixing_americas_infrastructure: action.payload
			});
		}
		case types.ECONOMY_MANUFACTURING:{
			return Object.assign({},state, {
				economy_manufacturing: action.payload
			}); 
		}			
		case types.ECONOMY_SMALL_BUSINESS:{
			return Object.assign({},state, {
				economy_small_business: action.payload
			});
		}	
		case types.ECONOMY_SOCIAL_SECURITY_AND_MEDICARE:{
			return Object.assign({},state, {
				economy_social_security_and_medicare: action.payload
			});	
		}
		case types.ECONOMY_WALL_STREET_REFORM:{
			return Object.assign({},state, {
				economy_wall_street_reform: action.payload
			});
		}	
		case types.ECONOMY_WORKS_FOR_EVERYONE:{
			return Object.assign({},state, {
				economy_works_for_everyone: action.payload
			});
		}	
		case types.ECONOMY_REGULATION:{
			return Object.assign({},state, {
				economy_regulation: action.payload
			});	
		}			
		case types.ECONOMY_TAXPLAN:{
			return Object.assign({},state, {
				economy_taxplan: action.payload
			});	
		}
		case types.ECONOMY_TRADE:{
			return Object.assign({},state, {
				economy_trade: action.payload
			});
		}	
		case types.EDUCATION:{
			return Object.assign({},state, {
				education: action.payload
			});
		}	
		case types.EDUCATION_CAMPUS_SEXUAL_ASSULT:{
			return Object.assign({},state, {
				education_campus_sexual_assault: action.payload
			});
		}	
		case types.EDUCATION_COLLEGE_DEBT:{
			return Object.assign({},state, {
				education_college_debt: action.payload
			});
		}	
		case types.EDUCATION_EARLY_CHILDHOOD:{
			return Object.assign({},state, {
				education_early_childhood: action.payload
			});
		}	
		case types.EDUCATION_K_12:{
			return Object.assign({},state, {
				education_k_12: action.payload
			});
		}	
		case types.EDUCATION_TECHNOLOGY_AND_INNOVATION:{
			return Object.assign({},state, {
				education_technology_and_innovation: action.payload
			});
		}	
		case types.ENVIRONMENT:{
			return Object.assign({},state, {
				environment: action.payload
			}); 
		}	
		case  types.ENVIRONMENT_CLIMATE_CHANGE:{
			return Object.assign({},state, {
				environment: action.payload
			});
		}	
		case types.ENVIRONMENT_PROTECTING_ANIMALS_AND_WILDLIFE:
			return Object.assign({},state, {
				environment_protecting_animals_and_wildlife: action.payload
			});
		case types.ENVIRONMENT_RURAL_COMMUNITIES:
			return Object.assign({},state, {
				environment_rural_communities: action.payload
			});
		case types.ENVIRONMENT_ENERGY: 
			return Object.assign({},state, {
				environment_energy: action.payload
			});
		case types.EQUALITY:
			return Object.assign({},state, {
				equality: action.payload
			});
		case types.EQUALITY_CAMPAIGN_FINANCE_REFORM:
			return Object.assign({},state, {
				equality_campaign_finance_reform: action.payloadaction.payload
			});
		case types.EQUALITY_CRIMINAL_JUSTICE_REFORM:
			return Object.assign({},state, {
				equality_criminal_justice_reform: action.payload
			});
		case types.EQUALITY_LFBT_RIGHTS_AND_EQULITY:
			return Object.assign({},state, {
				equality_lgbt_rights_and_equality: action.payload
			});
		case types.EQUALITY_RACIAL_JUSTICE:
			return Object.assign({},state, {
				equality_racial_justice: action.payload
			});
		case types.EQUALITY_VOTING_RIGHTS:
			return Object.assign({},state, {
				equality_voting_rights: action.payload
			});
		case types.EQUALITY_WOMENS_RIGHTS_AND_OPPORTUNITY:
			return Object.assign({},state, {
				equality_womens_rights_and_opportunity: action.payload
			});
		case types.EQUALITY_GUN_CONTROL:
			return Object.assign({},state, {
				equality_gun_control: action.payload
			});
		case types.HEALTH:
			return Object.assign({},state, {
				health: action.payload
			});
		case types.HEALTH_ADDICATION_AND_SUBSTANCE_USE:
			return Object.assign({},state, {
				health_addiction_and_substance_use: action.payload
			});
		case types.HEALTH_AN_END_T0_ALZHEIMERS:
			return Object.assign({},state, {
				health_an_end_to_alzheimers: action.payload
			});
		case types.HEALTH_AUTISM:
			return Object.assign({},state, {
				health_autism: action.payload
			});
		case types.HEALTH_DISABILITY_RIGHTS:
			return Object.assign({},state, {
				health_disability_rights: action.payload
			});
		case types.HEALTH_HEALTH_CARE:
			return Object.assign({},state, {
				health_health_care: action.payload
			});
		case types.HEALTH_HIV_AND_AIDS:
			return Object.assign({},state, {
				health_hiv_and_aids: action.payload
			}); 
		case types.HEALTH_CHILD_CARE:
			return Object.assign({},state, {
				health_child_care: action.payload
			});
		case types.JOBS:
			return Object.assign({},state, {
				jobs: action.payload
			});
		case types.JOBS_PAID_FAMILY_AND_MEDICAL_LEAVE:
			return Object.assign({},state, {
				jobs_paid_family_and_medical_leave: action.payload
			});
		case types.JOBS_LABOR_AND_WORKERS_RIGHTS:
			return Object.assign({},state, {
				jobs_labor_and_workers_rights: action.payload
			});
		case types.JOBS_VETERANS_THE_ARMED_FORCES_AND_THEIR_FAMILIES:
			return Object.assign({},state, {
				jobs_veterans_the_armed_forces_and_their_families: action.payload
			});
		case types.JOBS_WAGES:
			return Object.assign({},state, {
				jobs_wages: action.payload
			});
		case types.JOBS_WORKFORCE_SKILLS_AND_JOBS_TRAINING:
			return Object.assign({},state, {
				jobs_workforce_skills_and_jobs_training: action.payload
			});
		case types.SECUTIRY:
			return Object.assign({},state, {
				security: action.payload
			});
		case types.SECURITY_COMBATING_TERRORISM:
			return Object.assign({},state, {
				security_combating_terrorism: action.payload
			});
		case types.SECUTIRY_GUN_VIOLENCE:
			return Object.assign({},state, {
				security_gun_violence: action.payload
			});
		case types.SECURITY_MILITARY_AND_DEFENSE:
			return Object.assign({},state, {
				security_miliary_and_defense: action.payload
			});
		case types.SECURITY_NATIONAL_SECURITY:
			return Object.assign({},state, {
				security_national_security: action.payload
			});
		case types.SECURITY_FOREGIN_POLICY:
			return Object.assign({},state, {
				security_foreign_policy: action.payload
			});
		default :
			return state;
	}
}











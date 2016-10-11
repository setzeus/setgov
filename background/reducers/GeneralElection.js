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
	switch(action.type){
		case types.ECONOMY :
			return state.economy ++;
		case types.ECONOMY_A_FAIR_TAX_SYSTEM :
			return state.economy_a_fair_tax_system ++;
		case types.ECONOMY_FIXING_AMERICAS_INFRASTRUCTURE:
			return state.economy_fixing_americas_infrastructure ++;
		case types.ECONOMY_MANUFACTURING: 
			return state.economy_manufacturing ++;
		case types.ECONOMY_SMALL_BUSINESS:
			return state.economy_small_business ++;
		case types.ECONOMY_SOCIAL_SECURITY_AND_MEDICARE:
			return state.economy_social_security_and_medicare ++;
		case types.ECONOMY_WALL_STREET_REFORM:
			return state.economy_wall_street_reform ++;
		case types.ECONOMY_WORKS_FOR_EVERYONE:
			return state.economy_works_for_everyone ++;
		case types.ECONOMY_REGULATION:
			return state.economy_regulation ++;
		case types.ECONOMY_TAXPLAN:
			return state.economy_taxplan ++;
		case types.ECONOMY_TRADE:
			return state.economy_trade ++;
		case types.EDUCATION:
			return state.economy ++;
		case types.EDUCATION_CAMPUS_SEXUAL_ASSULT:
			return state.education_campus_sexual_assault ++;
		case types.EDUCATION_COLLEGE_DEBT:
			return education_college_debt ++;
		case types.EDUCATION_EARLY_CHILDHOOD:
			return state.education_early_childhood ++;
		case types.EDUCATION_K_12:
			return state.education_k_12 ++;
		case types.EDUCATION_TECHNOLOGY_AND_INNOVATION:
			return state.education_technology_and_innovation ++;
		case types.ENVIRONMENT: 
			return state.environment ++;
		case  types.ENVIRONMENT_CLIMATE_CHANGE:
			return state.environment_climate_change ++;
		case types.ENVIRONMENT_PROTECTING_ANIMALS_AND_WILDLIFE:
			return state.environment_protecting_animals_and_wildlife ++;
		case types.ENVIRONMENT_RURAL_COMMUNITIES:
			return state.environment_rural_communities ++;
		case types.ENVIRONMENT_ENERGY: 
			return state.environment_energy ++;
		case types.EQUALITY:
			return state.equality ++;
		case types.EQUALITY_CAMPAIGN_FINANCE_REFORM:
			return state.equality_campaign_finance_reform ++;
		case types.EQUALITY_CRIMINAL_JUSTICE_REFORM:
			return state.equality_criminal_justice_reform ++;
		case types.EQUALITY_LFBT_RIGHTS_AND_EQULITY:
			return state.equality_lgbt_rights_and_equality ++;
		case types.EQUALITY_RACIAL_JUSTICE:
			return state.equality_racial_justice ++;
		case types.EQUALITY_VOTING_RIGHTS:
			return state.equality_voting_rights ++;
		case types.EQUALITY_WOMENS_RIGHTS_AND_OPPORTUNITY:
			return state.equality_womens_rights_and_opportunity ++;
		case types.EQUALITY_GUN_CONTROL:
			return state.equality_gun_control ++;
		case types.HEALTH:
			return state.health ++;
		case types.HEALTH_ADDICATION_AND_SUBSTANCE_USE:
			return state.health_addiction_and_substance_use ++;
		case types.HEALTH_AN_END_T0_ALZHEIMERS:
			return state.health_an_end_to_alzheimers ++;
		case types.HEALTH_AUTISM:
			return state.health_autism ++;
		case types.HEALTH_DISABILITY_RIGHTS:
			return state.health_disability_rights ++;
		case types.HEALTH_HEALTH_CARE:
			return state.health_health_care ++;
		case types.HEALTH_HIV_AND_AIDS: 
			return state.health_hiv_and_aids ++;
		case types.HEALTH_CHILD_CARE:
			return state.health_child_care ++;
		case types.JOBS:
			return state.jobs ++;
		case types.JOBS_PAID_FAMILY_AND_MEDICAL_LEAVE:
			return state.jobs_paid_family_and_medical_leave ++;
		case types.JOBS_LABOR_AND_WORKERS_RIGHTS:
			return state.jobs_labor_and_workers_rights ++;
		case types.JOBS_VETERANS_THE_ARMED_FORCES_AND_THEIR_FAMILIES:
			return state.jobs_veterans_the_armed_forces_and_their_families ++;
		case types.JOBS_WAGES:
			return state.jobs ++;
		case types.JOBS_WORKFORCE_SKILLS_AND_JOBS_TRAINING:
			return state.jobs_workforce_skills_and_jobs_training ++;
		case types.SECUTIRY:
			return state.security ++;
		case types.SECURITY_COMBATING_TERRORISM:
			return state.security_combating_terrorism ++;
		case types.SECUTIRY_GUN_VIOLENCE:
			return state.security_gun_violence ++;
		case types.SECURITY_MILITARY_AND_DEFENSE:
			return state.security_miliary_and_defense ++;
		case types.SECURITY_NATIONAL_SECURITY:
			return state.security_national_security ++;
		case types.SECURITY_FOREGIN_POLICY:
			return state.security_foreign_policy ++;
	}
}











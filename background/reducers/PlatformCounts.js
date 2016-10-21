import * as types from '../actionTypes';

const initalState = {
    economy: {
        economy_a_fair_tax_system: 0,
        economy_farmers_ranchers: 0,
        economy_fixing_americas_infrastructure: 0,
        economy_manufacturing: 0,
        economy_small_business: 0,
        economy_social_security_and_medicare: 0,
        economy_wall_street_reform: 0,
        economy_works_for_everyone: 0,
        economy_regulation: 0,
        economy_taxplan: 0,
        economy_trade: 0,
    },
    education: {
        education_campus_sexual_assault: 0,
        education_college_debt: 0,
        education_common_core: 0,
        education_early_childhood: 0,
        education_k_12: 0,
        education_technology_and_innovation: 0,
        improving_education: 0,
    },
    environment: {
        environment_climate_change: 0,
        environment_protecting_animals_and_wildlife: 0,
        environment_rural_communities: 0,
        environment_our_environment: 0,
        environment_energy: 0,
    },
    equality: {
        equality_campaign_finance_reform: 0,
        equality_criminal_justice_reform: 0,
        equality_immigration_reform: 0,
        equality_lgbt_rights_and_equality: 0,
        equality_racial_justice: 0,
        equality_voting_rights: 0,
        equality_seniors: 0,
        equality_womens_rights_and_opportunity: 0,
        equality_gun_control: 0,
    },
    health: {
        health_addiction_and_substance_use: 0,
        health_an_end_to_alzheimers: 0,
        health_autism: 0,
        health_disability_rights: 0,
        health_health_care: 0,
        health_hiv_and_aids: 0,
        health_child_care: 0,
        healthcare: 0,
    },
    jobs: {
        jobs_paid_family_and_medical_leave: 0,
        jobs_labor_and_workers_rights: 0,
        jobs_veterans_the_armed_forces_and_their_families: 0,
        jobs_wages: 0,
        jobs_workforce_skills_and_jobs_training: 0,
    },
    security: {
        security_combating_terrorism: 0,
        security_gun_violence: 0,
        security_miliary_and_defense: 0,
        security_national_security: 0,
        security_foreign_policy: 0
    }
};

export default (state = initalState, action) => {
    const payload = action.payload;
    let obj = {};
    switch (action.type) {
        
        case types.ECONOMY:
            obj[payload.subtag_name] = payload.subtag_count;
            return Object.assign({}, state , {
                economy: Object.assign({}, state.economy, obj)
            });
        case types.EDUCATION:
            obj[payload.subtag_name] = payload.subtag_count;
            return Object.assign({}, state , {
                education: Object.assign({}, state.education, obj)
            });
        case types.ENVIRONMENT:
            obj[payload.subtag_name] = payload.subtag_count;
            return Object.assign({}, state , {
                environment: Object.assign({}, state.environment, obj)
            });
        case types.EQUALITY:
            obj[payload.subtag_name] = payload.subtag_count;
            return Object.assign({}, state , {
                equality: Object.assign({}, state.equality, obj)
            });
        case types.HEALTH:
            obj[payload.subtag_name] = payload.subtag_count;
            return Object.assign({}, state , {
                health: Object.assign({}, state.health, obj)
            });
        case types.JOBS:
            obj[payload.subtag_name] = payload.subtag_count;
            return Object.assign({}, state , {
                jobs: Object.assign({}, state.jobs, obj)
            });
        case types.SECURITY:
            obj[payload.subtag_name] = payload.subtag_count;
            return Object.assign({}, state , {
                security: Object.assign({}, state.security, obj)
            });  
                      
    case types.RESET:
        return initalState;
    default:
        return state;
    }
};
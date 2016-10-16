export function hiliarySetup(wordCount) {
	console.log(wordCount)
  if(wordCount == undefined){
    console.log('shit hit the fan')
  }else{
    var hillaryTags = [
      {
        text:"Economy", 
        link:"https://www.hillaryclinton.com/issues/an-economy-that-works-for-everyone/",
        count: wordCount.economy,
        subTags:[
          {
            text:"AFairTaxSystem",
            tag:"Economy",
            count: wordCount.economy_a_fair_tax_system,
            link:"https://www.hillaryclinton.com/issues/a-fair-tax-system/",
            count: wordCount.economy_a_fair_tax_system,
          },
          {
            text:"FixingInfrastructure",
            tag:"Economy",
            link:"https://www.hillaryclinton.com/issues/fixing-americas-infrastructure/",
            count: wordCount.economy_fixing_americas_infrastructure
          },
          {
            text:"Manufacturing",
            tag:"Economy",
            link:"https://www.hillaryclinton.com/issues/manufacturing/",
            count: wordCount.economy_manufacturing
          },
          {
            text:"SmallBusiness",
            tag:"Economy",
            link:"https://www.hillaryclinton.com/issues/small-business/",
            count: wordCount.economy_small_business
          },
          {
            text:"SocialSecurityAndMedicare",
            tag:"Economy",
            link:"https://www.hillaryclinton.com/issues/social-secutiry-and-medicare/",
            count: wordCount.economy_social_security_and_medicare
          },
          {
            text:"WallStreetReform",
            tag:"Economy",
            link:"https://www.hillaryclinton.com/issues/wall-street/",
            count: wordCount.economy_wall_street_reform
          },
          {
            text:"WorksForEveryone",
            tag:"Economy",
            link:"https://www.hillaryclinton.com/issues/workforce-and-skills/",
            count: wordCount.economy_works_for_everyone
          }
        ]
      }, 
      {
        text:"Education",
        link:"https://www.hillaryclinton.com/issues/college/",
        count: wordCount.education,
        subTags:[
          {
            text:"CampusSexualAssult",
            tag:"Education",
            link:"https://www.hillaryclinton.com/issues/campus-sexual-assault/",
            count: wordCount.education_campus_sexual_assault
          },
          {
            text:"CollegeDebt",
            tag:"Education",
            link:"https://www.hillaryclinton.com/issues/college/",
            count: wordCount.education_college_debt
          },
          {
            text:"EarlyChildhood",
            tag:"Education",
            link:"https://www.hillaryclinton.com/issues/early-childhood-education/",
            count: wordCount.education_early_childhood
          },
          {
            text:"K-12Education",
            tag:"Education",
            link:"https://www.hillaryclinton.com/issues/k-12-education/",
            count: wordCount.education_k_12
          },
          {
            text:"TechnologyInnovation",
            tag:"Education",
            link:"https://www.hillaryclinton.com/issues/technology-and-innovation/",
            count: wordCount.education_technology_and_innovation
          }
        ]
      }, 
      {
        text:"Enviroment",
        link:"https://www.hillaryclinton.com/issues/climate/",
        count: wordCount.environment,
        subTags:[
          {
            text:"ClimateChange",
            tag:"Enviroment",
            link:"https://www.hillaryclinton.com/issues/climate/",
            count: wordCount.environment_climate_change
          },
          { 
            text:"ProtectingAnimals&Wildlife",
            tag:"Enviroment",
            link:"https://www.hillaryclinton.com/issues/protecting-animals-and-wildlife/",
            count: wordCount.environment_protecting_animals_and_wildlife
          },
          { 
            text:"RuralCommunities",
            tag:"Enviroment",
            link:"https://www.hillaryclinton.com/issues/rural-communities/",
            count: wordCount.environment_rural_communities
          }
          
        ]
      },
      {
        text:"Equality",
        link:"https://www.hillaryclinton.com/issues/racial-justice/",
        count: wordCount.equality,
        subTags:[
          {
            text:"CampaignFinanceReform",
            tag:"Equality",
            link:"https://www.hillaryclinton.com/issues/campaign-finance-reform/",
            count: wordCount.equality_campaign_finance_reform
          },
          {
            text:"CriminalJusticeReform",
            tag:"Equality",
            link:"https://www.hillaryclinton.com/issues/criminal-justice-reform/",
            count: wordCount.equality_criminal_justice_reform
          },
          {
            text:"ImmigrationReform",
            tag:"Equality",
            link:"https://www.hillaryclinton.com/issues/immigration-reform/",
            count: wordCount.equality_immigration_reform
          },
          {
            text:"LFBTEquality",
            tag:"Equality",
            link:"https://www.hillaryclinton.com/issues/lgbt-equality/",
            count: wordCount.equality_lgbt_rights_and_equality
          },
          {
            text:"RacialJustice",
            tag:"Equality",
            link:"https://www.hillaryclinton.com/issues/racial-justice/",
            count: wordCount.equality_racial_justice
          },
          {
            text:"VotingRights",
            tag:"Equality",
            link:"https://www.hillaryclinton.com/issues/voting-rights/",
            count: wordCount.equality_voting_rights
          },
          {
            text:"WomanRightsAndOpportunity",
            tag:"Equality",
            link:"https://www.hillaryclinton.com/issues/womens-rights-and-opportunity/",
            count: wordCount.equality_womens_rights_and_opportunity
          }
        ]
      },
      {
        text:"Health",
        link:"https://www.hillaryclinton.com/issues/health-care/",
        count: wordCount.health,
        subTags:[
          {
            text:"AddictionAndSubstanceUse",
            tag:"Health",
            link:"https://www.hillaryclinton.com/issues/addiction/",
            count: wordCount.health_addiction_and_substance_use
          },
          {
            text:"EndToAlzheimers",
            tag:"Health",
            link:"https://www.hillaryclinton.com/issues/alzheimers-disease/",
            count: wordCount.health_an_end_to_alzheimers
          },
          {
            text:"Autism",
            tag:"Health",
            link:"https://www.hillaryclinton.com/issues/autism/",
            count: wordCount.health_autism
          },
          {
            text:"DisabilityRights",
            tag:"Health",
            link:"https://www.hillaryclinton.com/issues/disability-rights/",
            count: wordCount.health_disability_rights
          },
          {
            text:"HealthCare",
            tag:"Health",
            link:"https://www.hillaryclinton.com/issues/health-care/",
            count: wordCount.health_care
          },
          {
            text:"HivAndAids",
            tag: "Health",
            link:'https://www.hillaryclinton.com/issues/fighting-hiv-and-aids/',
            count: wordCount.health_hiv_and_aids

          }
        ]
      },
      {
        text:"Jobs",
        link:"https://www.hillaryclinton.com/issues/jobs/",
        count: wordCount.jobs,
        subTags:[
          {
            text:"PaidLeave",
            tag:"Jobs",
            link:"https://www.hillaryclinton.com/issues/paid-leave/",
            count: wordCount.jobs_paid_family_and_medical_leave
          },
          {
            text:"LaborWorkerRights",
            tag:"Jobs",
            link:"https://www.hillaryclinton.com/issues/labor/",
            count: wordCount.jobs_labor_and_workers_rights
          },
          {
            text:"Veterans",
            tag:"Jobs",
            link:"https://www.hillaryclinton.com/issues/veterans/",
            count: wordCount.jobs_veterans_the_armed_forces_and_their_families
          },
          {
            text:"Wages",
            tag:"Jobs",
            link:"https://www.hillaryclinton.com/issues/wages/",
            count: wordCount.jobs_wages
          },
          {
            text:"WorkForceAndSkills",
            tag:"Jobs",
            link:"https://www.hillaryclinton.com/issues/workforce-and-skills/",
            count: wordCount.jobs_workforce_skills_and_jobs_training
          }
        ]
      },
      {
        text:"Security", 
        link:"https://www.hillaryclinton.com/issues/national-security/",
        count: wordCount.security,
        subTags:[
          {
            text:"CombatingTerrorism",
            tag:"Security",
            link:"https://www.hillaryclinton.com/issues/combating-terrorism",
            count: wordCount.security_combating_terrorism
          },
          {
            text:"GunViolencePrevention",
            tag:"Security",
            link:"https://www.hillaryclinton.com/issues/gun-violence-prevention/",
            count: wordCount.security_gun_violence
          },
          {
            text:"MilitaryAndDefense",
            tag:"Security",
            link:"https://www.hillaryclinton.com/issues/military-and-defense/",
            count: wordCount.security_miliary_and_defense
          },
          {
            text:"NationalSecurity",
            tag:"Security",
            link:"https://www.hillaryclinton.com/issues/national-security/",
            count: wordCount.security_national_security
          }
        ]
      },
      {
        text:"Tech", 
        link:"https://www.hillaryclinton.com/issues/technology-and-innovation/",
        count: wordCount.tech,
        
      }
    ]
    var countFilter = hillaryTags.filter(count).sort(sortInt).filter(checkSubtag).filter(checkSubtagCount);
    var hiliary = countFilter.unshift({ name: 'H.Clinton'});
    return hiliary
  }
	
}


function count (map){
	if(map.count > 0){
	  return map
	}
}

function sortInt(a,b) {
    return  b.count - a.count;
}
   
function checkSubtag(value){
	if(value.subTags.length > 0){
	  return value 
	}
}


function checkSubtagCount(value){
	for(var q=0;q< value.subTags.length; q++){
	  if( value.subTags[q].count !== 0){
	    return value
	  }
	}
}
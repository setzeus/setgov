function removeZero(value){
    if ( value.count > 0) {
        return value
    }
}

function removeZeroSub(value){
    if( value.subTags.length > 0){
      return value
    }
}

function sortInt(a, b) {
    return  b.count - a.count;
}



export function tagSetup(wordCount, race) {
	console.log(wordCount)
  
  if(wordCount == undefined){
    console.log('shit hit the fan')
  }else{
    let ohio = [
      {
        text: 'Education',
        count: wordCount.education.education,
        subTags:[
          {
            text: 'AttainmnetOfEducation',
            link: 'http://www.debbielieberman.com/attainment_of_education',
            count: wordCount.education.education_attainment,
            name: 'liberman',
          }
        ]
      },
      {
        text: 'Economy',
        count: wordCount.economy.economy,
        subTags:[
          {
            text: 'DiversifyTheEconomy',
            link: 'http://www.debbielieberman.com/diversify_the_economy',
            count: wordCount.economy.economy_diversity,
            name: 'liberman'
          }
        ]
      },
      {
        text: 'Equality',
        count: wordCount.equality.equality,
        subTags: [
          {
            text: 'CoordinateCollaborateCooperate',
            link : 'http://www.debbielieberman.com/coordinate_collaborate_cooperate',
            count: wordCount.equality.equality_coordinate_collaborate,
            name: 'liberman'
          }
        ]
      },
      {
        text: 'Jobs',
        count: wordCount.jobs.jobs,
        subTags: [
          {
            text: 'MeasureMarket',
            link: 'http://www.debbielieberman.com/measure_and_market',
            count: wordCount.jobs.jobs_measure_market,
            name: 'liberman',
          }
        ]
      }
    ]
    let presidentail = [
          {
            text:"Economy",
            count: wordCount.economy.economy, 
            subTags:[
              {
                text:"Economy", 
                link:"https://www.hillaryclinton.com/issues/an-economy-that-works-for-everyone/",
                count: wordCount.economy.economy,
                name: 'clinton',
              },
              {
                text: "AFairTaxSystem",
                tag: "Economy",
                link: "https://www.hillaryclinton.com/issues/a-fair-tax-system/",
                count: wordCount.economy.economy_a_fair_tax_system,
                name: 'clinton',

              },
              {
                text: "FixingInfrastructure",
                tag: "Economy",
                link: "https://www.hillaryclinton.com/issues/fixing-americas-infrastructure/",
                count: wordCount.economy.economy_fixing_americas_infrastructure,
                name: 'clinton',

              },
              {
                text: "Manufacturing",
                tag: "Economy",
                link: "https://www.hillaryclinton.com/issues/manufacturing/",
                count: wordCount.economy.economy_manufacturing,
                name: 'clinton',

              },
              {
                text:"SmallBusiness",
                tag:"Economy",
                link:"https://www.hillaryclinton.com/issues/small-business/",
                count: wordCount.economy.economy_small_business,
                name: 'clinton',

              },
              {
                text:"SocialSecurityAndMedicare",
                tag:"Economy",
                link:"https://www.hillaryclinton.com/issues/social-secutiry-and-medicare/",
                count: wordCount.economy.economy_social_security_and_medicare,
                name: 'clinton',

              },
              {
                text:"WallStreetReform",
                tag:"Economy",
                link:"https://www.hillaryclinton.com/issues/wall-street/",
                count: wordCount.economy.economy_wall_street_reform,
                name: 'clinton',

              },
              {
                text:"WorksForEveryone",
                tag:"Economy",
                link:"https://www.hillaryclinton.com/issues/workforce-and-skills/",
                count: wordCount.economy.economy_works_for_everyone,
                name: 'clinton',

              },
              {
                text: 'Economy',
                link: 'https://www.donaldjtrump.com/policies/economy/',
                count: wordCount.economy.economy,
                name: 'trump',
              },
              {
                text: 'Regulations',
                tag: 'Economy',
                link: 'https://www.donaldjtrump.com/policies/regulations/',
                count: wordCount.economy.economy_regulation,
                name: 'trump',
              },
              {
                text: 'Tax Plan',
                tag: 'Economy',
                link: 'https://www.donaldjtrump.com/policies/tax-plan/',
                count: wordCount.economy.economy_taxplan,
                name: 'trump',
              },
              {
                text: 'Trade',
                tag: 'Economy',
                link: 'https://www.donaldjtrump.com/policies/tax-plan/',
                count: wordCount.economy.economy_trade,
                name: 'trump',
              }
            ]
          }, 
          {
            text:"Education",
            count: wordCount.education.education,
            subTags:[
              {
                text:"Education",
                tag:"Education",
                link:"https://www.hillaryclinton.com/issues/college/",
                count: wordCount.education.education,
                name: 'clinton',

              },
              {
                text:"CampusSexualAssult",
                tag:"Education",
                link:"https://www.hillaryclinton.com/issues/campus-sexual-assault/",
                count: wordCount.education.education_campus_sexual_assault,
                name: 'clinton',

              },
              {
                text:"CollegeDebt",
                tag:"Education",
                link:"https://www.hillaryclinton.com/issues/college/",
                count: wordCount.education.education_college_debt,
                name: 'clinton',

              },
              {
                text:"EarlyChildhood",
                tag:"Education",
                link:"https://www.hillaryclinton.com/issues/early-childhood-education/",
                count: wordCount.education.education_early_childhood,
                name: 'clinton',

              },
              {
                text:"K-12Education",
                tag:"Education",
                link:"https://www.hillaryclinton.com/issues/k-12-education/",
                count: wordCount.education.education_k_12,
                name: 'clinton',

              },
              {
                text:"TechnologyInnovation",
                tag:"Education",
                link:"https://www.hillaryclinton.com/issues/technology-and-innovation/",
                count: wordCount.education.education_technology_and_innovation,
                name: 'clinton',

              },
              {
                text: 'Education',
                tag: 'Education',
                link: 'https://www.donaldjtrump.com/policies/education/',
                count: wordCount.education.education
              }
            ]
          }, 
          {
            text:"Enviroment",
            count: wordCount.environment.environment,
            subTags:[
              {
                text:"Enviroment",
                tag:"Enviroment",
                link:"https://www.hillaryclinton.com/issues/climate/",
                count: wordCount.environment.environment,
                name: 'clinton',

              },
              {
                text:"ClimateChange",
                tag:"Enviroment",
                link:"https://www.hillaryclinton.com/issues/climate/",
                count: wordCount.environment.environment_climate_change,
                name: 'clinton',

              },
              { 
                text:"ProtectingAnimals&Wildlife",
                tag:"Enviroment",
                link:"https://www.hillaryclinton.com/issues/protecting-animals-and-wildlife/",
                count: wordCount.environment.environment_protecting_animals_and_wildlife,
                name: 'clinton',

              },
              { 
                text:"RuralCommunities",
                tag:"Enviroment",
                link:"https://www.hillaryclinton.com/issues/rural-communities/",
                count: wordCount.environment.environment_rural_communities,
                name: 'clinton',

              },
              {
                text: 'Energy',
                tag: 'Enviroment',
                link: 'https://www.donaldjtrump.com/policies/energy/',
                count:  wordCount.environment.environment_energy,
                name: 'trump',
              },
              {
                 text: 'Enviroment',
                 link: 'https://www.donaldjtrump.com/policies/energy/',
                 count: wordCount.environment.environment,
                 name: 'trump',
              }
              
            ]
          },
          {
            text:"Equality",
            count: wordCount.equality.equality,
            subTags:[
              {
                text:"Equality",
                tag:"Equality",
                link:"https://www.hillaryclinton.com/issues/racial-justice/",
                count: wordCount.equality.equality,
                name: 'clinton',

              },
              {
                text:"CampaignFinanceReform",
                tag:"Equality",
                link:"https://www.hillaryclinton.com/issues/campaign-finance-reform/",
                count: wordCount.equality.equality_campaign_finance_reform,
                name: 'clinton',

              },
              {
                text:"CriminalJusticeReform",
                tag:"Equality",
                link:"https://www.hillaryclinton.com/issues/criminal-justice-reform/",
                count: wordCount.equality.equality_criminal_justice_reform,
                name: 'clinton',

              },
              {
                text:"ImmigrationReform",
                tag:"Equality",
                link:"https://www.hillaryclinton.com/issues/immigration-reform/",
                count: wordCount.equality.equality_immigration_reform,
                name: 'clinton',

              },
              {
                text:"LFBTEquality",
                tag:"Equality",
                link:"https://www.hillaryclinton.com/issues/lgbt-equality/",
                count: wordCount.equality.equality_lgbt_rights_and_equality,
                name: 'clinton',

              },
              {
                text:"RacialJustice",
                tag:"Equality",
                link:"https://www.hillaryclinton.com/issues/racial-justice/",
                count: wordCount.equality.equality_racial_justice,
                name: 'clinton',

              },
              {
                text:"VotingRights",
                tag:"Equality",
                link:"https://www.hillaryclinton.com/issues/voting-rights/",
                count: wordCount.equality.equality_voting_rights,
                name: 'clinton',

              },
              {
                text:"WomanRightsAndOpportunity",
                tag:"Equality",
                link:"https://www.hillaryclinton.com/issues/womens-rights-and-opportunity/",
                count: wordCount.equality.equality_womens_rights_and_opportunity,
                name: 'clinton',

              },
              {
                text: 'Equality',
                link: 'https://www.donaldjtrump.com/policies/immigration/',
                count: wordCount.equality.equality,
                name: 'trump',
              },
              {
                text: 'Veterans Affaris Reform',
                tag: 'equality',
                link: 'https://www.donaldjtrump.com/policies/veterans-affairs-reform/',
                count: wordCount.jobs.jobs_veterans_the_armed_forces_and_their_families,
                name: 'trump',
              },
              {
                text: 'Consititution and Second Amendment',
                tag: 'Equality',
                link: 'https://www.donaldjtrump.com/policies/constitution-and-second-amendment/',
                count: wordCount.equality.equality_gun_contrl,
                name: 'trump',

              }
            ]
          },
          {
            text:"Health",
            count: wordCount.health.health,
            subTags:[
              {
                text:"Health",
                link:"https://www.hillaryclinton.com/issues/health-care/",
                count: wordCount.health.health,
                name: 'clinton',

              },
              {
                text:"AddictionAndSubstanceUse",
                tag:"Health",
                link:"https://www.hillaryclinton.com/issues/addiction/",
                count: wordCount.health.health_addiction_and_substance_use,
                name: 'clinton',

              },
              {
                text:"EndToAlzheimers",
                tag:"Health",
                link:"https://www.hillaryclinton.com/issues/alzheimers-disease/",
                count: wordCount.health.health_an_end_to_alzheimers,
                name: 'clinton',

              },
              {
                text:"Autism",
                tag:"Health",
                link:"https://www.hillaryclinton.com/issues/autism/",
                count: wordCount.health.health_autism,
                name: 'clinton',

              },
              {
                text:"DisabilityRights",
                tag:"Health",
                link:"https://www.hillaryclinton.com/issues/disability-rights/",
                count: wordCount.health.health_disability_rights,
                name: 'clinton',

              },
              {
                text:"HealthCare",
                tag:"Health",
                link:"https://www.hillaryclinton.com/issues/health-care/",
                count: wordCount.health.health_care,
                name: 'clinton',

              },
              {
                text:"HivAndAids",
                tag: "Health",
                link:'https://www.hillaryclinton.com/issues/fighting-hiv-and-aids/',
                count: wordCount.health.health_hiv_and_aids,
                name: 'clinton',


              },
              {
                text: 'Child Care',
                tag: 'Health',
                link : 'https://www.donaldjtrump.com/policies/child-care/',
                count: wordCount.health.health_child_care
              }
            ]
          },
          {
            text:"Jobs",
            count: wordCount.jobs.jobs,
            subTags:[
              {
                text:"Jobs",
                link:"https://www.hillaryclinton.com/issues/jobs/",
                count: wordCount.jobs.jobs,
                name: 'clinton',

              },
              {
                text:"PaidLeave",
                tag:"Jobs",
                link:"https://www.hillaryclinton.com/issues/paid-leave/",
                count: wordCount.jobs.jobs_paid_family_and_medical_leave,
                name: 'clinton',

              },
              {
                text:"LaborWorkerRights",
                tag:"Jobs",
                link:"https://www.hillaryclinton.com/issues/labor/",
                count: wordCount.jobs.jobs_labor_and_workers_rights,
                name: 'clinton',

              },
              {
                text:"Veterans",
                tag:"Jobs",
                link:"https://www.hillaryclinton.com/issues/veterans/",
                count: wordCount.jobs.jobs_veterans_the_armed_forces_and_their_families,
                name: 'clinton',

              },
              {
                text:"Wages",
                tag:"Jobs",
                link:"https://www.hillaryclinton.com/issues/wages/",
                count: wordCount.jobs.jobs_wages,
                name: 'clinton',

              },
              {
                text:"WorkForceAndSkills",
                tag:"Jobs",
                link:"https://www.hillaryclinton.com/issues/workforce-and-skills/",
                count: wordCount.jobs.jobs_workforce_skills_and_jobs_training,
                name: 'clinton',

              }
            ]
          },
          {
            text:"Security", 
            count: wordCount.security.security,
            subTags:[
              {
                text:"Security", 
                link:"https://www.hillaryclinton.com/issues/national-security/",
                count: wordCount.security.security,
                name: 'clinton',

              },
              {
                text:"CombatingTerrorism",
                tag:"Security",
                link:"https://www.hillaryclinton.com/issues/combating-terrorism",
                count: wordCount.security.security_combating_terrorism,
                name: 'clinton',

              },
              {
                text:"GunViolencePrevention",
                tag:"Security",
                link:"https://www.hillaryclinton.com/issues/gun-violence-prevention/",
                count: wordCount.security.security_gun_violence,
                name: 'clinton',

              },
              {
                text:"MilitaryAndDefense",
                tag:"Security",
                link:"https://www.hillaryclinton.com/issues/military-and-defense/",
                count: wordCount.security.security_miliary_and_defense,
                name: 'clinton',

              },
              {
                text:"NationalSecurity",
                tag:"Security",
                link:"https://www.hillaryclinton.com/issues/national-security/",
                count: wordCount.security.security_national_security,
                name: 'clinton',

              },
              {
                text: 'Foreign Policy and Defeating ISIS',
                tag: 'Security',
                link: 'https://www.donaldjtrump.com/policies/foreign-policy-and-defeating-isis/',
                count: wordCount.security.security_foreign_policy,
                name: 'trump',
              },
              {
                text: 'Security',
                link: 'https://www.donaldjtrump.com/policies/national-defense/',
                name: 'trump',
                count: wordCount.security,
              }
            ]
          }
    ]

    var tags = race == "County Commissioner" ? ohio : presidentail;
    var tempTags = tags.filter(removeZero)

    for( var x = 0; x< tempTags.length; x++) {
       
        var filterdTags = tempTags[x].subTags.filter(removeZero)
        tempTags[x].subTags = filterdTags
          
    }
   
    
    var tags = tempTags.filter(removeZeroSub);
    tags = tags.sort( sortInt );
   

    return tags
  }
	
}








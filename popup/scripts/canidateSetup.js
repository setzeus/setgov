function removeZero(value) {
    if (value.count > 0) {
        return value;
    }
}

function removeZeroSub(value) {
    if (value.subTags.length > 0) {
        return value;
    }
}

function sortInt(a, b) {
    return b.count - a.count;
}

function getTags(type, wordCount) {
    if (type == 'Presidential Election') {
        const presidentail = [
            {
                text: 'Economy',
                count: wordCount.economy.economy,
                subTags: [
                    {
                        text: 'Economy',
                        link: 'https://www.hillaryclinton.com/issues/an-economy-that-works-for-everyone/',
                        count: wordCount.economy.economy,
                        party: 'dem',
                    },
                    {
                        text: 'AFairTaxSystem',
                        tag: 'Economy',
                        link: 'https://www.hillaryclinton.com/issues/a-fair-tax-system/',
                        count: wordCount.economy.economy_a_fair_tax_system,
                        party: 'dem',

                    },
                    {
                        text: 'FixingInfrastructure',
                        tag: 'Economy',
                        link: 'https://www.hillaryclinton.com/issues/fixing-americas-infrastructure/',
                        count: wordCount.economy.economy_fixing_americas_infrastructure,
                        party: 'dem',

                    },
                    {
                        text: 'Manufacturing',
                        tag: 'Economy',
                        link: 'https://www.hillaryclinton.com/issues/manufacturing/',
                        count: wordCount.economy.economy_manufacturing,
                        party: 'dem',

                    },
                    {
                        text: 'SmallBusiness',
                        tag: 'Economy',
                        link: 'https://www.hillaryclinton.com/issues/small-business/',
                        count: wordCount.economy.economy_small_business,
                        party: 'dem',

                    },
                    {
                        text: 'SocialSecurityAndMedicare',
                        tag: 'Economy',
                        link: 'https://www.hillaryclinton.com/issues/social-secutiry-and-medicare/',
                        count: wordCount.economy.economy_social_security_and_medicare,
                        party: 'dem',

                    },
                    {
                        text: 'WallStreetReform',
                        tag: 'Economy',
                        link: 'https://www.hillaryclinton.com/issues/wall-street/',
                        count: wordCount.economy.economy_wall_street_reform,
                        party: 'dem',

                    },
                    {
                        text: 'WorksForEveryone',
                        tag: 'Economy',
                        link: 'https://www.hillaryclinton.com/issues/workforce-and-skills/',
                        count: wordCount.economy.economy_works_for_everyone,
                        party: 'dem',

                    },
                    {
                        text: 'Economy',
                        link: 'https://www.donaldjtrump.com/policies/economy/',
                        count: wordCount.economy.economy,
                        party: 'rep',
                    },
                    {
                        text: 'Regulations',
                        tag: 'Economy',
                        link: 'https://www.donaldjtrump.com/policies/regulations/',
                        count: wordCount.economy.economy_regulation,
                        party: 'rep',
                    },
                    {
                        text: 'Tax Plan',
                        tag: 'Economy',
                        link: 'https://www.donaldjtrump.com/policies/tax-plan/',
                        count: wordCount.economy.economy_taxplan,
                        party: 'rep',
                    },
                    {
                        text: 'Trade',
                        tag: 'Economy',
                        link: 'https://www.donaldjtrump.com/policies/tax-plan/',
                        count: wordCount.economy.economy_trade,
                        party: 'rep',
                    }
                ]
            },
            {
                text: 'Education',
                count: wordCount.education.education,
                subTags: [
                    {
                        text: "Education",
                        tag: "Education",
                        link: "https://www.hillaryclinton.com/issues/college/",
                        count: wordCount.education.education,
                        party: 'dem',

                    },
                    {
                        text: "CampusSexualAssult",
                        tag: "Education",
                        link: "https://www.hillaryclinton.com/issues/campus-sexual-assault/",
                        count: wordCount.education.education_campus_sexual_assault,
                        party: 'dem',

                    },
                    {
                        text: "CollegeDebt",
                        tag: "Education",
                        link: "https://www.hillaryclinton.com/issues/college/",
                        count: wordCount.education.education_college_debt,
                        party: 'dem',

                    },
                    {
                        text: "EarlyChildhood",
                        tag: "Education",
                        link: "https://www.hillaryclinton.com/issues/early-childhood-education/",
                        count: wordCount.education.education_early_childhood,
                        party: 'dem',

                    },
                    {
                        text: "K-12Education",
                        tag: "Education",
                        link: "https://www.hillaryclinton.com/issues/k-12-education/",
                        count: wordCount.education.education_k_12,
                        party: 'dem',

                    },
                    {
                        text: "TechnologyInnovation",
                        tag: "Education",
                        link: "https://www.hillaryclinton.com/issues/technology-and-innovation/",
                        count: wordCount.education.education_technology_and_innovation,
                        party: 'dem',

                    },
                    {
                        text: 'Education',
                        tag: 'Education',
                        link: 'https://www.donaldjtrump.com/policies/education/',
                        count: wordCount.education.education,
                        party: 'rep',
                    }
                ]
            },
            {
                text: "Enviroment",
                count: wordCount.environment.environment,
                subTags: [
                    {
                        text: "Enviroment",
                        tag: "Enviroment",
                        link: "https://www.hillaryclinton.com/issues/climate/",
                        count: wordCount.environment.environment,
                        party: 'dem',

                    },
                    {
                        text: "ClimateChange",
                        tag: "Enviroment",
                        link: "https://www.hillaryclinton.com/issues/climate/",
                        count: wordCount.environment.environment_climate_change,
                        party: 'dem',

                    },
                    { 
                        text: "ProtectingAnimals&Wildlife",
                        tag: "Enviroment",
                        link: "https://www.hillaryclinton.com/issues/protecting-animals-and-wildlife/",
                        count: wordCount.environment.environment_protecting_animals_and_wildlife,
                        party: 'dem',

                    },
                    { 
                        text: "RuralCommunities",
                        tag: "Enviroment",
                        link: "https://www.hillaryclinton.com/issues/rural-communities/",
                        count: wordCount.environment.environment_rural_communities,
                        party: 'dem',

                    },
                    {
                        text: 'Energy',
                        tag: 'Enviroment',
                        link: 'https://www.donaldjtrump.com/policies/energy/',
                        count: wordCount.environment.environment_energy,
                        party: 'rep',
                    },
                    {
                         text: 'Enviroment',
                         link: 'https://www.donaldjtrump.com/policies/energy/',
                         count: wordCount.environment.environment,
                         party: 'rep',
                    }
                ]
            },
            {
              text: "Equality",
              count: wordCount.equality.equality,
              subTags:[
                  {
                      text:"Equality",
                      tag:"Equality",
                      link:"https://www.hillaryclinton.com/issues/racial-justice/",
                      count: wordCount.equality.equality,
                      party: 'dem',
                  },
                  {
                      text:"CampaignFinanceReform",
                      tag:"Equality",
                      link:"https://www.hillaryclinton.com/issues/campaign-finance-reform/",
                      count: wordCount.equality.equality_campaign_finance_reform,
                      party: 'dem',
                  },
                  {
                      text:"CriminalJusticeReform",
                      tag:"Equality",
                      link:"https://www.hillaryclinton.com/issues/criminal-justice-reform/",
                      count: wordCount.equality.equality_criminal_justice_reform,
                      party: 'dem',
                  },
                  {
                      text:"ImmigrationReform",
                      tag:"Equality",
                      link:"https://www.hillaryclinton.com/issues/immigration-reform/",
                      count: wordCount.equality.equality_immigration_reform,
                      party: 'dem',
                  },
                  {
                      text:"LFBTEquality",
                      tag:"Equality",
                      link:"https://www.hillaryclinton.com/issues/lgbt-equality/",
                      count: wordCount.equality.equality_lgbt_rights_and_equality,
                      party: 'dem',
                  },
                  {
                      text:"RacialJustice",
                      tag:"Equality",
                      link:"https://www.hillaryclinton.com/issues/racial-justice/",
                      count: wordCount.equality.equality_racial_justice,
                      party: 'dem',
                  },
                  {
                      text:"VotingRights",
                      tag:"Equality",
                      link:"https://www.hillaryclinton.com/issues/voting-rights/",
                      count: wordCount.equality.equality_voting_rights,
                      party: 'dem',
                  },
                  {
                      text:"WomanRightsAndOpportunity",
                      tag:"Equality",
                      link:"https://www.hillaryclinton.com/issues/womens-rights-and-opportunity/",
                      count: wordCount.equality.equality_womens_rights_and_opportunity,
                      party: 'dem',
                  },
                  {
                      text: 'Equality',
                      link: 'https://www.donaldjtrump.com/policies/immigration/',
                      count: wordCount.equality.equality,
                      party: 'rep',
                  },
                  {
                      text: 'Veterans Affaris Reform',
                      tag: 'equality',
                      link: 'https://www.donaldjtrump.com/policies/veterans-affairs-reform/',
                      count: wordCount.jobs.jobs_veterans_the_armed_forces_and_their_families,
                      party: 'rep',
                  },
                  {
                      text: 'Consititution and Second Amendment',
                      tag: 'Equality',
                      link: 'https://www.donaldjtrump.com/policies/constitution-and-second-amendment/',
                      count: wordCount.equality.equality_gun_contrl,
                      party: 'rep',
                  }
                ]
            },
            {
              text: "Health",
              count: wordCount.health.health,
              subTags: [
                  {
                      text:"Health",
                      link:"https://www.hillaryclinton.com/issues/health-care/",
                      count: wordCount.health.health,
                      party: 'dem',
                  },
                  {
                      text:"AddictionAndSubstanceUse",
                      tag:"Health",
                      link:"https://www.hillaryclinton.com/issues/addiction/",
                      count: wordCount.health.health_addiction_and_substance_use,
                      party: 'dem',
                  },
                  {
                      text:"EndToAlzheimers",
                      tag:"Health",
                      link:"https://www.hillaryclinton.com/issues/alzheimers-disease/",
                      count: wordCount.health.health_an_end_to_alzheimers,
                      party: 'dem',
                  },
                  {
                      text:"Autism",
                      tag:"Health",
                      link:"https://www.hillaryclinton.com/issues/autism/",
                      count: wordCount.health.health_autism,
                      party: 'dem',
                  },
                  {
                      text:"DisabilityRights",
                      tag:"Health",
                      link:"https://www.hillaryclinton.com/issues/disability-rights/",
                      count: wordCount.health.health_disability_rights,
                      party: 'dem',
                  },
                  {
                      text:"HealthCare",
                      tag:"Health",
                      link:"https://www.hillaryclinton.com/issues/health-care/",
                      count: wordCount.health.health_care,
                      party: 'dem',
                  },
                  {
                      text:"HivAndAids",
                      tag: "Health",
                      link:'https://www.hillaryclinton.com/issues/fighting-hiv-and-aids/',
                      count: wordCount.health.health_hiv_and_aids,
                      party: 'dem',
                  },
                  {
                      text: 'Child Care',
                      tag: 'Health',
                      link : 'https://www.donaldjtrump.com/policies/child-care/',
                      count: wordCount.health.health_child_care,
                      party: 'rep',
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
                        party: 'dem',
                    },
                    {
                        text:"PaidLeave",
                        tag:"Jobs",
                        link:"https://www.hillaryclinton.com/issues/paid-leave/",
                        count: wordCount.jobs.jobs_paid_family_and_medical_leave,
                        party: 'dem',
                    },
                    {
                        text:"LaborWorkerRights",
                        tag:"Jobs",
                        link:"https://www.hillaryclinton.com/issues/labor/",
                        count: wordCount.jobs.jobs_labor_and_workers_rights,
                        party: 'dem',
                    },
                    {
                        text:"Veterans",
                        tag:"Jobs",
                        link:"https://www.hillaryclinton.com/issues/veterans/",
                        count: wordCount.jobs.jobs_veterans_the_armed_forces_and_their_families,
                        party: 'dem',
                    },
                    {
                        text:"Wages",
                        tag:"Jobs",
                        link:"https://www.hillaryclinton.com/issues/wages/",
                        count: wordCount.jobs.jobs_wages,
                        party: 'dem',
                    },
                    {
                        text:"WorkForceAndSkills",
                        tag:"Jobs",
                        link:"https://www.hillaryclinton.com/issues/workforce-and-skills/",
                        count: wordCount.jobs.jobs_workforce_skills_and_jobs_training,
                        party: 'dem',
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
                      party: 'dem',

                  },
                  {
                      text:"CombatingTerrorism",
                      tag:"Security",
                      link:"https://www.hillaryclinton.com/issues/combating-terrorism",
                      count: wordCount.security.security_combating_terrorism,
                      party: 'dem',

                  },
                  {
                      text:"GunViolencePrevention",
                      tag:"Security",
                      link:"https://www.hillaryclinton.com/issues/gun-violence-prevention/",
                      count: wordCount.security.security_gun_violence,
                      party: 'dem',

                  },
                  {
                      text:"MilitaryAndDefense",
                      tag:"Security",
                      link:"https://www.hillaryclinton.com/issues/military-and-defense/",
                      count: wordCount.security.security_miliary_and_defense,
                      party: 'dem',

                  },
                  {
                      text:"NationalSecurity",
                      tag:"Security",
                      link:"https://www.hillaryclinton.com/issues/national-security/",
                      count: wordCount.security.security_national_security,
                      party: 'dem',

                  },
                  {
                      text: 'Foreign Policy and Defeating ISIS',
                      tag: 'Security',
                      link: 'https://www.donaldjtrump.com/policies/foreign-policy-and-defeating-isis/',
                      count: wordCount.security.security_foreign_policy,
                      party: 'rep',
                  },
                  {
                      text: 'Security',
                      link: 'https://www.donaldjtrump.com/policies/national-defense/',
                      party: 'rep',
                      count: wordCount.security.security_national_security,
                  }
              ]
            }
        ];
        return presidentail;
    } else if (type == 'Florida Senate') {
        const senate = [
            {
                text: 'Education',
                count: wordCount.education.education,
                subTags: [
                    {
                        text: 'CommonCore',
                        link: 'https://marcorubio.com/2016/08/01/common-core/',
                        count: wordCount.education.edcatuion_common_core,
                        party: 'rep'
                    },
                    {
                        text: "ImprovingEducation",
                        link:"https://www.murphyforflorida.com/vision/improving-education/",
                        count: wordCount.improving_education,
                        party: 'dem',
                    }
                ]
            },
            {
                text: 'Economy',
                count: wordCount.economy.economy,
                subTags:[
                    {
                        text: 'FarmersAndRanchers',
                        count: wordCount.economy.economy_farmers_ranchers,
                        party: 'rep',
                        link: 'https://marcorubio.com/2016/07/20/repeal-burdensome-regulations-on-farmers-and-ranchers/',
                    },
                    {
                        text: 'CampaignFinanceReform',
                        link: 'https://www.murphyforflorida.com/vision/campaign-finance-reform/',
                        count: wordCount.economy_wall_street_reform,
                        party: 'dem',
                    }
                ]
            },
            {
                text: 'Enviroment',
                count: wordCount.environment.environment,
                subTags: [
                    {
                        text: 'WaterProblemsWaterSolutions',
                        count: wordCount.environment.environment_our_enviroment,
                        party: 'rep',
                        link: 'https://marcorubio.com/2016/07/27/water-problems-water-solutions/',

                    },
                    {
                        text: 'OurEnviroment',
                        link:"https://www.murphyforflorida.com/vision/our-environment/",
                        count: wordCount.environment_our_environment,
                        party: 'dem',
                    }
                ]
            },
            {
                text: 'Equality',
                count: wordCount.equality.equality,
                subTags: [
                    {
                        text: 'AmericanSoilders',
                        link: 'https://marcorubio.com/2016/07/20/1487/',
                        count: wordCount.equality.equality_seniors,
                        party: 'rep',
                    },
                    {
                        text: 'ProtectingVotingRights',
                        party: 'dem',
                        link: 'https://www.murphyforflorida.com/vision/protecting-voting-rights/',
                        count: wordCount.equality_voting_rights
                    },
                    {
                        text: 'CriminalJusticeReform',
                        party: 'dem',
                        link: 'https://www.murphyforflorida.com/vision/criminal-justice-reform/',
                        count: wordCount.equality_criminal_justice_reform
                    },
                    {
                        text: 'LGBT Equality',
                        party: 'dem',
                        link: 'https://www.murphyforflorida.com/vision/lgbt-equality/',
                        count: wordCount.equality_lgbt_rights_and_equality
                    },
                    {
                        text: 'Standing with Israel',
                        party: 'dem',
                        link: 'https://www.murphyforflorida.com/vision/standing-with-israel/',
                        count: wordCount.security_national_security
                    }
                ]
            },
            {
                text: 'Health',
                count: wordCount.health.health,
                subTags: [
                    {
                      text: 'HealthCare',
                      link:"https://marcorubio.com/2016/08/01/healthcare/",
                      count: wordCount.health.healthcare,
                      party: 'rep',

                    },
                    {
                        text:"Protecting Womens Healthcare",
                        party: 'dem',
                        link:"https://www.murphyforflorida.com/vision/protecting-womens-healthcare/",
                        count: wordCount.equality_womens_rights_and_opportunity
                    }
                ]
            },
            {
                text: 'Security',
                count: wordCount.security.security,
                subTags: [
                    {
                        text: 'Immigration',
                        link:"https://marcorubio.com/2016/08/01/immigration/",
                        count: wordCount.equality_immigration_reform,
                        party: 'rep',

                    }
                ]
            }
        ];
        return senate;
    } else if (type == 'County Commissioner') {
        const ohio = [
            {
                text: 'Education',
                count: wordCount.education.education,
                subTags:[
                    {
                        text: 'AttainmnetOfEducation',
                        link: 'http://www.debbielieberman.com/attainment_of_education',
                        count: wordCount.education.education_attainment,
                        party: 'dem',
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
                        party: 'dem'
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
                        party: 'dem'
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
                      party: 'dem',
                  }
              ]
            }
        ];
        return ohio;
    }
}

export function tagSetup(wordCount, race) {
  if (wordCount == undefined) {
    console.log('shit hit the fan')
  }else {

      let tags = getTags(race, wordCount);

      const tempTags = tags.filter(removeZero);

      for (let x = 0; x< tempTags.length; x++) {
          let filterdTags = tempTags[x].subTags.filter(removeZero)
          tempTags[x].subTags = filterdTags
      }
      tags = tempTags.filter(removeZeroSub);
      tags = tags.sort( sortInt );
      return tags;
    }
}








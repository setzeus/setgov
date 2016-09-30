// chrome.runtime.sendMessage({
// 	action: 'getKeyWordsFromPage',
// 	source: textNodes(),
// 	test: 'TEST'
// })

var port = chrome.runtime.connect({name: 'getKeyWordsFromPage'});
port.onMessage.addListener(function(message,sender){
  var race = message.race
  port.postMessage({ message: textNodes(race)});
});


function textNodes(race){
  console.log(race)
  var textArray = [];

  var textInHtml = document.body.innerText;

  var body = document.body.getElementsByTagName('div');
  var length = body.length;

  var splitText = textInHtml.split(' ');
  
  var demName 
  var repName 

  if(race === "Presidential"){
    console.log('Presidential went off')
    var wordCount = {

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
        equality_gun_contrl: 0,

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

    for(var q = 0;q < splitText.length; q++){
      var currentText = splitText[q]

      //start Economy 
      if(currentText.match(/^(tax|taxes|Tax|Taxes)$/)){
        wordCount.economy++
        wordCount.economy_a_fair_tax_system++
      }
      if(currentText.match(/^(infrastructure|Infrastructure|roads)$/)){
        wordCount.economy++
        wordCount.economy_fixing_americas_infrastructure++
      }
      if(currentText.match(/^(manufacturing|Manufacturing|factories)$/)){
        wordCount.economy++
        wordCount.economy_manufacturing++
      }
      if(currentText.match(/^(small\sbusiness|Small\sBusiness|entrepreneur|entrepreneurs|startup|startups)$/)){
        wordCount.economy++
        wordCount.economy_small_business++
      }
      if(currentText.match(/^(social\ssecurity|Social\sSecurity|medicare|Medicare)$/)){
        wordCount.economy++
        wordCount.economy_social_security_and_medicare++
      }
      if(currentText.match(/^(wall\sstreet|Wall\sStreet)$/)){
        wordCount.economy++
        wordCount.economy_wall_street_reform++
      }
      if(currentText.match(/^(economy|Economy)$/)){
        wordCount.economy++
        wordCount.economy_works_for_everyone++
      }
      if(currentText.match(/^(industry|business|regulations|americans|working)$/)){
        wordCount.economy++
        wordCount.economy_regulation++
      }
      if(currentText.match(/^(tax|rich|pay|money|Tax|business|)$/)){
        wordCount.economy++
        wordCount.economy_taxplan++
      }
      if(currentText.match(/^(fair|trade|Trade|trans|NAFTA|free|power)$/)){
        wordCount.economy++
        wordCount.economy_trade++
      }

      //start Education 
      if(currentText.match(/^(campus|Campus|College|college\scampus|sexual\sassault)$/)){
        wordCount.education++
        wordCount.education_campus_sexual_assault++
      }
      if(currentText.match(/^(college\sdebt|College\sDebt|student\sloans|college\scampus|Student\sLoans)$/)){
        wordCount.education++
        wordCount.education_college_debt++
      }
      if(currentText.match(/^(childhood|early\schildhood|child|children)$/)){
        wordCount.education++
        wordCount.education_early_childhood++
      }
      if(currentText.match(/^(campus|Campus|College|college\scampus|sexual\sassault)$/)){
        wordCount.education++
        wordCount.education_k_12++
      }
      if(currentText.match(/^(tech|Tech|technology|Technology|innovation)$/)){
        wordCount.education++
        wordCount.education_technology_and_innovation++
      }

      //start environment
      if(currentText.match(/^(climate|Climate|climate\schange|Climate\sChange)$/)){
        wordCount.environment++
        wordCount.environment_climate_change++
      }
      if(currentText.match(/^(animals|animal\srights|Animals|wildlife|Wildlife|Animal\sRights)$/)){
        wordCount.environment++
        wordCount.environment_protecting_animals_and_wildlife++
      }
      if(currentText.match(/^(rural|rural\scommunities|Rural|Rural\sCommunities)$/)){
        wordCount.environment++
        wordCount.environment_rural_communities++
      }
      if(currentText.match(/^(energy|jobs|clean|air|coal|reserves|)$/)){
        wordCount.environment++
        wordCount.environment_energy++
      }

      //start Equality
      if(currentText.match(/^(campaign\sfinance|campaign\sfinancing|Campaign\sFinancing|Campaign\sFinance|donation|donations)$/)){
        wordCount.equality++
        wordCount.equality_campaign_finance_reform++
      }
      if(currentText.match(/^(criminal\sjustice|criminal\sjustice\ssystem|Criminal\sJustice|jail\stime)$/)){
        wordCount.equality++
        wordCount.equality_criminal_justice_reform++
      }
      if(currentText.match(/^(immigration\sreform|Immigration\sreform|immigrants|illegal\simmigration|border|wall)$/)){
        wordCount.equality++
        wordCount.equality_immigration_reform++
      }
      if(currentText.match(/^(lgbt|LGBT|lgbt\srights|lgbt\sequality)$/)){
        wordCount.equality++
        wordCount.equality_lgbt_rights_and_equality++
      }
      if(currentText.match(/^(racism|Racist|Racism|racial\sjustice|affirmative\saction)$/)){
        wordCount.equality++
        wordCount.equality_racial_justice++
      }
      if(currentText.match(/^(voting|voting\sprocess|voting\srights|Voting|delegates|Delegates|superdelegates|Superdelegates)$/)){
        wordCount.equality++
        wordCount.equality_voting_rights++
      }
      if(currentText.match(/^(Women|women|womens\srights|women\sequality)$/)){
        wordCount.equality++
        wordCount.equality_womens_rights_and_opportunity++
      }
      if(currentText.match(/^(Guns|guns|arms|Arms|right|constitution|war|weapons)$/)){
        wordCount.equality++
        wordCount.equality_gun_contrl
      }

      //start Health
      if(currentText.match(/^(addiction|substance\sabuse|Addiction|substance\suse|Substance\suse)$/)){
        wordCount.health++
        wordCount.health_addiction_and_substance_use++
      }
      if(currentText.match(/^(alzheimers|Alzheimers|Alzheimers\sresearch|alzheimers\sresearch)$/)){
        wordCount.health++
        wordCount.health_an_end_to_alzheimers++
      }
      if(currentText.match(/^(autism|autistic|Autistic|Autism)$/)){
        wordCount.health++
        wordCount.health_autism++
      }
      if(currentText.match(/^(disable|disability|Disable|Disability)$/)){
        wordCount.health++
        wordCount.health_disability_rights++
      }
      if(currentText.match(/^(health\scare|Health\scare|Health|health|obamacare|Obamacare)$/)){
        wordCount.health++
        wordCount.health_health_care++
      }
      if(currentText.match(/^(hiv|HIV|aids|AIDS)$/)){
        wordCount.health++
        wordCount.health_hiv_and_aids++
      }
      if(currentText.match(/^(parents|child|care|family)$/)){
        wordCount.health++
        wordCount.health_child_care++
      }

      //start Jobs
      if(currentText.match(/^(labor|Labor|labor\srights|Labor\srights|unions|worker)$/)){
        wordCount.jobs++
        wordCount.jobs_labor_and_workers_rights++
      }
      if(currentText.match(/^(maternity|Maternity|maternity\sleave|Maternity\sleave)$/)){
        wordCount.jobs++
        wordCount.jobs_paid_family_and_medical_leave++
      }
      if(currentText.match(/^(Vets|vets|Veterans|veterans|veteran|armed\sforces|army|Army)$/)){
        wordCount.jobs++
        wordCount.jobs_veterans_the_armed_forces_and_their_families
      }
      if(currentText.match(/^(wages|Wages|minimum\swage|salary|Salary|salaries)$/)){
        wordCount.jobs++
        wordCount.jobs_wages++
      }
      if(currentText.match(/^(workforce|Workforce|skills|Skills|training|skills\straining)$/)){
        wordCount.jobs++
        wordCount.jobs_workforce_skills_and_jobs_training++
      } 


      //start Security
      if(currentText.match(/^(terrorist|Terrorist|isis|Isis|ISIS|terrorism)$/)){
        wordCount.security++
        wordCount.security_combating_terrorism++
      }
      if(currentText.match(/^(gun|Gun|guns|Guns|second\samendment|Second\samendment)$/)){
        wordCount.security++
        wordCount.security_gun_violence++
      }
      if(currentText.match(/^(military|Military|defense|Defense|national\sdefense)$/)){
        wordCount.security++
        wordCount.security_miliary_and_defense++
      }
      if(currentText.match(/^(national\ssecurity|security|Security|secure|safe|Safe)$/)){
        wordCount.security++
        wordCount.security_national_security++
      }
      if(currentText.match(/^(peace|foregin|policy|world|military|ISIS|Islam)$/)){
        wordCount.security++
        wordCount.security_foreign_policy++
      }
      //tbd
      if(currentText.match(/^(tech|startup|internet|online)$/)){
        wordCount.tech++
      }
    }
    demName = 'H Clinton'
    var democratTags = [
      {
        text:"Economy", 
        link:"https://www.hillaryclinton.com/issues/an-economy-that-works-for-everyone/",
        count: wordCount.economy,
        subTags:[
          {
            text:"AFairTaxSystem",
            tag:"Economy",
            link:"https://www.hillaryclinton.com/issues/a-fair-tax-system/",
            count: wordCount.economy_a_fair_tax_system
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
    repName = 'D Trump'
    var republicanTags = [
      {
        text: 'Equality',
        link: 'https://www.donaldjtrump.com/policies/immigration/',
        count: wordCount.equality,
        subTags:[
          {
            text: 'Veterans Affaris Reform',
            tag: 'equality',
            link: 'https://www.donaldjtrump.com/policies/veterans-affairs-reform/',
            count: wordCount.jobs_veterans_the_armed_forces_and_their_families
          },
          {
            text: 'Consititution and Second Amendment',
            tag: 'Equality',
            link: 'https://www.donaldjtrump.com/policies/constitution-and-second-amendment/',
            count: wordCount.equality_gun_contrl
          }
        ]
      },

      {
        text: 'Economy',
        link: 'https://www.donaldjtrump.com/policies/economy/',
        count: wordCount.economy,
        subTags: [
          {
            text: 'Regulations',
            tag: 'Economy',
            link: 'https://www.donaldjtrump.com/policies/regulations/',
            count: wordCount.economy_regulation
          },
          {
            text: 'Tax Plan',
            tag: 'Economy',
            link: 'https://www.donaldjtrump.com/policies/tax-plan/',
            count: wordCount.economy_taxplan
          },
          {
            text: 'Trade',
            tag: 'Economy',
            link: 'https://www.donaldjtrump.com/policies/tax-plan/',
            count: wordCount.economy_trade
          }
        ]
      },
      {
        text: 'Security',
        link: 'https://www.donaldjtrump.com/policies/national-defense/',
        count: wordCount.security,
        subTags: [
          {
            text: 'Foreign Policy and Defeating ISIS',
            tag: 'Security',
            link: 'https://www.donaldjtrump.com/policies/foreign-policy-and-defeating-isis/',
            count: wordCount.security_foreign_policy
          }
        ]
      },
      {
        text: 'Enviroment',
        link: 'https://www.donaldjtrump.com/policies/energy/',
        count: wordCount.environment,
        subTags: [
          {
            text: 'Energy',
            tag: 'Enviroment',
            link: 'https://www.donaldjtrump.com/policies/energy/',
            count:  wordCount.environment_energy
          }
        ]
      },
      {
        text: 'Education',
        link: 'https://www.donaldjtrump.com/policies/education/',
        count: wordCount.education,
        subTags: [
          {
            text: 'Education',
            tag: 'Education',
            link: 'https://www.donaldjtrump.com/policies/education/',
            count: wordCount.education
          }
        ]
      },
      {
        text: 'Health',
        link : 'https://www.donaldjtrump.com/policies/child-care/',
        count: wordCount.health,
        subTags: [
          {
            text: 'Child Care',
            tag: 'Health',
            link : 'https://www.donaldjtrump.com/policies/child-care/',
            count: wordCount.health_child_care
          }
        ]
      }
    ]

    
  }else if(race === 'Florida'){
    var wordCount = {

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

    for(var q = 0;q < splitText.length; q++){
      var currentText = splitText[q]
      //start Economy 
      if(currentText.match(/^(campaign\sfinance|campaign\sfinancing|Campaign\sFinancing|Campaign\sFinance|donation|donations)$/)){

        wordCount.economy++
        wordCount.economy_wall_street_reform++
      }
      if(currentText.match(/^(food\sfarm|Foodl\swater|Water|rain|Rain)$/)){
        wordCount.economy++
        wordCount.economy_farmers_ranchers++
      }
      //start Education 
      if(currentText.match(/^(state|parents|local|school|board|Education)$/)){
        wordCount.education++
        wordCount.education_common_core++
      }
      if(currentText.match(/^(state|parents|local|school|board|Education)$/)){
        wordCount.education++
        wordCount.education_improving_education
      }
      //start environment
      if(currentText.match(/^(state|green|Everglades|Florida|climate)$/)){
        wordCount.environment++
        wordCount.environment_our_environment++
      }
      //start Equality
      if(currentText.match(/^(criminal\sjustice|criminal\sjustice\ssystem|Criminal\sJustice|jail\stime)$/)){
        wordCount.equality++
        wordCount.equality_criminal_justice_reform++
      }
      if(currentText.match(/^(immigration\sreform|Immigration\sreform|immigrants|illegal\simmigration|border|wall)$/)){
        wordCount.equality++
        wordCount.equality_immigration_reform++
      }
      if(currentText.match(/^(lgbt|LGBT|lgbt\srights|lgbt\sequality)$/)){
        wordCount.equality++
        wordCount.equality_lgbt_rights_and_equality++
      }
      if(currentText.match(/^(voting|voting\sprocess|voting\srights|Voting|delegates|Delegates|superdelegates|Superdelegates)$/)){
        wordCount.equality++
        wordCount.equality_voting_rights++
      }
      if(currentText.match(/^(Women|women|womens\srights|women\sequality)$/)){
        wordCount.equality++
        wordCount.equality_womens_rights_and_opportunity++
      }
      if(currentText.match(/^(senior\scitizens|citizens|Medicare|Obamcare|Social\sSecurity)$/)){
        wordCount.equality++
        wordCount.equality_seniors++
      }
      //start Health
      if(currentText.match(/^(Obamacare)$/)){
        wordCount.health++
        wordCount.healthcare++
      }
      //start Jobs
      //start Security
      if(currentText.match(/^(national\ssecurity|security|Security|secure|safe|Safe)$/)){
        wordCount.security++
        wordCount.security_national_security++
      }
      //tbd
      if(currentText.match(/^(tech|startup|internet|online)$/)){
        wordCount.tech++
      }
    }

    repName = "M Rubio";
    var republicanTags = [

      {
        text:"Economy", 
        link:"https://marcorubio.com/2016/07/20/repeal-burdensome-regulations-on-farmers-and-ranchers/",
        count: wordCount.economy,
        subTags:[ 
          {
              text: 'Farmers and Ranchers',
              tag: 'Economy',
              link: 'https://marcorubio.com/2016/07/20/repeal-burdensome-regulations-on-farmers-and-ranchers/',
              count:  wordCount.economy_farmers_ranchers
          } 
        ]
      },
      {
        text:"Education",
        link:"https://marcorubio.com/2016/08/01/common-core/",
        count: wordCount.education,
        subTags:[ 
      {
              text: 'Common Core',
              tag: 'Education',
              link: 'https://marcorubio.com/2016/08/01/common-core/',
              count:  wordCount.education_common_core
          }           
        ]
      }, 
      {
        text:"Enviroment",
        link:"https://marcorubio.com/2016/08/01/energy/",
        count: wordCount.environment,
        subTags:[
          {
            text: ' Water Problems Water Solutions',
            tag: 'Enviroment',
            link: 'https://marcorubio.com/2016/07/27/water-problems-water-solutions/',
            count:  wordCount.environment_our_environment
          }
        
        ]
      },
      {
        text:"Equality",
        link:"https://marcorubio.com/2016/08/01/strong-families/",
        count: wordCount.equality,
        subTags:[
          {
            text: 'American Seniors',
            tag: 'Equality',
            link: 'https://marcorubio.com/2016/07/20/1487/',
            count: wordCount.equality_seniors

          }
        ]
      },
      {
        text:"Health",
        link:"https://marcorubio.com/2016/08/01/healthcare/",
        count: wordCount.health,
        subTags:[ 
          {
            text: 'Healthcare',
            tag: 'Health',
            link:"https://marcorubio.com/2016/08/01/healthcare/",
            count: wordCount.healthcare

          }
        ]
      },
      {
        text:"Jobs",
        link:"https://cdn.meme.am/instances/500x/55176660.jpg",
        count: wordCount.jobs,
        subTags:[
          {
      
          }
        ]
      },
      {
        text:"Security", 
        link:"https://marcorubio.com/2016/08/01/terrorism/",
        count: wordCount.security,
        subTags:[
          {
            text:"Immigration",
            tag:"Security",
            link:"https://marcorubio.com/2016/08/01/immigration/",
            count: wordCount.equality_immigration_reform
          }
         
        ]
      },
      {
        text:"Tech", 
        link:"https://cdn.meme.am/instances/500x/55176660.jpg",
        count: wordCount.tech,
        
      }
    ]
    demName = 'P Murphy'
    var  democratTags = [
        {
          text:"Economy", 
          link:"https://www.murphyforflorida.com/vision/growing-middle-class/",  //Need to turn this into own subtag
          count: wordCount.economy,
          subTags:[
            {
              text: 'Campaign Finance Reform',
              tag: 'Economy',
              link: 'https://www.murphyforflorida.com/vision/campaign-finance-reform/',
              count: wordCount.economy_wall_street_reform
            }
          ]
        }, 
        {
          text:"Education",
          link:"https://www.murphyforflorida.com/vision/improving-education/",
          count: wordCount.education,
          subTags:[
            {
              text: "Improving Education",
              tag: 'Education',
              link:"https://www.murphyforflorida.com/vision/improving-education/",
              count: wordCount.improving_education
            }
          ]
        }, 
        {
          text:"Enviroment",
          link:"https://www.murphyforflorida.com/vision/our-environment/",
          count: wordCount.environment,
          subTags:[
            {
              text: 'Our Enviroment',
              tag: 'Enviroment',
              link:"https://www.murphyforflorida.com/vision/our-environment/",
              count: wordCount.environment_our_environment
            }
          ]
        },
        {
          text:"Equality",
          link:"https://www.murphyforflorida.com/vision/immigration-reform/",
          count: wordCount.equality,
          subTags:[
            {
              text: 'Protecting Voting Rights',
              tag: 'Equality',
              link: 'https://www.murphyforflorida.com/vision/protecting-voting-rights/',
              count: wordCount.equality_voting_rights
            },
            {
              text: 'Criminal Justice Reform',
              tag: 'Equality',
              link: 'https://www.murphyforflorida.com/vision/criminal-justice-reform/',
              count: wordCount.equality_criminal_justice_reform
            },
            {
              text: 'LGBT Equality',
              tag: 'Equality',
              link: 'https://www.murphyforflorida.com/vision/lgbt-equality/',
              count: wordCount.equality_lgbt_rights_and_equality
            },
            {
              text: 'Standing with Israel',
              tag: 'Equality',
              link: 'https://www.murphyforflorida.com/vision/standing-with-israel/',
              count: wordCount.security_national_security
            }
          ]
        },
        {
          text:"Health",
          link:"https://www.murphyforflorida.com/vision/social-security-and-medicare/",
          count: wordCount.health,
          subTags:[
            {
              text:"Protecting Womens Healthcare",
              tag:"Health",
              link:"https://www.murphyforflorida.com/vision/protecting-womens-healthcare/",
              count: wordCount.equality_womens_rights_and_opportunity
            }
          
          ]
        },
        {
          text:"Jobs",
          link:"https://cdn.meme.am/instances/500x/55176660.jpg",
          count: wordCount.jobs,
          subTags:[
            
          ]
        },
        {
          text:"Security", 
          link:"https://www.murphyforflorida.com/vision/protecting-our-nation/",
          count: wordCount.security,
          subTags:[
           
          ]
        },
        {
          text:"Tech", 
          link:"https://cdn.meme.am/instances/500x/55176660.jpg",
          count: wordCount.tech,
          
        }
    ]  
  }
    
    var unsortedRebulican = republicanTags.filter(function(map){
      if(map.count > 0){
        return map
      }
    });

    var unsortedMatchedDemocrat = democratTags.filter(function(map){
      if(map.count > 0){
        return map
      }
    });

    function sortInt(a,b) {
      return  b.count - a.count;
    }

    //End of the sort functions 
    var rebulican = unsortedRebulican.sort(sortInt);
    var democrat = unsortedMatchedDemocrat.sort(sortInt);

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

    var rebulicanResult = rebulican.filter(checkSubtag);
    var rebulicanFiltered = rebulicanResult.filter(checkSubtagCount);
    rebulicanFiltered.unshift({name : repName});

    var democratResult = democrat.filter(checkSubtag);
    var democratFiltered = democratResult.filter(checkSubtagCount);
    democratFiltered.unshift({name : demName});
    var data = [rebulicanFiltered,democratFiltered];

    return data
}


















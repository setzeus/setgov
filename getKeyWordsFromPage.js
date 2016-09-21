chrome.runtime.sendMessage({
	action: 'getKeyWordsFromPage',
	source: textNodes(),
	test: 'TEST'
})

function textNodes(){
	var textArray = [];

	//get all the text of the body of the page currently on 
	var textInHtml = document.body.innerText;
	var splitText = textInHtml.split(' ');
	
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

	var rubioData = [
      {
        text:"Economy", 
        link:"https://marcorubio.com/2016/07/20/repeal-burdensome-regulations-on-farmers-and-ranchers/",
        count: wordCount.economy,
        subTags:[ 
        	{
	            text: 'Farmers and Ranchers',
	            tag: 'Economy',
	            link: 'https://marcorubio.com/2016/07/20/repeal-burdensome-regulations-on-farmers-and-ranchers/',
	            count: 	wordCount.economy_farmers_ranchers
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
	            count: 	wordCount.education_common_core
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
            count: 	wordCount.environment_our_environment
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
  var  murphyData = [
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

	var unsortedMatchedRubio = rubioData.filter(function(map){
	    if(map.count > 0){
	      return map
	    }
	  });

	var unsortedMatchedMurphy = murphyData.filter(function(map){
	    if(map.count > 0){
	      return map
	    }
	  });

	function sortInt(a,b) {
	  return  b.count - a.count;
	}

	  //End of the sort functions 
	var rubio = unsortedMatchedRubio.sort(sortInt);
	var murphy = unsortedMatchedMurphy.sort(sortInt);
	var data = [rubio,murphy];

	return data
}


















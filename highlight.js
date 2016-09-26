
var body = document.body.getElementsByTagName('div');

var length = body.length;

for(var t=0;t<length ; t++){
    var currentDiv = body[t].innerHTML;
    
    var keyItems = [ 
    	"campaign",
    	"finance",
    	"campaign",
    	"financing",
    	"Campaign",
    	"donation",
    	"Finance",
    	"donation",
    	"donations",
    	"food",
    	"water",
    	"Water",
    	'rain',
    	'Rain',
    	'state',
    	'parents',
    	'local',
    	'school',
    	'board',
    	'Education',
    	'state',
    	'green',
    	'Everglades',
    	'Florida',
    	'climate',
    	'criminal',
    	'justice',
    	'justices',
    	'Criminal',
    	'justices',
    	'jail',
    	'time',
    	'immigration',
    	'reform',
    	'Immigration',
    	'reform',
    	'immigrants',
    	'illegal',
    	'border',
    	'wall',
    	'lgbt',
    	'LGBT',
    	'rights',
    	'equality',
    	'voting',
    	'process',
    	'voting',
    	'rights',
    	'delegates',
    	'women',
    	'Women',
    	'equality',
    	'senior',
    	'citizens',
    	'Medicare',
    	'Obamacare',
    	'Social',
    	'Security',
    	'national']

   	for(var z=0;z<keyItems.length;z++){
   		

   		if(body[t].innerText.match(keyItems[z])){
   			console.log(`<span style="background-color:#313542; color: white" >`+keyItems[z]+`</span>`);
   			console.log('<span style="background-color:#313542;color:white;">Finance</span>');
   			console.log(new RegExp(keyItems[z],'g'))
   			console.log(/donation/g)
   			currentDiv = currentDiv.replace(new RegExp(keyItems[z],'g'), '<span style="background-color:#313542;color:white;">Finance</span>');
    	 body[t].innerHTML = currentDiv
    	}

   	}



 //    if(body[t].innerText.match('Finance')){
 //   		currentDiv = currentDiv.replace(/Finance/g,'<span style="background-color:#313542;color:white;">Finance</span>');
 //    }
 //    if(body[t].innerText.match('donation')){
 //   		currentDiv = currentDiv.replace(/donation/g,'<span style="background-color:#313542;color:white;">donation</span>');
 //    }
 //    if(body[t].innerText.match('donations')){
 //   		currentDiv = currentDiv.replace(/donations/g,'<span style="background-color:#313542;color:white;">donations</span>');
 //    }
 //    if(body[t].innerText.match('food')){
 //   		currentDiv = currentDiv.replace(/food/g,'<span style="background-color:#313542;color:white;">food</span>');
 //    }
 //    // if(body[t].innerText.match('')){
 //   	// 	currentDiv = currentDiv.replace(//g,'<span style="background-color:#313542;color:white;"></span>');
 //    // }
 //    if(body[t].innerText.match('food')){
 //   		currentDiv = currentDiv.replace(/food/g,'<span style="background-color:#313542;color:white;">food</span>');
 //    }
 //    if(body[t].innerText.match('farm')){
 //   		currentDiv = currentDiv.replace(/farm/g,'<span style="background-color:#313542;color:white;">farm</span>');
 //    }
 //    if(body[t].innerText.match('Foodl')){
 //   		currentDiv = currentDiv.replace(/Foodl/g,'<span style="background-color:#313542;color:white;">Foodl</span>');
 //    }
 //    if(body[t].innerText.match('water')){
 //   		currentDiv = currentDiv.replace(/water/g,'<span style="background-color:#313542;color:white;">water</span>');
 //    }
 //    if(body[t].innerText.match('Water')){
 //   		currentDiv = currentDiv.replace(/Water/g,'<span style="background-color:#313542;color:white;">Water</span>');
 //    }
 //    if(body[t].innerText.match('rain')){
 //   		currentDiv = currentDiv.replace(/rain/g,'<span style="background-color:#313542;color:white;">rain</span>');
 //    }
 //    if(body[t].innerText.match('Rain')){
 //   		currentDiv = currentDiv.replace(/Rain/g,'<span style="background-color:#313542;color:white;">Rain</span>');
 //    }

 //    if(body[t].innerText.match('state')){
 //   		currentDiv = currentDiv.replace(/state/g,'<span style="background-color:#313542;color:white;">state</span>');
 //    }

   



 //    if(body[t].innerText.match('parents')){
 //   		currentDiv = currentDiv.replace(/parents/g,'<span style="background-color:#313542;color:white;">parents</span>');
 //    }
 //    if(body[t].innerText.match('local')){
 //   		currentDiv = currentDiv.replace(/local/g,'<span style="background-color:#313542;color:white;">local</span>');
 //    }


	// if(body[t].innerText.match('school')){
 //   		currentDiv = currentDiv.replace(/school/g,'<span style="background-color:#313542;color:white;">school</span>');
 //    }
 //    if(body[t].innerText.match('board')){
 //   		currentDiv = currentDiv.replace(/board/g,'<span style="background-color:#313542;color:white;">board</span>');
 //    }
 //     if(body[t].innerText.match('Education')){
 //   		currentDiv = currentDiv.replace(/Education/g,'<span style="background-color:#313542;color:white;">Education</span>');
 //    }

 //    if(body[t].innerText.match('green')){
 //   		currentDiv = currentDiv.replace(/green/g,'<span style="background-color:#313542;color:white;">green</span>');
 //    }
 //    if(body[t].innerText.match('Everglades')){
 //   		currentDiv = currentDiv.replace(/Everglades/g,'<span style="background-color:#313542;color:white;">Everglades</span>');
 //    }

 //    if(body[t].innerText.match('Florida')){
 //   		currentDiv = currentDiv.replace(/Florida/g,'<span style="background-color:#313542;color:white;">Florida</span>');
 //    }
 //    if(body[t].innerText.match('climate')){
 //   		currentDiv = currentDiv.replace(/climate/g,'<span style="background-color:#313542;color:white;">climate</span>');
 //    }

 //    if(body[t].innerText.match('')){
 //   		currentDiv = currentDiv.replace(//g,'<span style="background-color:#313542;color:white;"></span>');
 //    }

 //     if(body[t].innerText.match('criminal')){
 //   		currentDiv = currentDiv.replace(/criminal/g,'<span style="background-color:#313542;color:white;">criminal</span>')
 //    }

 //    if(body[t].innerText.match('justice')){
 //   		currentDiv = currentDiv.replace(/justice/g,'<span style="background-color:#313542;color:white;">justice</span>');
 //    }

 //    if(body[t].innerText.match('criminal')){
 //   		currentDiv = currentDiv.replace(/criminal/g,'<span style="background-color:#313542;color:white;">criminal</span>');
 //    }



    console.log(t)
      

     
  }
/////////////////////////////////////////////////////
//Going to hold whats sent from the background page//
/////////////////////////////////////////////////////
var race = "Presidential" ;
var party ;
var floridaDem ;
var floridaRep ;
var presidentialDem ;
var presidentialRep ;




///////////////////////////////////////
//Set the Local Storage for the Party//
///////////////////////////////////////
chrome.storage.local.set({ "Party": "Democrat" }, function(){
  party = 'Democrat';
  console.log('storage has been set')
});


//////////////////////////////////////////////
//Set THe Local Storage for the Type of Race//
//////////////////////////////////////////////
chrome.storage.local.set({'Race': 'Presidential'}, function(){
  race = 'Presidential';
  console.log('storage has been set to Presidential')
})



///////////////////////////////////////////////////////////////////
//Calls to highlight all the text in the currently focued webpage//
///////////////////////////////////////////////////////////////////
function send(){
  chrome.tabs.executeScript(null, {file: "highlight.js"});
}  







////////////////////////////////////////////////////////////////////
//Event Listener to change profile when candiate_switch is clicked//
////////////////////////////////////////////////////////////////////
document.getElementById("candidate_switch").addEventListener('click', checkColor);
  function checkColor(){
    var switch_color = document.getElementById("candidate_switch").className
    console.log(switch_color)
    console.log(race)
    if(race == "Presidential"){

       if (switch_color == " icon_container left red") {
        console.log('should switch to presidentialDem');
        adjustPopUp(presidentialDem, 'blue');
      } 
      if(switch_color == ' icon_container left blue'){
          console.log('should swtich to presidentialRep');
          adjustPopUp(presidentialRep, 'red');
      }
    }
    if(race == 'Floida'){
      if (switch_color== " icon_container left red") {
        console.log('should switch to floridaDem');
        adjustPopUp(floridaDem, 'blue');
      } 
      if(switch_color == ' icon_container left blue'){
        console.log('should switch to floridaRep')
        adjustPopUp(floridaRep, 'red');
      }
    }
   
}


function openNav(){
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav(){
  document.getElementById("myNav").style.width = "0%";
}
/////////////////////////////////
//Adjust popup.html accordingly//
/////////////////////////////////
function adjustPopUp(data, color){
  console.log(data)
  console.log(color)
  var sortedMatched = data;
  document.getElementById('electionPositions').innerHTML = ' ' ;
  document.getElementById('top_container_text').innerText = data[0].name

  var candidate_switch = document.getElementById('candidate_switch');

  if(color == 'red'){
    var base = ' red'
    var color = "red_color";
    var button = ' button_red';
    var colorHex = " #F44336";
    var lightPrim = " #00a4e4";
    var topBackground = " url('repub_logo.png')";
    var candidateLetter = " url('candidate_switch_red.png')";
    var candidateSwitch = " icon_container left red";
    var candiateIcon = " url('info_icon_red.png')"
    var redditIcon = " url('reddit_icon_red.png')";
    var logo = "url('repub_logo.png')";
  }
  if(color == 'blue'){
    var base = ' blue'
    var color = 'blue_color';
    var button = ' button_blue'
    var colorHex = " #1E88E5";
    var lightPrim = " #ef5350";
    var topBackground = " url('demo_logo.png')";
    var candidateLetter = " url('candidate_switch_blue.png')";
    var candidateSwitch = " icon_container left blue";
    var candiateIcon = " url('info_icon_blue.png')";
    var redditIcon = " url('reddit_icon_blue.png')";
    var logo = "url('demo_logo.png')";
  }

  document.getElementsByClassName('segment default')[0].style.backgroundColor = colorHex;
  document.getElementById('primary_calendar_icon').style.color = lightPrim;
  document.getElementById('general_calendar_icon').style.color = lightPrim;
  document.getElementById('vote_booths_icon').style.color = lightPrim;
  document.getElementById('top_background').style.backgroundImage = topBackground;


  candidate_switch.style.backgroundImage = candidateLetter;
  candidate_switch.className = candidateSwitch;
  document.getElementById('candidate_icon').style.backgroundImage = candiateIcon;
  document.getElementById('reddit_icon').style.backgroundImage = redditIcon;
  document.getElementById('title').style.borderColor = colorHex;
  document.getElementById('seg2').style.borderColor = colorHex;
  document.getElementById('top_background').style.backgroundImage = logo;
  document.getElementById('top_label_container').className = `icon_container left `+base+` `;
  document.getElementById('primary_calendar_icon').style.color = lightPrim;
  document.getElementById('general_calendar_icon').style.color = lightPrim;
  document.getElementById('vote_booths_icon').style.color = lightPrim;
  document.getElementsByClassName('segment_title')[0].className = `segment_title `+base+` `;
  document.getElementsByClassName('segment_body ')[0].className = `segment_body `+base+` `;
  document.getElementsByClassName('segment_container')[0].className = `segment_container `+base+` `;
  document.getElementsByClassName('segment_controller')[0].className = `segment_controller `+base+` `;


  var selectedsSegment = document.getElementsByClassName('segment default')[0].style.backgroundColor = colorHex;

  var top_body = document.getElementById('top_background');
  top_body.className = ` top_body` +base+` `;

  

  

  
  //d.className += " otherclass";
  //element.classList.add("otherclass");



  if (sortedMatched.length == 1) {
    var nada =  
      `<div class='nada_container'>`+
        `<p class='nada `+color+`'>Nothing election-related here! <br> Check another page?</p>`+
      `</div> `; 
    document.getElementById("electionPositions").insertAdjacentHTML("beforeend", nada);    

  }else{
    for(var i=1; i < sortedMatched.length ; i++){
      var subtagLength = sortedMatched[i].subTags.length;
    
      var resultDiv = 
        `<div class="result_container" id="`+sortedMatched[i].text+`Result">`+
          `<div class="row" id="`+sortedMatched[i].texts+`Row">`+
            `<div class='result_text'>`+
              `<p class='ampersand `+color+`' >
                #
              </p>`+
              `<p class='issue' id='tagText`+i+`'>`
                + sortedMatched[i].text + 
                `<i style="margin-left:5px;">`+
                  `(`+ sortedMatched[i].count+`)` +
                `</i>`+
              `</p>`+ 
            `</div>`+
            `<div class='button `+button+`' id='`+i+`Link'>`+
              `<a href='`+sortedMatched[i].link+`' target='_blank' style='width:35px;height:35px;'></a>`+
            `</div>` +
          `</div>`+
          `<div class='row_status' id='row_status_`+color+`'></div>`+
          `<div class='sub_row_container' id='`+sortedMatched[i].text+`_sub_container'>`+
          `</div>`+
        `</div>`;
            document.getElementById("electionPositions").insertAdjacentHTML("beforeend", resultDiv);    
      }

    for( var x=1; x<sortedMatched.length ; x++){
      for(var y=0;y<sortedMatched[x].subTags.length; y++){
        var subResultDiv = 
          `<div class='sub_row' id="`+sortedMatched[x].subTags[y].text+`SubRow">`+
            `<div class='sub_result_text' style="margin-left:15px;">`+
              `<p class='sub_amperand `+color+`'>#</p>`+
              `<p class='sub_text'>`+sortedMatched[x].subTags[y].text+
                  `<i style='margin-left:5px;'>`+
                    `(`+sortedMatched[x].subTags[y].count+`)` + 
                  `</i>`+
              `</p>` +
            `</div>`+   
              `<div class='sub_button `+button+`'>`+
                `<a href='`+sortedMatched[x].subTags[y].link+ `' target='_blank' style='width:35px;height:35px'></a>`+
              `</div>`+    

            `</div>`+
          `</div>`;

        if(sortedMatched[x].subTags[y].count > 0){
          document.getElementById(sortedMatched[x].text+`_sub_container`).insertAdjacentHTML("beforeend", subResultDiv);
        }
      }
    }
  }
  

}




  
  var port = chrome.runtime.connect({name: 'editPop'});
  port.onMessage.addListener(function(message,sender){
    
    console.log(message)
    console.log('we shit back from msg')
    floridaDem = message.data[1][1];
    floridaRep = message.data[1][0];
    presidentialDem = message.data[0][1];
    presidentialRep = message.data[0][0];
    if (race == 'Presidential' ) {
      adjustPopUp( presidentialRep , 'red');
    };
    if ( race == 'Floida'){
      adjustPopUp( floridaRep , 'red');  
    }
    
  });


  document.getElementById('tempHeader').innerText = 'USA: Hillary Vs Trump' ;

  function headerClick(){
    
    var raceTitle = document.getElementById('tempHeader').innerText
    console.log(raceTitle);
    if( raceTitle == 'USA: Hillary Vs Trump'){
      race = 'Floida';
      document.getElementById('tempHeader').innerText = 'Fl Senate: Rubio Vs Murphy';
      adjustPopUp( floridaRep, 'red');
    }
    if( raceTitle == 'Fl Senate: Rubio Vs Murphy'){
      race = 'Presidential';
      document.getElementById('tempHeader').innerText = 'USA: Hillary Vs Trump';
      adjustPopUp(presidentialRep, 'red');   
    }


  
      
  }

      var headerClicked = document.querySelector('.header');
      headerClicked.addEventListener('click', headerClick);







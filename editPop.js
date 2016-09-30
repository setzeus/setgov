///////////////////////////////////////
//Set the Local Storage for the Party//
///////////////////////////////////////
chrome.storage.local.set({ "Party": "Democrat" }, function(){

  
  console.log('storage has been set')
});


//////////////////////////////////////////////
//Set THe Local Storage for the Type of Race//
//////////////////////////////////////////////
chrome.storage.local.set({'Race': 'Presidential'}, function(){
  console.log('storage has been set to Presidential')
})


/////////////////////////////////////////////////////
//Going to hold whats sent from the background page//
/////////////////////////////////////////////////////
var data ;
var race ;


chrome.storage.local.get(["Race"], function(items){
    if( items === 'Presidential'){
      currentRace = 'Presidential'
    }else{
      console.log("nothign is stored under Party")
    }
});
var currentRace ;
///////////////////////////////////////////////////////////////////
//Calls to highlight all the text in the currently focued webpage//
///////////////////////////////////////////////////////////////////
function send(){
  chrome.tabs.executeScript(null, {file: "highlight.js"});
}  



/////////////////////////////////////////////////////
//Send Simple message to await a response with data//
/////////////////////////////////////////////////////
chrome.runtime.sendMessage({action: "editPop"},function(response){
  data = response
  if( response[1] === "Presidential"){
    currentRace = 'Presidential';
    document.getElementById('tempHeader').innerText = 'USA: Hillary Vs Trump'
  }
  if(response[1] === "Florida"){
    document.getElementById('tempHeader').innerText = 'Fl Senate: Rubio Vs Murphy'
    currentRace = 'Florida';
  }

  console.log(data[1])
  adjustPopUp(data[0].message[0], 'red');
  // send()

  

});  




////////////////////////////////////////////////////////////////////
//Event Listener to change profile when candiate_switch is clicked//
////////////////////////////////////////////////////////////////////
document.getElementById("candidate_switch").addEventListener('click', checkColor);
function checkColor(){
  var switch_color = document.getElementById("candidate_switch").className
  console.log(switch_color)
  if (switch_color== "icon_container left red") {
    console.log('red')
    console.log(data)
    adjustPopUp(data[0].message[1], 'blue');
  } 
  if(switch_color == 'icon_container left blue'){
    console.log(data)
    adjustPopUp(data[0].message[0], 'red');
    console.log('blue');
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
  var sortedMatched = data;
  document.getElementById('electionPositions').innerHTML = ' ' ;
  document.getElementById('top_container_text').innerText = data[0].name
  if(color == 'red'){
    var color = "red_color";
    var button = 'button_red';
  }
  if(color == 'blue'){
    var color = 'blue_color';
    var button = 'button_blue'
  }


  if (sortedMatched.length == 1) {
    var nada =  
      `<div class='nada_container'>`+
        `<p class='nada `+color+`'>Nothing election-related here! <br> Check another page?</p>`+
      `</div> `; 
    document.getElementById("electionPositions").insertAdjacentHTML("beforeend", nada);    

  }else{
    console.log(sortedMatched.length)
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


    
    var clicked = document.getElementById('headerClick');
    clicked.addEventListener('click', function(){

      
      console.log(currentRace);
      var raceTitle = document.getElementById('tempHeader').innerText

      console.log(raceTitle);
      console.log('shit ws actually clicked');

      if( currentRace === 'Fl Senate: Rubio Vs Murphy'){
        chrome.storage.local.set({'Race': 'Presidential'}, function(){
          console.log('storage has been set to Presidential');
        });

        document.getElementById('tempHeader').innerText = 'USA: Hillary Vs Trump'
      }
      if( currentRace === 'USA: Hillary Vs Trump'){
        chrome.storage.local.set({'Race': 'Florida'}, function(){
          console.log('storage has been set to Presidential');
        });

        document.getElementById('tempHeader').innerText = 'Fl Senate: Rubio Vs Murphy'
      }
    });
  






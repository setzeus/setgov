
//Going to hold whats sent from the background page
 var data ;

//Send message to background waiting for reponse of words matched from current visted page
chrome.runtime.sendMessage({action: "editPop"},function(response){
  data = response
  adjustPopUp(response[0], 'red');
});  


//Event Listener to change profile when candiate_switch is clicked
  document.getElementById("candidate_switch").addEventListener('click', checkColor);
  function checkColor(){
      var switch_color = document.getElementById("candidate_switch").className
     
      if (switch_color== "icon_container left red") {
        adjustPopUp(data[1], 'blue')
      } 
      if(switch_color == 'icon_container left blue'){
        adjustPopUp(data[0] , "red")
      }
  }



//handles the data from getKeyWordsFromPage and profile change
function adjustPopUp(sortedMatched, color){
 document.getElementById('electionPositions').innerHTML = ' ' 

  if(color == 'red'){
    var color = "red_color";
    var button = 'button_red';
  }
  if(color == 'blue'){
    var color = 'blue_color';
    var button = 'button_blue'
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


  var result = sortedMatched.filter(checkSubtag);
  var filtered = result.filter(checkSubtagCount);


 

  if (filtered.length == 0) {
    var nada =  
      `<div class='nada_container'>`+
        `<p class='nada `+color+`'>Nothing to see here</p>`+
      `</div> `; 
    document.getElementById("electionPositions").insertAdjacentHTML("beforeend", nada);    

  }else{
    for(var i=0; i < filtered.length; i++){
    var subtagLength = filtered[i].subTags.length;
    
    var resultDiv = 
      `<div class="result_container" id="`+filtered[i].text+`Result">`+

        `<div class="row" id="`+sortedMatched[i].texts+`Row">`+
          `<div class='result_text'>`+
            `<p class='ampersand `+color+`' >
              #
            </p>`+
            `<p class='issue' id='tagText`+i+`'>`
              + filtered[i].text + 
              `<i style="margin-left:5px;">`+
                `(`+ filtered[i].count+`)` +
              `</i>`+
            `</p>`+ 
          `</div>`+
          `<div class='button `+button+`' id='`+i+`Link'>`+
            `<a href='`+filtered[i].link+`' target='_blank' style='width:35px;height:35px;'></a>`+
          `</div>` +
        `</div>`+
        `<div class='row_status' id='row_status_`+color+`'></div>`+
        `<div class='sub_row_container' id='`+filtered[i].text+`_sub_container'>`+
        `</div>`+
      `</div>`;
  
          document.getElementById("electionPositions").insertAdjacentHTML("beforeend", resultDiv);    
  }



  for( var x=0; x<filtered.length; x++){
    for(var y=0;y<filtered[x].subTags.length; y++){
      var subResultDiv = 
        `<div class='sub_row' id="`+filtered[x].subTags[y].text+`SubRow">`+
          `<div class='sub_result_text' style="margin-left:15px;">`+
            `<p class='sub_amperand `+color+`'>#</p>`+
            `<p class='sub_text'>`+filtered[x].subTags[y].text+
                `<i style='margin-left:5px;'>`+
                  `(`+filtered[x].subTags[y].count+`)` + 
                `</i>`+
            `</p>` +
          `</div>`+   
            `<div class='sub_button `+button+`'>`+
              `<a href='`+filtered[x].subTags[y].link+ `' target='_blank' style='width:35px;height:35px'></a>`+
            `</div>`+    

          `</div>`+
        `</div>`;

      if(filtered[x].subTags[y].count > 0){
        document.getElementById(filtered[x].text+`_sub_container`).insertAdjacentHTML("beforeend", subResultDiv);
      }
    }
  }

  
  }

  // if (filtered.length > 0) {
  //   var last = parseInt(filtered.length);
  //   var lastTag = filtered[last-1].text;
  //   console.log(lastTag)
  //   document.getElementById(lastTag + "_sub_container").style.display = "none";

  //   document.getElementById(lastTag + "Result").onmouseover=function(){
  //     document.getElementById(lastTag + "_sub_container").style.display = "flex";
  //     };

  //   document.getElementById(lastTag + "Result").onmouseleave=function(){
  //     document.getElementById(lastTag + "_sub_container").style.display = "none";
  //   };

  //   document.getElementById(lastTag + "_sub_container").onmouseleave=function(){
  //     document.getElementById(lastTag + "_sub_container").style.display = "flex";
  //   };

  //   console.log(last);
  //   console.log(lastTag);
  // };
}










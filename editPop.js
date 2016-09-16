
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
  //Set variables ready for color that should be displayed
  if(color == 'red'){
    var buttonColor = 'button-red';
    var ampersandColor = 'ampersand_color_red';
    var rowLineColor = 'row_line_red'
  }
  if(color =='blue'){
    var buttonColor = 'button-blue';
    var ampersandColor = 'ampersand_color_blue';
    var rowLineColor = 'row_line_blue'
  }

  var clearDivv = document.getElementById('electionPositions').innerHTML = ' ' 

  for(var i =0;i < sortedMatched.length;i++){   
    var resultsDiv = 
        `<div class="resultContainer" id="`+sortedMatched[i].text+`Results">`+ 
          `<div class="row" id="row`+sortedMatched[i].text+`">` +
            `<div class="tag">` +
                `<p class="`+ampersandColor+`  ampersand_color">#</p>` +
                `<p class="tagText`+i+` tagText">` +
                    sortedMatched[i].text +
                    `<i style='margin-left:5px;'>` +
                         `(`+sortedMatched[i].count+`)`  + 
                    `</i>`+
                `</p>`+
            `</div>` +
            `<div class=" ` + buttonColor +` button primary" id="link`+i+`">` +
                `<a href="`+sortedMatched[i].link+`" target="_blank" style='width:35px;height:35px'></a>` +
            `</div>` +
          `</div>` +
          `<div class="row-line"></div>`+
          `<div class="mini-row-container" id="`+sortedMatched[i].text+`SubContainer">`+
          `</div>`+
        `</div>`;  


    
      if( sortedMatched[i].subTags.length > 0 ){
        var resultsBody = document.getElementById("electionPositions");
      resultsBody.insertAdjacentHTML("beforeend",resultsDiv);
      }
      
      //resultsBody.append(resultsDiv);  
                     
  }
   
  //creating the html for the subtags
  for(var x=0; x<sortedMatched.length;x++){
    for(var y=0; y<sortedMatched[x].subTags.length;y++){
      var subResultsDiv = 
        `<div class="mini-row-hidden" id="subRow`+sortedMatched[x].subTags[y].text+`">` +
            `<div class="tag">` +
              `<p class="`+ampersandColor+` ampersand_color_mini">#</p>` +
              `<p class="sub-tag">`+sortedMatched[x].subTags[y].text+
                  `<i style='margin-left:5px;'>` +
                    `(`+sortedMatched[x].subTags[y].count+`)`  + 
                  `</i>`+
              `</p>` +
            `</div>`+   
            `<div class="`+buttonColor+` mini-button">`+
               `<a href="`+sortedMatched[x].subTags[y].link+`" target="_blank" style='width:35px;height:35px'></a>` + 
            `</div>`+
        `</div>`;
      
      if(sortedMatched[x].subTags[y].count > 0 ){
          document.getElementById(sortedMatched[x].text+`SubContainer`).insertAdjacentHTML("beforeend",subResultsDiv);
      }                 
    }
  }


if (sortedMatched.length > 0) {
  var last = parseInt(sortedMatched.length);
  var lastTag = sortedMatched[last-1].text;
  document.getElementById(lastTag + "SubContainer").style.display = "none";

  document.getElementById(lastTag + "Results").onmouseover=function(){
    document.getElementById(lastTag + "SubContainer").style.display = "flex";
    };

  document.getElementById(lastTag + "Results").onmouseleave=function(){
    document.getElementById(lastTag + "SubContainer").style.display = "none";
  };

  document.getElementById(lastTag + "SubContainer").onmouseleave=function(){
    document.getElementById(lastTag + "SubContainer").style.display = "flex";
  };

  console.log(last);
  console.log(lastTag);
};

// document.getElementById("empty").onclick=function(){
//   document.getElementById("empty").style.display="none";
//   document.getElementById("shirt_control").style.display="flex";
// };


}

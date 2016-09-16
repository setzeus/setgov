 var data ;

chrome.runtime.sendMessage({action: "editPop"},function(response){
  
  data = response
  adjustPopUp(response[0], 'red');
});  



 
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









//handles the data from getKeyWordsFromPage
function adjustPopUp(sortedMatched, color){

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
  console.log('adjust popup went off inside edit pop off');
  //Sort functions 

  console.log(sortedMatched)
  for(var i =0;i < sortedMatched.length;i++){
    //document.getElementById('empty').style.display = 'none';
   
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
   
  //Start same as function above ^^ going run for each tag in sortedMatched
  for(var x=0; x<sortedMatched.length;x++){
    console.log(x)
    //going loop through each of the subtags in each tag
    for(var y=0; y<sortedMatched[x].subTags.length;y++){
      console.log('sortedMatched' + [x] + 'is being implemented')
     //div that going to be returned if the subtag is greater than 1 
      var subResultsDiv = `<div class="mini-row-hidden" id="subRow`+sortedMatched[x].subTags[y].text+`">` +
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

      
        document.getElementById(sortedMatched[x].text+`SubContainer`).insertAdjacentHTML("beforeend",subResultsDiv);
                          
    }
  }

console.log(sortedMatched)
if (sortedMatched.length > 0) {
  var last = parseInt(sortedMatched.length);
  var lastTag = sortedMatched[last-1].text;
  console.log(lastTag)
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

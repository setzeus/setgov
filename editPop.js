


chrome.runtime.sendMessage({action: "editPop"},function(response){
  console.log(response);
  console.log(response.length);
  adjustPopUp(response);
});


//handles the data from getKeyWordsFromPage
function adjustPopUp(sortedMatched){

  console.log('adjust popup went off inside edit pop off');
  //Sort functions 
  

  for(var i =0;i < sortedMatched.length;i++){
    //document.getElementById('empty').style.display = 'none';
   
    var resultsDiv = 
        `<div class="resultContainer" id="`+sortedMatched[i].text+`Results">`+ 
          `<div class="row" id="row`+sortedMatched[i].text+`">` +
            `<div class="tag">` +
                `<p class="ampersand_color">#</p>` +
                `<p class="tagText`+i+`">` +
                    sortedMatched[i].text +
                    `<i style='margin-left:5px;'>` +
                         `(`+sortedMatched[i].count+`)`  + 
                    `</i>`+
                `</p>`+
            `</div>` +
            `<div class="button primary" id="link`+i+`">` +
                `<a href="`+sortedMatched[i].link+`" target="_blank" style='width:35px;height:35px'></a>` +
            `</div>` +
          `</div>` +
          `<div class="row-line"></div>`+
          `<div class="mini-row-container" id="`+sortedMatched[i].text+`SubContainer">`+
          `</div>`+
        `</div>`;  

    if(sortedMatched[i].subTags.length > 0){
     
      var resultsBody = document.getElementById("results_body");
      resultsBody.insertAdjacentHTML("beforeend",resultsDiv);
      //resultsBody.append(resultsDiv);  
    }                  
  }

  //Start same as function above ^^ going run for each tag in sortedMatched
  for(var x=0; x<sortedMatched.length;x++){

    //going loop through each of the subtags in each tag
    for(var y=0; y<sortedMatched[x].subTags.length;y++){

     //div that going to be returned if the subtag is greater than 1 
      var subResultsDiv = `<div class="mini-row-hidden" id="subRow`+sortedMatched[x].subTags[y].text+`">` +
                              `<p class="ampersand_color_mini">#</p>` +
                              `<p class="sub-tag">`+sortedMatched[x].subTags[y].text+
                                  `<i style='margin-left:5px;'>` +
                                    `(`+sortedMatched[x].subTags[y].count+`)`  + 
                                  `</i>`+
                              `</p>` +
                              `<div class="mini-button">`+
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

document.getElementById("empty").onclick=function(){
  document.getElementById("empty").style.display="none";
  document.getElementById("shirt_control").style.display="flex";
};

}

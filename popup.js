
var data;
var race;
var party;
//Inject content Script on each tab change 
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  //console.log('on updated listener went off')
  chrome.tabs.executeScript(null, {file: "getKeyWordsFromPage.js"});

}); 

//inject content script when first tab is activated 
chrome.tabs.onActivated.addListener(function(tabId, changeInfo, tab) {
  chrome.tabs.executeScript(null, {file: "getKeyWordsFromPage.js"});
});

//Getting and setting party data from local storage
chrome.storage.local.get(["Party"], function(items){
    console.log(items)
    if( items !== null){
      console.log(items)
      party = items.Party
    }else{
      console.log("nothign is stored under Party")
    }
    console.log(party)
});

//Getting and settign race data from local storage
chrome.storage.local.get(['Race'], function(items){
  console.log('race retrivel' + items);
  if( items !== null){
    console.log(items);
    race = items.Race
  }else{
    console.log('nothing stored localy under race');
  }
    console.log(race)

    
});





//Long lived connection with getKeyWordsFromPage 
chrome.runtime.onConnect.addListener(function(port){
  console.log(port)
  port.postMessage({race:race});
  port.onMessage.addListener(function(message,sender){
    console.log(message)
  });
});


chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
    
//Content Script determines what the wordcount is 
//background manags sending either Rubio or Murphy
//pop up manages the display of everything dynmically 

  if( request.action == "getKeyWordsFromPage" ){
         var tagAmount =  request.source[0].length+" ";

	   chrome.browserAction.setBadgeText({
	        text: tagAmount
	  });
        
        console.log(request)
        data = request.source;
    }

  if( request.action == "editPop"){
      sendResponse(data)
  }  
});









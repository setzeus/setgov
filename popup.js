//////////////
//Global var//
//////////////
var data;
var race;
var party;

////////////////////////////////////////////
//Inject content Script on each tab change//
////////////////////////////////////////////
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  console.log('content script injected')
  chrome.tabs.executeScript(null, {file: "getKeyWordsFromPage.js"});
}); 

/////////////////////////////////////////////////////
//Inject content script when first tab is activated//
///////////////////////////////////////////////////// 
chrome.tabs.onActivated.addListener(function(tabId, changeInfo, tab) {
  console.log('content script injected')
  chrome.tabs.executeScript(null, {file: "getKeyWordsFromPage.js"});
});

/////////////////////////////////////////////////////
//Getting local storage information regarding party//
/////////////////////////////////////////////////////
chrome.storage.local.get(["Party"], function(items){
    if( items !== null){
      party = items.Party
    }else{
      console.log("nothign is stored under Party")
    }
});

////////////////////////////////////////////////////
//Getting local storage information regarding Race//
////////////////////////////////////////////////////
chrome.storage.local.get(['Race'], function(items){
  if( items !== null){
    race = items.Race
  }else{
    console.log('nothing stored localy under race');
  } 
});


//////////////////////////////////////////////////
//Long lived connection with getKeyWordsFromPage//
//also listens for msg from editpop to send data// 
//////////////////////////////////////////////////
chrome.runtime.onConnect.addListener(function(port){
  port.postMessage({race:race});
  port.onMessage.addListener(function(message,sender){
    
    data = [message, race, party];
    var amount = data[0].message[0].length + data[0].message[1].length;
    var tagAmount = amount+''

    chrome.browserAction.setBadgeText({
      text: tagAmount
    });
  });

  chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
    if( request.action == "editPop"){
      sendResponse(data)
    }  
  });
});












//////////////
//Global var//
//////////////
var data;
var race;
var party;
var floridaDem 
var floridaRep
var presidentialDem
var presidentialRep


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


//////////////////////////////////////////////////
//Long lived connection with getKeyWordsFromPage//
//also listens for msg from editpop to send data// 
//////////////////////////////////////////////////
chrome.runtime.onConnect.addListener(function(port){
  console.log(port)

  port.postMessage({race:race});

  if(port.name == 'editPop'){

      console.log(port.name)
      port.postMessage({data : [[presidentialRep, presidentialDem ],[ floridaRep, floridaDem ]]});
  }

  port.onMessage.addListener(function(message,sender){
    console.log(sender)
    console.log(message)
    if( port.name == "getKeyWordsFromPage"){
      console.log(message)
      
      floridaDem = message.data[1][1];
      floridaRep = message.data[1][0];
      presidentialRep = message.data[0][0];
      presidentialDem = message.data[0][1];
      console.log('shit should be updated on every page change or creation')
      var amount = message.data[0][0].length -1 + message.data[0][1].length -1;
      var tagAmount = amount+''
      chrome.browserAction.setBadgeText({
        text: tagAmount
      });
    }
     
  });






  
});












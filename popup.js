
var data;


chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  console.log('on updated listener went off')
  chrome.tabs.executeScript(null, {file: "getKeyWordsFromPage.js"});

}); 


chrome.tabs.onActivated.addListener(function(tabId, changeInfo, tab) {
	chrome.tabs.executeScript(null, {file: "getKeyWordsFromPage.js"});
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









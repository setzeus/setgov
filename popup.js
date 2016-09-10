
var data;
chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
  

  if( request.action == "getKeyWordsFromPage" ){
        
        var tagAmount =  request.source.length+" ";
        chrome.browserAction.setBadgeText({
          text: tagAmount
        });
        data = request.source;
       
  }

  else if( request.action == "editPop"){
      console.log(request.method)
      sendResponse(data);
  }

  
  
  

});




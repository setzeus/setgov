
var data;



chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
    
//Content Script determines what the wordcount is 
//background manags sending either Rubio or Murphy
//pop up manages the display of everything dynmically 

  if( request.action == "getKeyWordsFromPage" ){
        console.log('get getKeyWordsFromPage sent msg')
        var tagAmount =  request.source.length+" ";
        chrome.browserAction.setBadgeText({
          text: tagAmount
        });

        data = request.source;
       
   
       
  }

 if( request.action == "editPop"){
      console.log('edit pop up send msg')
      sendResponse(data)
       
  }  
  
});









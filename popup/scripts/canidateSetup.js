  function removeZero(value){
      if ( value.count > 0) {
        console.log(value)
        return value
      }
  }

  function removeZeroSub(value){
    if( value.subTags.length > 0){
      return value
    }
  }

  function sortInt(a, b) {
    return  b.count - a.count;
  }






export function tagSetup(wordCount,tags,name) {
	console.log(wordCount)
  if(wordCount == undefined){
    console.log('shit hit the fan')
  }else{
   

    var tempTags = tags.filter(removeZero)

    for( var x = 0; x< tempTags.length; x++) {
        console.log( tempTags[x].subTags)
        var filterdTags = tempTags[x].subTags.filter(removeZero)
        tempTags[x].subTags = filterdTags
          
    }
    console.log(tempTags)
    
    var tags = tempTags.filter(removeZeroSub);
    tags = clintonTags.sort( sortInt );
    tags = countFilter.unshift({ name: name});
    console.log(tags)

    return tags
  }
	
}







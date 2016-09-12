window.addEventListener('load', function () {
    var segmentArray = document.getElementsByClassName('segment');
    var arr = [].slice.call(segmentArray);
	
	console.log(segmentArray.length); 
	for (var i = 0; i < segmentArray.length; i++) {
		console.log(segmentArray[i]);
		arr[i].onclick = segmentedLogic;
	};



	function segmentedLogic(element) {
	var clickedId = element.srcElement.id;

	if (clickedId == "seg2") {
		document.getElementById('seg3').className = "segment";
		var icon = document.getElementById('seg3').firstChild.innerHTML; 
		console.log(icon);
		icon.id = "test";
	}; 
	console.log(element.srcElement.className);
	console.log(element.srcElement.id);

	element.srcElement.className += " " + "default"; 

	}
})




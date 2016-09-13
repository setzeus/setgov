window.addEventListener('load', function () {
    var segmentArray = document.getElementsByClassName('segment');
    var arr = [].slice.call(segmentArray);
	
	console.log(segmentArray.length); 
	for (var i = 0; i < segmentArray.length; i++) {
		console.log(segmentArray[i]);
		arr[i].onclick = segmentedLogic;
	};

	function candidateSwitchLogic() {

		}


	function segmentedLogic(element) {
	var clickedId = element.srcElement.id;

	if (clickedId == "seg3") {
		document.getElementsByClassName("segment_icon fa fa-info fa-lg")[0].id = " ";
		document.getElementsByClassName("segment_icon fa fa-list fa-lg")[0].id = "selected";
		document.getElementsByClassName("segment_icon fa fa-money fa-lg")[0].id = " ";
		document.getElementById('seg1').className = "segment";
		document.getElementById('seg2').className = "segment";
		element.srcElement.className += " " + "default";

		document.getElementsByClassName("segment_title_text")[0].innerHTML = "Election Platform"
	};

	if (clickedId == "seg2") {
		document.getElementsByClassName("segment_icon fa fa-info fa-lg")[0].id = "selected";
		document.getElementsByClassName("segment_icon fa fa-list fa-lg")[0].id = " ";
		document.getElementsByClassName("segment_icon fa fa-money fa-lg")[0].id = " ";
		document.getElementById('seg1').className = "segment";
		document.getElementById('seg3').className = "segment";
		element.srcElement.className += " " + "default";

		document.getElementsByClassName("segment_title_text")[0].innerHTML = "General Election Info."
	};

	if (clickedId == "seg1") {
		document.getElementsByClassName("segment_icon fa fa-money fa-lg")[0].id = "selected";
		document.getElementsByClassName("segment_icon fa fa-list fa-lg")[0].id = " ";
		document.getElementsByClassName("segment_icon fa fa-info fa-lg")[0].id = " ";
		document.getElementById('seg2').className = "segment";
		document.getElementById('seg3').className = "segment";
		element.srcElement.className += " " + "default";

		document.getElementsByClassName("segment_title_text")[0].innerHTML = "Latest Live Polls"
	}; 
  }
})




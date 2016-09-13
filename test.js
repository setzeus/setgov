window.addEventListener('load', function () {
    var segmentArray = document.getElementsByClassName('segment');
    var arr = [].slice.call(segmentArray);
	
	for (var i = 0; i < segmentArray.length; i++) {
		arr[i].onclick = segmentedLogic;
	};

	var candidate_switch = document.getElementById('candidate_switch');
	candidate_switch.onclick = candidateSwitchLogic;


	function candidateSwitchLogic(element) {
		var currentColor = element.srcElement.className;
		console.log(currentColor);
		if (currentColor == "icon_container left red") {
			candidate_switch.className = "icon_container left blue";
			document.getElementsByClassName('top_body red')[0].className = "top_body blue";
			document.getElementsByClassName('icon_container right red')[0].className = "icon_container right blue";
			document.getElementsByClassName('icon_container right red')[0].className = "icon_container right blue";
			document.getElementsByClassName('segment red')[0].className = "segment blue";
			document.getElementsByClassName('segment_container red')[0].className = "segment_container blue";
			document.getElementsByClassName('segment_controller red')[0].className = "segment_controller blue";
			document.getElementsByClassName('segment_title red')[0].className = "segment_title blue";
			document.getElementsByClassName('segment_body red')[0].className = "segment_body blue";
			document.getElementsByClassName('segment default red')[0].className = "segment default blue";
		} else {
			candidate_switch.className = "icon_container left red";
			document.getElementsByClassName('top_body blue')[0].className = "top_body red";
			document.getElementsByClassName('icon_container right blue')[0].className = "icon_container right red";
			document.getElementsByClassName('icon_container right blue')[0].className = "icon_container right red";
			document.getElementsByClassName('segment blue')[0].className = "segment red";
			document.getElementsByClassName('segment_container blue')[0].className = "segment_container red";
			document.getElementsByClassName('segment_controller blue')[0].className = "segment_controller red";
			document.getElementsByClassName('segment_title blue')[0].className = "segment_title red";
			document.getElementsByClassName('segment_body blue')[0].className = "segment_body red";
			document.getElementsByClassName('segment default red')[0].className = "segment default blue";
		}

		console.log(candidate_switch.className);
	};


	function segmentedLogic(element) {
		var clickedId = element.srcElement.id;
		var switch_color = document.getElementById('candidate_switch').className;
		var color;
		if (switch_color=="icon_container left red") {
			color = "red";
		} else {
			color = "blue";
		}

		if (clickedId == "seg3") {
			document.getElementsByClassName("segment_icon fa fa-info fa-lg")[0].id = " ";
			document.getElementsByClassName("segment_icon fa fa-list fa-lg")[0].id = "selected";
			document.getElementsByClassName("segment_icon fa fa-money fa-lg")[0].id = " ";
			document.getElementById('seg1').className = "segment";
			document.getElementById('seg2').className = "segment";
			element.srcElement.className = "segment default " + color;

			document.getElementsByClassName("segment_title_text")[0].innerHTML = "Election Platform"
		};

		if (clickedId == "seg2") {
			document.getElementsByClassName("segment_icon fa fa-info fa-lg")[0].id = "selected";
			document.getElementsByClassName("segment_icon fa fa-list fa-lg")[0].id = " ";
			document.getElementsByClassName("segment_icon fa fa-money fa-lg")[0].id = " ";
			document.getElementById('seg1').className = "segment";
			document.getElementById('seg3').className = "segment";
			element.srcElement.className = "segment default " + color;

			document.getElementsByClassName("segment_title_text")[0].innerHTML = "General Election Info."
		};

		if (clickedId == "seg1") {
			document.getElementsByClassName("segment_icon fa fa-money fa-lg")[0].id = "selected";
			document.getElementsByClassName("segment_icon fa fa-list fa-lg")[0].id = " ";
			document.getElementsByClassName("segment_icon fa fa-info fa-lg")[0].id = " ";
			document.getElementById('seg2').className = "segment";
			document.getElementById('seg3').className = "segment";
			element.srcElement.className = "segment default " + color;

			document.getElementsByClassName("segment_title_text")[0].innerHTML = "Latest Live Polls"
		}; 
  	}
})




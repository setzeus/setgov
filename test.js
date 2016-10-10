//http://elections.huffingtonpost.com/pollster/api/charts/2016-general-election-trump-vs-clinton.json


window.addEventListener('load', function () {

	var xhttpSenate = new XMLHttpRequest();
	var xhttpPresidental = new XMLHttpRequest();

	function headerClick(){
    
	    var raceTitle = document.getElementById('tempHeader').innerText

	    if( raceTitle == 'USA: Hillary Vs Trump'){
	    	console.log('graph should change to presidental')
	    	addPresidentalGraph();
	    }
	    if( raceTitle == 'Fl Senate: Rubio Vs Murphy'){
	    	console.log('graph should change to senate')
	    	addSenateGraph();  
	    }      
	  }

    var headerClicked = document.querySelector('.header');
    headerClicked.addEventListener('click', headerClick);


    var ctx = document.getElementById("clients");

    function addPresidentalGraph(){
    	xhttpPresidental.open('GET','http://elections.huffingtonpost.com/pollster/api/charts/2016-general-election-trump-vs-clinton.json', true);
		xhttpPresidental.send();

    	//Initialize all future graph arrays
		var XAxisDates = [];
		var trumpValue = [];
		var clintonValue = [];
		var undecidedValue = [];


    	xhttpPresidental.onreadystatechange=function(){
	    	if (this.readyState == 4 && this.status == 200) {
	   	  		var data = this.responseText

		   	  //console.log(data);
			 	var jsonResponse = JSON.parse(data);
			 	console.log(jsonResponse)
			 	
			 	var j =0;

			  	for (var i = 60; i >= 0; i--) {
			  		XAxisDates[i] = jsonResponse.estimates_by_date[j].date;
			  		j++;
			  		trumpValue[i] = jsonResponse.estimates_by_date[i].estimates[0].value;
			  		clintonValue[i] = jsonResponse.estimates_by_date[i].estimates[1].value;
			  		undecidedValue[i] = jsonResponse.estimates_by_date[i].estimates[3].value;
			  	};

		    	//Initialize chart

				var labelsTest = XAxisDates;



				var data = {
			    	labels: labelsTest,
			    	datasets: [
				      	{
				         	label: 'D.Trump',
			            	fill: false,
			            	lineTension: 0.1,
				            backgroundColor: "rgba(239,83,80,.5)",
				            borderColor: "rgba(244,67,54,1)",
				            borderCapStyle: 'butt',
				            borderDash: [],
				            borderDashOffset: 0.0,
				            borderJoinStyle: 'miter',
				            pointBorderColor: "rgba(244,67,54,1)",
				            pointBackgroundColor: "#fff",
				            pointBorderWidth: 1,
				            pointHoverRadius: 5,
				            pointHoverBackgroundColor: "rgba(75,192,192,1)",
				            pointHoverBorderColor: "rgba(220,220,220,1)",
				            pointHoverBorderWidth: 2,
				            pointRadius: 1,
				            pointHitRadius: 10,
				            data: trumpValue,
				            spanGaps: false,
					    },
				      	{	
					        label: "H.Clinton",
				            fill: false,
				            lineTension: 0.1,
				            backgroundColor: "rgba(0,164,228,0.5)",
				            borderColor: "rgba(1,113,208,1)",
				            borderCapStyle: 'butt',
				            borderDash: [],
				            borderDashOffset: 0.0,
				            borderJoinStyle: 'miter',
				            pointBorderColor: "rgba(1,113,208,1)",
				            pointBackgroundColor: "#fff",
				            pointBorderWidth: 1,
				            pointHoverRadius: 5,
				            pointHoverBackgroundColor: "rgba(57,129,129,1)",
				            pointHoverBorderColor: "rgba(220,220,220,1)",
				            pointHoverBorderWidth: 2,
				            pointRadius: 1,
				            pointHitRadius: 10,
				            data: clintonValue  ,
				            spanGaps: false,
					    },
					    {
					        label: "Not Sure",
				            fill: false,
				            lineTension: 0.1,
				            backgroundColor: "rgba(55,71,79,0.5)",
				            borderColor: "rgba(49,53,66,1)",
				            borderCapStyle: 'butt',
				            borderDash: [],
				            borderDashOffset: 0.0,
				            borderJoinStyle: 'miter',
				            pointBorderColor: "rgba(49,53,66,1)",
				            pointBackgroundColor: "#fff",
				            pointBorderWidth: 1,
				            pointHoverRadius: 5,
				            pointHoverBackgroundColor: "rgba(54,28,0,1)",
				            pointHoverBorderColor: "rgba(220,220,220,1)",
				            pointHoverBorderWidth: 2,
				            pointRadius: 1,
				            pointHitRadius: 10,
				            data: undecidedValue,
				            spanGaps: false,
					    }
			    	]
				};

				var options = {
				    scales: {
				        yAxes: [{
				            display: true,
				            ticks: {
				                suggestedMin: 0,    			                
				                beginAtZero: true,
				                max: 70
				            }
				        }]
				    },
				    legend: {
				    	display: true,
				    	label: {
				    		position:'bottom',
				    		fullWidth:true
				    	}
				    }
				};


				// Create chart
				var myLineChart = new Chart(ctx,{
					type: "line",
					data: data,
					options: options
				});

	    	}
		}
    }




    function addSenateGraph(){
    	xhttpSenate.open("GET","http://elections.huffingtonpost.com/pollster/api/charts/2016-florida-senate-rubio-vs-murphy.json", true);
		xhttpSenate.send();

    	//Initialize all future graph arrays
		var XAxisDates = [];
		var rubioValue = [];
		var murphyValue = [];
		var undecidedValue = [];


    	xhttpSenate.onreadystatechange=function(){
	    	if (this.readyState == 4 && this.status == 200) {
	   	  		var data = this.responseText

		   	  //console.log(data);
			 	var jsonResponse = JSON.parse(data);
			 	console.log(jsonResponse)
			 	
			 	var j =0;

			  	for (var i = 60; i >= 0; i--) {
			  		XAxisDates[i] = jsonResponse.estimates_by_date[j].date;
			  		j++;
			  		rubioValue[i] = jsonResponse.estimates_by_date[i].estimates[0].value;
			  		murphyValue[i] = jsonResponse.estimates_by_date[i].estimates[1].value;
			  		undecidedValue[i] = jsonResponse.estimates_by_date[i].estimates[2].value;
			  	};

		    	//Initialize chart

				var labelsTest = XAxisDates;



				var data = {
			    	labels: labelsTest,
			    	datasets: [
				      	{
				         	label: "M.Rubio",
			            	fill: false,
			            	lineTension: 0.1,
				            backgroundColor: "rgba(239,83,80,.5)",
				            borderColor: "rgba(244,67,54,1)",
				            borderCapStyle: 'butt',
				            borderDash: [],
				            borderDashOffset: 0.0,
				            borderJoinStyle: 'miter',
				            pointBorderColor: "rgba(244,67,54,1)",
				            pointBackgroundColor: "#fff",
				            pointBorderWidth: 1,
				            pointHoverRadius: 5,
				            pointHoverBackgroundColor: "rgba(75,192,192,1)",
				            pointHoverBorderColor: "rgba(220,220,220,1)",
				            pointHoverBorderWidth: 2,
				            pointRadius: 1,
				            pointHitRadius: 10,
				            data: rubioValue,
				            spanGaps: false,
					    },
				      	{	
					        label: "P.Murphy",
				            fill: false,
				            lineTension: 0.1,
				            backgroundColor: "rgba(0,164,228,0.5)",
				            borderColor: "rgba(1,113,208,1)",
				            borderCapStyle: 'butt',
				            borderDash: [],
				            borderDashOffset: 0.0,
				            borderJoinStyle: 'miter',
				            pointBorderColor: "rgba(1,113,208,1)",
				            pointBackgroundColor: "#fff",
				            pointBorderWidth: 1,
				            pointHoverRadius: 5,
				            pointHoverBackgroundColor: "rgba(57,129,129,1)",
				            pointHoverBorderColor: "rgba(220,220,220,1)",
				            pointHoverBorderWidth: 2,
				            pointRadius: 1,
				            pointHitRadius: 10,
				            data: murphyValue  ,
				            spanGaps: false,
					    },
					    {
					        label: "Not Sure",
				            fill: false,
				            lineTension: 0.1,
				            backgroundColor: "rgba(55,71,79,0.5)",
				            borderColor: "rgba(49,53,66,1)",
				            borderCapStyle: 'butt',
				            borderDash: [],
				            borderDashOffset: 0.0,
				            borderJoinStyle: 'miter',
				            pointBorderColor: "rgba(49,53,66,1)",
				            pointBackgroundColor: "#fff",
				            pointBorderWidth: 1,
				            pointHoverRadius: 5,
				            pointHoverBackgroundColor: "rgba(54,28,0,1)",
				            pointHoverBorderColor: "rgba(220,220,220,1)",
				            pointHoverBorderWidth: 2,
				            pointRadius: 1,
				            pointHitRadius: 10,
				            data: undecidedValue,
				            spanGaps: false,
					    }
			    	]
				};

				var options = {
				    scales: {
				        yAxes: [{
				            display: true,
				            ticks: {
				                suggestedMin: 0,    			                
				                beginAtZero: true,
				                max: 70
				            }
				        }]
				    },
				    legend: {
				    	display: true,
				    	label: {
				    		position:'bottom',
				    		fullWidth:true
				    	}
				    }
				};


				// Create chart
				var myLineChart = new Chart(ctx,{
					type: "line",
					data: data,
					options: options
				});

	    	}
		}
	}


	
	  

	
	
	addPresidentalGraph();

	// Main 'Candidate Switch' icon	  
	var candidate_switch = document.getElementById('candidate_switch');
	var switch_color = document.getElementById('candidate_switch').className; // 'Candidate Switch current color'
	var color,colorHex;


    var segmentArray = document.getElementsByClassName('segment');
    var arr = [].slice.call(segmentArray); //convert from HTML node list to array
	
	// assign the 'segmentedLogic' function to run on click for every segment 
	for (var i = 0; i < segmentArray.length; i++) {
		arr[i].onclick = segmentedLogic;
	};

	

	// Main function used to handle the logic of switchin between the three segmented controls
	function segmentedLogic(element) {
		var clickedId;
		console.log(element.srcElement);
		console.log(element.srcElement.id);
		console.log(element.srcElement.parentElement);
		if (element.srcElement.tagName === "I") {
			clickedId = element.srcElement.parentElement.id;
			console.log(clickedId);
		} else {
			clickedId = element.srcElement.id;
			console.log(clickedId);
		}

		var switch_color = document.getElementById('candidate_switch').className;
		console.log(switch_color)

		var color;
		var colorHex;
		if (switch_color == " icon_container left red") {
			color = "red";
			colorHex = "#F44336";
		} else {
			color = "blue";
			colorHex = "#1E88E5";
		}

		if (clickedId == "seg3") {
			document.getElementsByClassName("segment_icon fa fa-info fa-lg")[0].id = " ";
			document.getElementsByClassName("segment_icon fa fa-list fa-lg")[0].id = "selected";
			document.getElementsByClassName("segment_icon fa fa-line-chart fa-lg")[0].id = " ";
			document.getElementById('seg1').className = "segment";
			document.getElementById('seg2').className = "segment";
			document.getElementById('seg1').style.backgroundColor = "initial";
			document.getElementById('seg2').style.backgroundColor = "initial";
			document.getElementById('seg3').className = "segment default";

			document.getElementsByClassName("segment_title_text")[0].innerHTML = "Election Platform"
			document.getElementsByClassName('segment default')[0].style.backgroundColor = colorHex;
			document.getElementById('electionPositions').className = "subview selected";
			document.getElementById('electionGraph').className = "subview";
			document.getElementById('electionInfo').className = "subview";
		};

		if (clickedId == "seg2") {
			document.getElementsByClassName("segment_icon fa fa-info fa-lg")[0].id = "selected";
			document.getElementsByClassName("segment_icon fa fa-list fa-lg")[0].id = " ";
			document.getElementsByClassName("segment_icon fa fa-line-chart fa-lg")[0].id = " ";
			document.getElementById('seg1').className = "segment";
			document.getElementById('seg3').className = "segment";
			document.getElementById('seg1').style.backgroundColor = "initial";
			document.getElementById('seg3').style.backgroundColor = "initial";
			document.getElementById('seg2').className = "segment default";

			document.getElementsByClassName("segment_title_text")[0].innerHTML = "General Election Info."
			document.getElementsByClassName('segment default')[0].style.backgroundColor = colorHex;
			document.getElementById('electionInfo').className = "subview selected";
			document.getElementById('electionPositions').className = "subview";
			document.getElementById('electionGraph').className = "subview";
		};

		if (clickedId == "seg1") {
			document.getElementsByClassName("segment_icon fa fa-line-chart fa-lg")[0].id = "selected";
			document.getElementsByClassName("segment_icon fa fa-list fa-lg")[0].id = " ";
			document.getElementsByClassName("segment_icon fa fa-info fa-lg")[0].id = " ";
			document.getElementById('seg2').className = "segment";
			document.getElementById('seg3').className = "segment";
			document.getElementById('seg2').style.backgroundColor = "initial";
			document.getElementById('seg3').style.backgroundColor = "initial";
			document.getElementById('seg1').className = "segment default";

			document.getElementsByClassName("segment_title_text")[0].innerHTML = "Latest Live Poll"
			document.getElementsByClassName('segment default')[0].style.backgroundColor = colorHex;
			document.getElementById('electionGraph').className = "selected subview";
			document.getElementsByTagName("BODY")[0].style.width = "326px";
			document.getElementsByTagName("BODY")[0].style.width = "325px";
			document.getElementById('electionPositions').className = "subview";
			document.getElementById('electionInfo').className = "subview";
		}; 
  	}
})



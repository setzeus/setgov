
export  function highlightWords(){

	const nodeList = ['p', 'span', 'ui', 'li', 'ol', 'title'];

for (let i = 0; i < nodeList.length; i++) {
   	const body = document.getElementsByTagName(nodeList[i]);
    console.log(nodeList[i])
    const keyItems = [ 
                'campaign',
                'finance',
                'campaign',
                'financing',
                'Campaign',
                'donation',
                'Finance',
                'donation',
                'donations',
                'food',
                'water',
                'Water',
                'rain',
                'Rain',
                'state',
                'parents',
                'local',
                'school',
                'board',
                'Education',
                'state',
                'green',
                'Everglades',
                'Florida',
                'climate',
                'criminal',
                'justice',
                'justices',
                'Criminal',
                'justices',
                'jail',
                'time',
                'immigration',
                'reform',
                'Immigration',
                'reform',
                'immigrants',
                'illegal',
                'border',
                'wall',
                'lgbt',
                'LGBT',
                'rights',
                'equality',
                'voting',
                'process',
                'voting',
                'rights',
                'delegates',
                'women',
                'Women',
                'equality',
                'senior',
                'citizens',
                'Medicare',
                'Obamacare',
                'Social',
                'Security',
                'national'
        ]

        let length = body.length;
        let count = 0

        for(let t=0;t<length ; t++){
            let currentDiv = body[t].innerHTML;
            let currentText = body[t].innerText;
             for(let z=0;z<keyItems.length;z++){

                if( currentText.search(keyItems[z]) > 0 ){
                    
                    if(Math.abs(count % 2) == 1){
                        console.log(count + " is odd")
                        currentDiv = currentDiv.replace(new RegExp(keyItems[z],'g'), `<span style="background-color:#1E88E5; color: white" >`+keyItems[z]+`</span>`);
                        body[t].innerHTML = currentDiv 
                              
                    }
                    if( count % 2 == 0){
                        console.log(count + " is even")
                        currentDiv = currentDiv.replace(new RegExp(keyItems[z],'g'), `<span style="background-color:#F44336; color: white" >`+keyItems[z]+`</span>`);
                        body[t].innerHTML = currentDiv 
                    }   
                    count++
                }
            }
        }
    }

}

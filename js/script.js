$(function() {
    $(".button").on('click', function(){
    	// console.log("working!");
    	$(this).toggleClass('active');
 			
 			// Conky Sound Clip
			document.getElementById('conky-sound').play();

			getSecretWord();

    });

    function getSecretWord(){
    	var words = ["fun", "rain", "christmas"];
    	var rand = words[Math.floor(Math.random() * words.length)];
    	
    	if ('.active'){
    		console.log(rand);
    		$( "<p>" + rand + "</p>" ).appendTo( "#paper" );
    		
    	} else{
    		console.log("not working!");
    	};
    }
		

});




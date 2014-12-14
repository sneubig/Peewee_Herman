$(function() {
    $(".button").on('click', function(){
    	// console.log("working!");
    	$(this).toggleClass('active');
 			
 			// Conky Sound Clip
			// document.getElementById('conky-sound').play();

			getSecretWord();

    });

    function getSecretWord(){
    	var words = ["fun", "rain", "christmas"];
    	var rand = words[Math.floor(Math.random() * words.length)];
    	
    	if ('.active'){
    		$('#paper').text('');
    		console.log(rand);
    		$( "<h3>" + rand + "</h3>" ).appendTo( "#paper" );
    	} else{
    		console.log("not working!");
    	};
    }
		

});




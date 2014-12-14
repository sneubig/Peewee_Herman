$(function() {
    $(".button").on('click', function(){
    	// console.log("working!");
    	$(this).toggleClass('active');

   //  	var audio = document.getElementById("conky-sound");
			// audio.play();
			document.getElementById('conky-sound').play();

    	var words = ["fun", "rain", "christmas"];
    	var rand = words[Math.floor(Math.random() * words.length)];
    	
    	if ('.active'){
    		console.log(rand);
    		$( "<p>" + rand + "</p>" ).appendTo( "#paper" );

    		$( ".conky" ).toggle( "bounce", { times: 3 }, "slow" );
    	} else{
    		console.log("not working!");
    	};


    });
		

});
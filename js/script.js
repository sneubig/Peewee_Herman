$(function() {

	 	$('.button').bind('touchstart click', function() {
      // remove the active class from all elements with active class
      $('.active').removeClass('active');
      // add active class to clicked element
      $(this).addClass('active');
  	});

    $(".conky-start").on('touchstart click', function(){
 			
 			// Conky Sound Clip
			document.getElementById('conky-sound').play();

			getSecretWord();

    });

    $('.instructions').on('touchstart click', function(){
    	document.getElementById('peewee-instructions').play();
    });

    $('.scream').on('touchstart click', function(){
    	document.getElementById('peewee-scream').play();
    });

    function getSecretWord(){
    	var words = ["fun", "rain", "christmas", "look"];
    	var rand = words[Math.floor(Math.random() * words.length)];

    	if ('.active'){
    		$('#paper').text('');
    		console.log(rand);
    		$( "<h3>" + rand + "</h3>" ).appendTo( "#paper" );
    	} else{
    		console.log("not working!");
    	};
    };
		
});




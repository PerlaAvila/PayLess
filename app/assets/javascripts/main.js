    $(document).ready(function() {  
  		 $(".carousel-inner").swiperight(function() {  
    		  $(this).parent().carousel('prev');  
	    		});  
		   $(".carousel-inner").swipeleft(function() {  
		      $(this).parent().carousel('next');  
	   });  

		   $('.maps').click(function () {
		    $('.maps iframe').css("pointer-events", "auto");
		});

		$( ".maps" ).mouseleave(function() {
		  $('.maps iframe').css("pointer-events", "none"); 
		});

		 $('.4ewOd-pzNkMb-haAclf').css('background-color','#00AAE4');
	});  
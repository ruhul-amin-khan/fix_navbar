$(document).ready(function(){

	$('body').scrollspy({
		target: '.navbar',
		//offset: 95
	});


	$(window).scroll(function(){

		var aPos = $(document).scrollTop();
		var bPos = $("#about").offset().top;

		bPos -= 55;

		if(aPos >= bPos){
			$(".navbar").css({
				top: "0px",
				position: "fixed",
				bottom: "auto"
			});
		}
		else{
			$(".navbar").css({
				top: "auto",
				position: "absolute",
				bottom: "0px"
			});
		}

	});



});













$(document).ready(function(){









});
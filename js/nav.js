$(document).on("scroll", function(){
	if ($(document).scrollTop() > 100){
	  $(".navbar").addClass("shrink");
	}
	else
	{
		$(".navbar").removeClass("shrink");
	}
});
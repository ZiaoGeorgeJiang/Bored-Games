$(document).ready(function(){
	// window.onresize = function(){
	// }

	$(document).on("click", ".accordion-toggle", function() {
    	$(this).next().slideToggle('fast');
    	$(".accordion-content").not($(this).next()).slideUp('fast');
    });
});
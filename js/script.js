$(document).ready(function() {
	//Superslides JS
	$('#slides').superslides({
		animation: 'fade',
		play: 7000,
		pagination: false,
		inherit_height_from: '#slides',
	});

	//Clicking navbar links should make the page scroll to the appropriate position rather than jump there
	$("#navigation li a").click(function(e) {
		e.preventDefault();

		var targetElement = $(this).attr("href");
		var targetPosition = $(targetElement).offset().top;
		$("html, body").animate({ scrollTop: targetPosition - 50 }, "slow")
	});

	//Make the navbar stick to the top of the window
	const nav = $("#navigation");
	const navTop = nav.offset().top;

	$(window).on("scroll", stickyNavigation);

	function stickyNavigation() {
		const body = $("body");
		if($(window).scrollTop() > navTop) {
			body.css("padding-top", nav.outerHeight() + "px");
			body.addClass("fixedNav");
		}
		else {
			body.css("padding-top", 0);
			body.removeClass("fixedNav");
		}
	}
});
$(document).ready(function() {
	$(function() {
		$('.user__item').each(function(i) {
			$(this).delay((i++) * 500).fadeTo(1000, 1);
		})
	});

	$("#group2").click(function() {
		$(".group2").toggle(300);
	});
	$("#group1").click(function() {
		$(".group1").toggle(300);
	});


});